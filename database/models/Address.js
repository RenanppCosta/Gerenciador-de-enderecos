module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define("Address", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        street:{
            type: DataTypes.STRING,
            allowNull: false
        },
        neighborhood:{
            type: DataTypes.STRING,
            allowNull: false
        },
        city:{
            type: DataTypes.STRING,
            allowNull: false
        },
        state:{
            type: DataTypes.STRING,
            allowNull: false
        },
        number:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        complement:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "User",
                key: "id"
            }
        },
    },
    {
        tableName: "address",
        underscored: false,
        timestamps: false,
    })

    Address.associate = (models) =>{
        Address.belongsTo(models.User, {
            foreignKey: "user_id",
            as: "user"
        })
    }

    return Address;
}