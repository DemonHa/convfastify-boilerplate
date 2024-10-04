import { route } from "@/route";
import { name, version } from "@/../package.json";
import { Type } from "@sinclair/typebox";

export default route({
  method: "GET",
  url: "/info",
  schema: {
    response: {
      200: Type.Object({
        name: Type.String(),
        version: Type.String(),
      }),
    },
    tags: ["info"],
  },
  handler: () => {
    return { name, version };
  },
});
