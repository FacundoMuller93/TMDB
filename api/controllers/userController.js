const express = require("express");
const router = express.Router();
const passport = require("passport");
const NewUser = require("../models/NewUser");

//crear cuenta nueva

exports.register = (req, res) => {
  NewUser.create(req.body)
    .then((newUser) => {
      res.send(console.log(`${newUser.nombre} se ha conectado.`));
    })
    .catch((e) => console.log(e));
};

exports.login = (req, res) => {
  res.status(201).send(req.user);
};

//cerrar sesión
exports.logout = (req, res) => {
  req.logOut();
  res.sendStatus(200);
};

//agregar pelicula o serie a favoritos

exports.addFavorites = (req, res) => {
  NewUser.findOne({ where: { id: req.body.userId } }).then((user) => {
    user.dataValues.favoritos.push(req.body.movie);
    NewUser.update(user.dataValues, {
      where: { id: req.body.userId },
      returning: true,
    }).then((user) => {
      res.send(user);
    });
  });
};

//eliminar pelicula o serie de favoritos

exports.removeFavorites = (req, res) => {
  NewUser.findOne({ where: { id: req.body.userId } }).then((user) => {
    user.dataValues.favoritos = user.dataValues.favoritos.filter(
      (favorito) => favorito["id"] !== req.body.movie.id
    );
    NewUser.update(user.dataValues, {
      where: { id: req.body.userId },
      returning: true,
    }).then((user) => res.send(user));
  });
};

//obtener info del usuario

exports.userInfo = (req, res) => {
  const { id } = req.params;
  NewUser.findOne({ where: { id: id } }).then((user) => res.send(user));
};
