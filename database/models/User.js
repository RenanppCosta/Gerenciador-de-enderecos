const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        senha:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "users",
        timestamps: false,
    })

    User.associate = (models) =>{
        User.hasMany(models.Address, {
            foreingKey: "user_id",
            as:"address"
        })
    }

    return User;
}