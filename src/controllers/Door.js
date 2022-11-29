import Doors from "../models/Doors";

export const save = async(req, res)=> {
    const newDoor = new Doors(req.body);
    try {
        await newDoor.save()
        return res.status(201).json({message: '1'});
    } catch (error) {
        return res.status(500).json({message: '0'});
    }
}

export const getDoors = async(req, res) => {
    const doors = await Doors.find({});
    return res.status(200).json({data: doors});
}