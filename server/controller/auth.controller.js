import { createToken } from "../jwt/index.js";
import User from "../models/user.model.js";
import { compare } from "bcrypt";

export const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and Password is required.");
    }

    const expiresIn = 3 * 24 * 60 * 60 * 1000;

    const user = await User.create({ email, password });
    res.cookie("jwt", createToken(email, user.id), {
      expiresIn,
      secure: true,
    });

    return res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        profileSteup: user.profileSetup,
      },
    });
  } catch (error) {
    console.log({ error: error });
    return res.status(500).send("Internal Server error");
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and Password is required.");
    }

    const expiresIn = 3 * 24 * 60 * 60 * 1000;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found.");
    }

    const auth = await compare(password, user.password);

    res.cookie("jwt", createToken(email, user.id), {
      expiresIn,
      secure: true,
    });

    return res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        image: user.image,
        color: user.color,
        profileSteup: user.profileSetup,
      },
    });
  } catch (error) {
    console.log({ error: error });
    return res.status(500).send("Internal Server error");
  }
};

export const getUserInfo = async (req, res, next) => {
  try {
    const userData = await User.findById(req.userId);
    if (!userId) {
      return res.status(404).send("User not found");
    }

    return res.status(200).json({
      id: user.id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      image: user.image,
      color: user.color,
      profileSteup: user.profileSetup,
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error");
  }
};
