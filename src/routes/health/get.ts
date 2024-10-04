import { Type } from "@sinclair/typebox";

import { route } from "@/route";

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
