require('dotenv').config({ path: `./config/${process.env.NODE_ENV}.env` })

const express = require('express');                         // Import d'express
const app = express();                                      // utilisation de app importer par express
const route = require('./routes/route');                    // appel des routes.
const cors = require('cors');
const session = require('express-session');                  // import de la lib express session
const cookieParser = require('cookie-parser');

app.use(express.json());                                    // middleware qui parse le body en JSON pour qu'il soit utilisable
app.use(cookieParser());                                    // middleware qui permet d'utiliser cookie parser

app.use(cors({
    origin : "http://localhost:3000",                       // autoriser le react 
    credentials: true                                       // passer les credentials en true pour les verifs de cookies
}))


app.use(session({
    secret: 'Jean-michel',
    saveUninitialized: false,
    resave: true,
    cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }
}));

/**------------------------------------------------------Serveur express--------------------------------------------- **/

app.get('/api', ( _ , res) =>{                              // route pour avoir des infos : 2 params (req, res) <= function callback

    res.status(200).json({
        success: 'Vous etes connecté !',
    });
});

//* -------------------------------------------Ajout de la route pour nos procédures stocker------------------------------------------------ *//

app.use('/api', route)                          // Préfixe des routes pour ? (indicatif)



app.listen(process.env.PORT, () => {            //* Port d'écoute du server  */
    console.log(`Le server écoute sur le port ${process.env.PORT}`);
})
