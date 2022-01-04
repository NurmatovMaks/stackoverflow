module.exports = {
  get: {
    tags: ["Users"],
    description: " Get all list of users",
    operationId: "getUsers",
    parameters: [],
    responses: {
      200: {
        description: "succesfull list of users",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
      },
    },
  },
};
