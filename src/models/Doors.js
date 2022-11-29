import { model, Schema } from "mongoose";

const DoorsSchema = new Schema({
    nombre: {type: String, required: true}
});

export default model('Door', DoorsSchema);