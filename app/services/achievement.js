const cloudinary = require("../lib/cloudinaryConfig");
const prisma = require("../lib/prisma");
module.exports = {
  createAchievement: async (req) => {
    const { title, type } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "personal",
    });

    const achievement = await prisma.achievement.create({
      data: {
        title,
        type,
        imageUrl: result.secure_url,
        public_id: result.public_id,
      },
    });
    return achievement;
  },
  showAchievement: async (req) => {
    const result = await prisma.achievement.findMany();
    return result;
  },
  deleted: async (req) => {
    const { id } = req.params;
    const result = await prisma.achievement.delete({
      where: {
        id,
      },
    });
    await cloudinary.uploader.destroy(result.public_id);
    return result;
  },
};
