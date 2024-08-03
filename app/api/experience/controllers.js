const { create, show, deleted } = require("../../services/experience");

module.exports = {
  index: async (req, res, next) => {
    try {
      const result = await create(req);
      return res.json({ data: result });
    } catch (error) {
      return next(error);
    }
  },

  show: async (req, res, next) => {
    try {
      const result = await show(req);
      return res.json({ data: result });
    } catch (error) {
      return next(error);
    }
  },
  deleted: async (req, res, next) => {
    try {
      const result = await deleted(req);
      return res.json({ data: result });
    } catch (error) {
      return next(error);
    }
  },
};
