import config from "@/config";
import { getApp } from "@/app";

getApp().listen({
  port: config.server.port,
});
