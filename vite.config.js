import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  appType: "spa",   // "/"로 들어와도 index.html 응답
  // root/base/build.lib 같은 커스텀은 넣지 마세요.
});
