require('dotenv').config({ path: `./config/${process.env.NODE_ENV}.env` })

const express = require('express');                         // Import d'express
const app = express();                                      // utilisation de app importer par express
const route = require('./routes/route');                    // appel des routes.
const cors = require('cors');
const session = require('express-session');                  // import de la lib express session
const cookieParser = require('cookie-parser');

app.use(express.json());                                    // middleware qui parse le body en JSON pour qu'il soit utilisable
app.use(cookieParser());                                    // middleware qui permet d'utiliser cookie parser

if (process.env.NODE_ENV === 'dev') {
    app.use(cors({
        origin : "http://localhost:3000",                       // autoriser le react 
        credentials: true                                       // passer les credentials en true pour les verifs de cookies
    }))
}
    

app.use(session({
    secret: 'Jean-michel',
    saveUninitialized: false,
    resave: false,
    cookie: { httpOnly: true, secure: process.env.NODE_ENV == 'prod', maxAge: 1000 * 60 * 60 * 24 }
}));

/**------------------------------------------------------Serveur express--------------------------------------------- **/
const PREFIX = process.env.NODE_ENV == 'dev' ? '/api' : '/' ;
app.get(PREFIX, ( _ , res) =>{                              // route pour avoir des infos : 2 params (req, res) <= function callback

    res.status(200).json({
        success: 'Vous etes connecté !',
    });
});

//* -------------------------------------------Ajout de la route pour nos procédures stocker------------------------------------------------ *//

app.use(PREFIX, route)                          // Préfixe des routes 

//* Port d'écoute du server  */
app.listen(process.env.PORT, () => {
    console.log(`Le server écoute sur le port ${process.env.PORT}`);
})
