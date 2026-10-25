import { FunctionTool } from "@google/adk";
import { getCustomerConfig } from "../config/tools-config.ts";
import z from "zod";
import { db } from "../db.ts";

const getCustomer = new FunctionTool({
  name: getCustomerConfig.name,
  description: getCustomerConfig.description,
  parameters: z.object({
    email: z.string().describe("The customer's email address"),
    phoneLast4: z
      .string()
      .regex(/^\d{4}$/)
      .describe("Last 4 digits of their phone numbers"),
  }),
  execute: async ({ email, phoneLast4 }, context) => {
    const customer = await db.customer.findUnique({
      where: {
        email: email,
      },
    });

    if (!customer || !customer.phone.endsWith(phoneLast4)) {
      return { status: "error", message: "These detailes don't matchs" };
    }

    context?.state.set("customeId", customer.id);

    return { status: "success", name: customer.name };
  },
});

export default getCustomer;
