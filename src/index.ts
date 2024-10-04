import { getApp } from "@/app";
import config from "@/config";

getApp().listen({
  port: config.server.port,
});
