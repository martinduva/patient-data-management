"use client";

import { z } from "zod";

export const patientSchema = z.object({
  name: z.string().min(1).max(100),
  // avatar: z.string().min(0).max(100),
  description: z.string().min(1).max(100),
  website: z.string().min(1).max(500),
});
