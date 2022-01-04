module.exports = {
  get: {
    tags: ["Problem"],
    description: "get all problem",
    operationId: "getAllProblem",
    parameters: [
      {
        name: "q",
        in: "query",
        schema: {
          type: "string",
          description: "serch for specific problem by title or tag",
          example: "q=hello",
        },
        description: "erch for specific problem",
      },
      {
        name: "page",
        in: "query",
        schema: {
          type: "number",
          description: "page of problems",
          example: "page=2",
        },
        description: "erch for specific page of  problem",
      },
    ],
    responses: {
      200: {
        description: "one problem",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Problem",
              },
            },
          },
        },
      },
    },
  },
};
