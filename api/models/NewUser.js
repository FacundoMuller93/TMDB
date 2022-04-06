const {Sequelize, DataTypes} = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class NewUser extends Sequelize.Model {}

NewUser.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    favoritos: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: [],
    },
    salt: {
        type: DataTypes.STRING,
      },
}, { sequelize: db, modelName: "newuser"
})

NewUser.prototype.hash = function (password, salt) {
    return bcrypt.hash(password, salt);
  };

NewUser.beforeCreate((user) => {
    return bcrypt
      .genSalt(4)
      .then((salt) => {
        user.salt = salt;
        return user.hash(user.contraseña, user.salt);
      })
      .then((hash) => {
        user.contraseña = hash;
      });
  });

module.exports = NewUser;