module.exports = {
  post: {
    tags: ["Users"],
    description: "signup user",
    operationId: "signupUser",
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
              firstName: {
                type: "string",
                description: "name of users",
                example: "Maks",
              },
              LastName: {
                type: "string",
                description: "lastname of users",
                example: "Ushakov",
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
    },
  },
};
