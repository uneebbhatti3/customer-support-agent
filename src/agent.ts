import { LlmAgent } from "@google/adk";
import { agentConfig } from "./config/agent-config.ts";

export const rootAgent = new LlmAgent({
  name: agentConfig.name,
  model: agentConfig.model,
  description: agentConfig.description,
  instruction: agentConfig.instruction,
});
