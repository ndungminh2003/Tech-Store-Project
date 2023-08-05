import nc from "next-connect";
import db from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcrypt";

const handler = nc();

// Sign Up handler
handler.put(async (req, res) => {
  try {
    await db.connectDb();
    const { user_id, password } = req.body;
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: "This Account does not exist." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await user.updateOne({
      password: hashedPassword,
    });

    res.json({ email: user.email });

    await db.disconnectDb();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default handler;
