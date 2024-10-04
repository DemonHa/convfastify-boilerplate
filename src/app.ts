import fastifyCors from "@fastify/cors";
import convfastify from "convfastify";
import Fastify from "fastify";

import config from "@/config";

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
