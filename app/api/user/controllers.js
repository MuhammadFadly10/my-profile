const { login } = require("../../services/user");

module.exports = {
  index: async (req, res, next) => {
    try {
      const result = await login(req);
      return res.json({ data: result });
    } catch (error) {
      return next(error);
    }
  },
};
