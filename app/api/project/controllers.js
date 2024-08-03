const {
  createProject,
  showProject,
  deleted,
} = require("../../services/project");

module.exports = {
  index: async (req, res, next) => {
    try {
      const result = await createProject(req);
      return res.json({ data: result });
    } catch (error) {
      return next(error);
    }
  },

  show: async (req, res, next) => {
    try {
      const result = await showProject(req);
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
