import * as Mongoose from "mongoose";

let database: Mongoose.Connection;

export const connect = async () => {
  const uri = "mongodb+srv://admin:admin@localhost/user?retryWrites=true&w=majority";
  if (database) {
    return;
  }

  await Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  });
};

export const disconnect = async () => {
  if (!database) {
    return;
  }

  await Mongoose.disconnect();
};