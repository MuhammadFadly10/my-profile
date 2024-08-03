const prisma = require("../lib/prisma");
const cloudinary = require("../lib/cloudinaryConfig");

module.exports = {
  createProject: async (req) => {
    const { language, title, stack, description, github, url, techStack } =
      req.body;

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "personal",
    });

    const project = await prisma.project.create({
      data: {
        language,
        title,
        stack,
        description,
        github,
        url,
        techStack,
        imageUrl: result.secure_url,
        public_id: result.public_id,
      },
    });

    return project;
  },
  showProject: async (req) => {
    const result = await prisma.project.findMany();
    return result;
  },
  deleted: async (req) => {
    const { id } = req.params;
    const result = await prisma.project.delete({
      where: {
        id,
      },
    });
    await cloudinary.uploader.destroy(result.public_id);
    return result;
  },
};
