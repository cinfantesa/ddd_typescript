import mongoose from 'mongoose';

let database: mongoose.Connection;

export const connect = async () => {
  const uri = 'mongodb://localhost/user';
  if (database) {
    return;
  }

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = mongoose.connection;

  database.once('open', async () => {
    console.log('Connected to database');
  });

  database.on('error', () => {
    console.log('Error connecting to database');
  });
};

export const disconnect = async () => {
  if (!database) {
    return;
  }

  await mongoose.disconnect();
};