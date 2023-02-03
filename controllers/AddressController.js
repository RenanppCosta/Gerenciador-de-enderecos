const db = require("../database/models");

const createAddress = async (req,res)=>{
    const { street, neighborhood, city, state, number, complement, user_id } = req.body;
    try {
        const address = await db.Address.create({
            street,
            neighborhood,
            city, 
            state, 
            number, 
            complement, 
            user_id 
        });

        return res.json(address);

    } catch (err) {
        res.status(500).send({message: err.message});
    }
    
}

const getAllAdress = async (req, res) =>{
    try {
        const allAdress = await db.Address.findAll({
            include:[
                {
                    model: db.User,
                    as:"user",
                    attributes:["name"]
                }
            ]
        });
        
        return res.json(allAdress)

    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

const updateAddress = async (req,res) =>{
    const { street, neighborhood, city, state, number, complement, user_id } = req.body;
    const {id} = req.params;
    
    try {
        const addressUpdate = await db.Address.update(
        {
            street,
            neighborhood,
            city, 
            state, 
            number, 
            complement, 
            user_id  
        },
        {
            where:{
                id
            }
        });

        return res.json(addressUpdate)
    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

const deleteAddress = async (req,res) =>{
    const {id} = req.params;
    try {
         await db.Address.destroy({where: {id}});

        return res.send("Endereço apagado!")
    } catch (err) {
        res.status(500).send({message: err.message});
    }
}



module.exports = {
    createAddress,
    getAllAdress,
    updateAddress,
    deleteAddress
}