const pool = require('../config/database');
const { call } = require('../utils/index');                          // pas besoin de mettre le '/index' quand le fichier se nomme index.

module.exports = {                                                  // export pour l'utiliser dans un autre fichier
    
    test: async (req, res) => {

        let connection;

        try {

            connection = await pool.getConnection();
            const result = await connection.query('SELECT * FROM utilisateur;');
            console.log(result);
            return res.status(200).json( { success: result} );

        } catch (error) {
            
            return res.status(400).json( { error: error.message } );

        } finally {

            if (connection) connection.end();

        }
    },

    deleteUtilisateur: async (req, res) => {
        let connection; 
        try {
            const { id } = req.params;
            connection = await pool.getConnection();
            const result = await connection.query('CALL delete_utilisateur(?);',[id]);      // utiliser le même nom pour la requete.
            console.log(result);
            return res.status(200).json( { success: result } );

        }
        catch (error) {

            return res.status(400).json( { error: error.message } );

        } finally {

            if (connection) connection.end();

        }
    },
    insertUtilisateur : async (req, res) =>{

        let connection;
        const { id, nom, prenom, ddn, sexe, adresse, cp, ville, pays, mobile, email, psswd } = req.body
        try {
            connection = await pool.getConnection();
            
            const result = await connection.query('CALL insert_utilisateur(?,?,?,?,?,?,?,?,?,?,?);', [nom, prenom, ddn, sexe, adresse, cp, ville, pays, mobile, email, psswd]);

            return res.status(200).json ( { success: result } );


        } catch (error) {

            return res.status(400).json( {error: error.message});                   

        } finally {
            if (connection) connection.end()                                        
        }
    },
};