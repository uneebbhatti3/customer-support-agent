import { FunctionTool } from "@google/adk";
import { getOrderConfig } from "../config/tools-config.ts";
import z from "zod";
import { db } from "../db.ts";

const getOrder = new FunctionTool({
  name: getOrderConfig.name,
  description: getOrderConfig.description,
  parameters: z.object({
    orderNumber: z
      .number()
      .int()
      .min(1)
      .describe("Tje order numnber, e.g. 4512"),
  }),
  execute: async ({ orderNumber }, context) => {
    const customerId = context?.state.get<number>("customeId");

    if (!customerId) {
      return {
        staus: "error",
        message: "Customer not verified.",
      };
    }

    const order = await db.order.findFirst({
      where: { orderNumber, customerId },
      select: {
        orderNumber: true,
        product: true,
        status: true,
        carrier: true,
        trackingNumber: true,
      },
    });

    if (!order) {
      return {
        status: "error",
        message: "No order with that number on this customer's account",
      };
    }

    return {
      status: "success",
      order,
    };
  },
});

export default getOrder;
