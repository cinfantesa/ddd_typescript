import {Schema} from 'mongoose';

interface NameDocument {
  name: string;
  firstSurname?: string;
}

interface UserDocument {
  username: string;
  mail: string;
  name: NameDocument;
}

const UserSchema: Schema = new Schema({
  username: { type: String, unique: true, required: true },
  mail: { type: String, unique: true, required: true },
  name: {
    name: String,
    firstSurname: String
  }
});

export {UserSchema, UserDocument}