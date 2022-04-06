const express = require("express");
const app = express();
// const path = require("path");
const db = require("./config/db");
const routes = require("./routes");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cors = require("cors");
const NewUser = require("./models/NewUser");

//Middleware


app.use(cors());
// app.use(cors({ // se asegura de que no recibas pedidos desde cualquier lugar
//   origin: "http://localhost:3001", //solo toma pedidos desde este lugar
//   credentials: true
// }))

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json()); // permite que la info que se envia se convierta a formato .json, hace lo mismo que el express.json()

app.use(morgan('tiny')); // loggea errores, otras alternativas: volleyball

app.use(cookieParser("bootcamp")); // popula req.cookies

app.use(session({ secret: "bootcamp", resave: true , saveUninitialized: true })); // popula req.session

app.use(passport.initialize());

app.use(passport.session());


//User Auth
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "contraseña",
    },
    function(email, password, done) {
      console.log(email, password, "primer console log")
      NewUser.findOne({where: { email }})
        .then((user) => {
          if (!user) {
            return done(null, false); // user not found
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.contraseña) {
              return done(null, false); // invalid password
            }
            done(null, user); // success :D
          });
        })
        .catch((e) => { console.log(e); done(e)});
    }
  )
);

// How we save the user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// How we look for the user
passport.deserializeUser(function(id, done) {
  NewUser.findByPk(id).then((user) => done(null, user));
});

app.use("/api", routes);

//importar routers acá

// app.get("/", function (req, res, next) {
//   res.sendFile(path.join(__dirname, "./index.html"));
// });

app.use(function(err, req, res, next) {
  console.error(err, err.stack);
  res.status(500).send(err);
});

const port = 3001;

db.sync({
  // force: true // (si no está force, por defecto es false)
}).then(function() {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
});

module.exports = app;
