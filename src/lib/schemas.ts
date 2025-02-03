"use client";

import { z } from "zod";

import { Errors } from "@/constants";

export const patientSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: Errors.PATIENT_FORM_REQUIRED_ERROR,
    })
    .max(100, {
      message: "Name must be less than 100 characters",
    }),
  description: z.string().max(500, {
    message: "Description must be less than 500 characters",
  }),
  website: z.string().max(500, {
    message: "Website must be less than 500 characters",
  }),
});
