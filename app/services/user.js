const bcrypt = require("bcryptjs");
const prisma = require("../lib/prisma");
const { createJwt, createPayloadUser } = require("../utils");

module.exports = {
  login: async (req) => {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new console.error("Error");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new console.error("Error");
    }

    const token = await createJwt({ payload: createPayloadUser(user) });

    return { token };
  },
};
