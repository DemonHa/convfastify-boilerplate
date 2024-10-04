import { Type } from "@sinclair/typebox";

import { name, version } from "@/../package.json";
import { route } from "@/route";

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
