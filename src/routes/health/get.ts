import { route } from "@/route";
import { Type } from "@sinclair/typebox";

export default route({
  method: "GET",
  url: "/health",
  schema: {
    response: {
      200: Type.Object({
        message: Type.String(),
      }),
    },
    tags: ["info"],
  },
  handler: (_, reply) => {
    reply.send({ message: "ok" });
  },
});
