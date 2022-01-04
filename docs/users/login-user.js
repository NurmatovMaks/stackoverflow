module.exports = {
  post: {
    tags: ["Users"],
    description: "login user",
    operationId: "loginUser",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                description: "email of users",
                example: "Maks@gmail.com",
              },
              password: {
                type: "string",
                minLength: 3,
                maxLength: 30,
                description: "password of users",
                example: "12345",
              },
            },
            required: ["email", "password"],
          },
        },
      },
    },
    responses: {
      200: {
        description: "get tokens",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Token",
            },
          },
        },
      },
      400: {
        description: "user with given creds not found",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "user not found",
                },
              },
            },
          },
        },
      },
    },
  },
};
