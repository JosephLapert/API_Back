require('dotenv').config({ path: `./config/${process.env.NODE_ENV}.env` })

const express = require('express');                         // Import d'express
const app = express();                                      // utilisation de app importer par express
const route = require('./routes/route');                    // appel des routes.

/**------------------------------------------------------Serveur express--------------------------------------------- **/

app.use(express.json());                                    //middleware qui parse le body en JSON pour qu'il soit utilisable

app.get('/api', ( _ , res) =>{                              // route pour avoir des infos : 2 params (req, res) <= function callback

    res.status(200).json({
        success: 'API',
    });
});

//* -------------------------------------------Ajout de la route pour nos procédures stocker------------------------------------------------ *//

app.use('/api', route)                          // Préfixe des routes pour ? (indicatif)


//* Port d'écoute du server  */
app.listen(process.env.PORT, () => {
    console.log(`Le server écoute sur le port ${process.env.PORT}`);
})
