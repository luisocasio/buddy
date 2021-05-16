const mongoose = require("mongoose");
const colors = require("colors");

const mongooseConnect = () => {
  mongoose.connect(`${process.env.db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", () => console.log("Connection Error".red));
  db.once("open", () => console.log("Database Connected!".rainbow));
};

module.exports.mongooseConnect = mongooseConnect();
