import { LlmAgent } from "@google/adk";
import { agentConfig } from "./config/agent-config.ts";
import getCustomer from "./tools/get-customer.ts";
import getOrder from "./tools/get-order.ts";

export const rootAgent = new LlmAgent({
  name: agentConfig.name,
  model: agentConfig.model,
  description: agentConfig.description,
  instruction: agentConfig.instruction,
  tools: [getCustomer, getOrder],
});
