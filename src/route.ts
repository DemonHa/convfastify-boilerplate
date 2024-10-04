import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { route as convroute } from "convfastify";

export const route = convroute.withType<TypeBoxTypeProvider>().define;
