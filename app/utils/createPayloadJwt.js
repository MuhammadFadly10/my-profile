const createPayloadUser = (user) => {
  return {
    name: user.name,
    userId: user.id,
    email: user.email,
  };
};

module.exports = { createPayloadUser };
