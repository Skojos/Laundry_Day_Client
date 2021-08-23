import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Credentials({
      name: "Custom Provider",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "email@email.se",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { name: "John Doe", email: "j@j.se" };
        return user;
      },
    }),
  ],
  session: {
    jwt: true,
  },
};

export default (req, res) => NextAuth(req, res, options);
