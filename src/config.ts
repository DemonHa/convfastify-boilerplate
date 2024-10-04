import { config as dotenvConfig } from "dotenv";
import { cleanEnv, port, str } from "envalid";

dotenvConfig();

const envs = cleanEnv(process.env, {
  PORT: port({
    desc: "Port number",
    default: 8080,
  }),
  CORS_ALLOWED_ORIGINS: str({
    desc: "Allow origins",
    default: "*",
  }),
});

const config = {
  server: {
    port: envs.PORT,
    cors: envs.CORS_ALLOWED_ORIGINS,
  },
};

export default config;
