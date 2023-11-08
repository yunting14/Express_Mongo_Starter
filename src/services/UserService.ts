import UserRepository from "../repository/UserRepository"

async function getAllUsers(){
    return await UserRepository.getAllUsers();
}

export default {
    getAllUsers
}