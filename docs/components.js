module.exports = {
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Uniq user id",
            example: "1",
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
          email: {
            type: "string",
            description: "email of users",
            example: "Maks@gmail.com",
          },
          password: {
            type: "string",
            description: "password of users",
            example: "12345",
          },
        },
      },
      Problem: {
        type: "object",
        properties: {
          id: {
            type: "number",
            example: "3",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          tag: {
            type: "string",
            example: "Java",
            description:
              "Tag is enum, allowed only (Java, Javascript, Piton, Kotlin)",
          },
          replies: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Reply",
            },
          },
          pictures: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "number",
                  description: "picture id",
                  example: 2,
                },
                image: {
                  type: "string",
                  description: "name of the image",
                  example: "67d2c8ff-346b-4cda-b6a6-067dcef52305.png",
                },
              },
            },
          },
        },
      },
      Reply: {
        type: "object",
        properties: {
          userId: {
            type: "number",
            description: "author of reply",
            example: 1,
          },
          problemId: {
            type: "number",
            description: "id of related problem",
            example: 1,
          },
          text: {
            type: "string",
            description: "body of reply",
            example: "this is reply to problem",
          },
        },
      },
      Token: {
        type: "object",
        properties: {
          accessToken: {
            type: "string",
            description: "this is access token",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          },
          refreshToken: {
            type: "string",
            description: "this is refresh token",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          },
        },
      },
    },
  },
};
