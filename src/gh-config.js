import { prebuiltAppConfig } from "@mlc-ai/web-llm";

export default {
  model_list: [
    {
      model: "http://localhost:8000/Llama-3.1-8B-Instruct-q4f32_1-MLC",
      model_id: "Llama-3.1-8B-Instruct-q4f32_1-MLC",
      model_lib:
        "http://localhost:8000/Llama-3_1-8B-Instruct-q4f32_1-ctx4k_cs1k-webgpu.wasm",
      overrides: {
        context_window_size: 2048,
      },
    },
  ],
  use_web_worker: true,
};
