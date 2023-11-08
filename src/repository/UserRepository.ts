import userModel from "../db/UserSchema";

async function getAllUsers() {
    // exclude the field __v
    return await userModel.find().select('-__v');
}

export default {
    getAllUsers
}