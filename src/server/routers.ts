import { initTRPC, TRPCError } from '@trpc/server';
import { z } from 'zod';
import { db } from '../db';
import { reports, users } from '../db/schema';
import { eq } from 'drizzle-orm';

const t = initTRPC.create();

export const appRouter = t.router({
  // حفظ التقارير السيادية مع التحقق من الباقة
  saveSovereignReport: t.procedure
    .input(z.object({
      userId: z.number(),
      typeId: z.number(),
      title: z.string(),
      answers: z.any(),
    }))
    .mutation(async ({ input }) => {
      const user = await db.query.users.findFirst({ where: eq(users.id, input.userId) });
      
      // تطبيق حدود الباقات
      if (user?.plan === 'FREE' && (user.reportsCount ?? 0) >= 1) {
        throw new TRPCError({ code: 'FORBIDDEN', message: 'تجاوزت حد الباقة المجانية' });
      }
      
      return await db.insert(reports).values({
        userId: input.userId,
        reportTypeId: input.typeId,
        title: input.title,
        answers: input.answers,
      });
    }),
});

export type AppRouter = typeof appRouter;
