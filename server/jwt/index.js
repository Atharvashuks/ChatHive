import pkg from "jsonwebtoken";
const { sign, verify } = pkg;

export const createToken = (email, userId) => {
  const expiresIn = 3 * 24 * 60 * 60 * 1000;
  return sign({ email, userId }, process.env.JWT_SECRET_KEY, { expiresIn });
};

export const verifyToken = (token, jwtKey) => {
  return verify(token, jwtKey, async (err, payload) => {
    if (err) return err;
    return payload.userId;
  });
};
