import pkg from "jsonwebtoken";
const { verify } = pkg;

export const authMiddleware = async (res, req, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).send("You are not authorised.");
  }

  verify(token.process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).send("Token Invalid.");
    req.userId = payload.userId;
    next();
  });
};
