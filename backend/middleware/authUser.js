import jwt from "jsonwebtoken";

// User Authentication Middleware
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized, Login Again" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach userId to request for later use
    req.user = { id: decoded.id };
    

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Invalid or Expired Token" });
  }
};

export default authUser;
