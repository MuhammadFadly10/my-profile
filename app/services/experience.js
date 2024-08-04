const moment = require("moment");
const prisma = require("../lib/prisma");

module.exports = {
  create: async (req) => {
    const { startDate, endDate, title, description, tag, jobs, techStack } =
      req.body;

    const result = await prisma.experience.create({
      data: {
        startDate,
        endDate,
        title,
        description,
        tag,
        jobs,
        techStack,
      },
    });
    return result;
  },

  show: async (req) => {
    const result = await prisma.experience.findMany();
    return result;
  },

  deleted: async (req) => {
    const { id } = req.params;
    const result = await prisma.experience.delete({
      where: {
        id,
      },
    });
    return result;
  },
};
