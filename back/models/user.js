const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, Unique: true },
  password: String,
  object: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "object",
      default: [],
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    let hashedPwd = await bcrypt.hash(this.password, 10);
    this.password = hashedPwd;
  }
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
