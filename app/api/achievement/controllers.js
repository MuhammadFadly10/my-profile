const {
  createAchievement,
  showAchievement,
  deleted,
} = require("../../services/achievement");

module.exports = {
  index: async (req, res, next) => {
    try {
      const result = await createAchievement(req);
      return res.json({ data: result });
    } catch (error) {
      return next(error);
    }
  },

  show: async (req, res, next) => {
    try {
      const result = await showAchievement(req);
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
