import jsonwebtoken from "jsonwebtoken";

const secret = "asdasdasdasdasdasd";

export const generateToken = (user) => {
  return jsonwebtoken.sign(user, secret, { expiresIn: "30m" });
};

export const verifyToken = (token) => {
  try {
    return jsonwebtoken.verify(token, secret);
  } catch (error) {
    return false;
  }
};

export const decodeToken = (token) => {
  return jsonwebtoken.decode(token);
};

export const refreshToken = (token) => {
  return jsonwebtoken.sign(token, secret, { expiresIn: "30m" });
};

export const tokenMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).send("Unauthorized");
  }
  // check valid token
  const user = verifyToken(token);

  if (!user) {
    return res.status(401).send("Unauthorized");
  }
  next();
};
