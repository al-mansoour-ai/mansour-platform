import { pgTable, serial, text, integer, timestamp, jsonb, pgEnum } from 'drizzle-orm/pg-core';

// 1. تعريف الباقات السيادية
export const planEnum = pgEnum('plan_type', ['FREE', 'PRO', 'ENTERPRISE']);

// 2. جدول المستخدمين (Users)
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  plan: planEnum('plan').default('FREE'),
  reportsCount: integer('reports_count').default(0), 
  createdAt: timestamp('created_at').defaultNow(),
});

// 3. جدول التقارير الاستراتيجية (Reports)
export const reports = pgTable('reports', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  reportTypeId: integer('report_type_id').notNull(), 
  title: text('title').notNull(), 
  answers: jsonb('answers').notNull(), 
  aiOutput: text('ai_output'), 
  status: text('status').default('DRAFT'), 
  createdAt: timestamp('created_at').defaultNow(),
});
