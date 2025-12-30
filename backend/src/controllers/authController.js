import HTTP_STATUS from "../utils/httpStatusCodes.js";

export const signup = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};
