import { initTRPC, TRPCError } from '@trpc/server';
import { z } from 'zod';
import { db } from '../db';
import { reports, users } from '../db/schema';
import { eq } from 'drizzle-orm';

const t = initTRPC.create();

export const appRouter = t.router({
  // 1. استلام وحفظ التقارير مع الصرامة في التحقق من الباقة
  saveSovereignReport: t.procedure
    .input(z.object({
      userId: z.number(),
      typeId: z.number(),
      title: z.string(),
      answers: z.any(),
    }))
    .mutation(async ({ input }) => {
      // جلب بيانات المستخدم للتحقق من السقف المسموح له
      const user = await db.query.users.findFirst({ where: eq(users.id, input.userId) });
      
      // تطبيق حدود الباقات (1 للمجاني، 10 للاحترافي)
      if (user?.plan === 'FREE' && user.reportsUsed >= 1) {
        throw new TRPCError({ code: 'FORBIDDEN', message: 'تجاوزت حد الباقة المجانية (تقرير واحد فقط)' });
      }
      if (user?.plan === 'PRO' && user.reportsUsed >= 10) {
        throw new TRPCError({ code: 'FORBIDDEN', message: 'تجاوزت حد الباقة الاحترافية (10 تقارير)' });
      }

      // حفظ التقرير في الخزانة
      return await db.insert(reports).values({
        userId: input.userId,
        typeId: input.typeId,
        title: input.title,
        answers: input.answers,
      });
    }),
});

export type AppRouter = typeof appRouter;
