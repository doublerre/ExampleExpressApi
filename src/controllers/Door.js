import Doors from "../models/Doors";

export const save = async(req, res)=> {
    const newDoor = new Doors(req.body);
    await newDoor.save()

    return res.status(201).json({message: '1'});
}