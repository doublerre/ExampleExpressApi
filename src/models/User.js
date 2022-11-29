import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    nombre: {type: String, required: true},
    correo: String,
});

const UserHasTarget = new Schema({
    id_user: [{
        ref:  'User',
        type: Schema.Types.ObjetId,
    }],
    id_target: [{
        ref: 'Target',
        type: Schema.Types.ObjectId,
    }]
})

const TargetSchema = new Schema({
    id_target: {type: String, required: true},
    active: Boolean,
})

export default model('User', UserSchema);