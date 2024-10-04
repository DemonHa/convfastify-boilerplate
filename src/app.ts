import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import config from "@/config";
import convfastify from "convfastify";

export const getApp = () => {
  const fastify = Fastify({
    logger: true,
  });

  fastify.register(fastifyCors, {
    origin: config.server.cors,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  });

  fastify.register(
    convfastify()
      .loadFrom(`${__dirname}/routes/**/*.{js,ts}`)
      .serveSwagger()
      .register()
  );

  return fastify;
};
