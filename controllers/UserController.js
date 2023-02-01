const db = require("../database/models");

const createUser = async (req,res)=>{
    const { name, email, senha } = req.body;
    try {
        const user = await db.User.create({
            name,
            email,
            senha
        });

        return res.json(user);

    } catch (err) {
        res.status(500).send({message: err.message});
    }
    
}

const getAllUser = async (req,res)=>{
    try {
        const allUser = await db.User.findAll();
        return res.json(allUser);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

const getUserByid = async (req,res)=>{
    const { id } = req.params;
    try {
        const userById = db.User.findByPk(id);
        return res.json(userById);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

const updateUser = async (req,res)=>{
    const { id } = req.params;
    const { name, email, senha } = req.body;
    try {
        const userUpdate = await db.User.update(
        {
            name,
            email,
            senha
        },
        {
            where:{
                id
            }
        });

        return res.json({name, email, senha});

    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

const deleteUser = async (req,res)=>{
    const { id } = req.params;
    try {
        const userDelete = await db.User.destroy({where: {id}})

        return res.json(userDelete);

    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

module.exports = {
    createUser,
    getAllUser,
    getUserByid,
    updateUser,
    deleteUser
}