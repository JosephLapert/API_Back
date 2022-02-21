const pool = require('../config/database');
const { call } = require('../utils/index');                                                                         // pas besoin de mettre le '/index' quand le fichier se nomme index.

module.exports = {                                                                                                  // export pour l'utiliser dans un autre fichier
    
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
            const result = await connection.query('CALL delete_utilisateur(?);',[id]);                              // utiliser le même nom pour la requete.
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
        const { nom, prenom, ddn, sexe, adresse, cp, ville, pays, mobile, email, psswd } = req.body
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
    updateUtilisateur : async (req, res) => {
        let connection;
        const { id, nom, prenom, ddn, sexe, adresse, cp, ville, pays, mobile, email, psswd} = req.body;
        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL update_utilisateur(?,?,?,?,?,?,?,?,?,?,?,?);', [id, nom, prenom, ddn, sexe, adresse, cp, ville, pays, mobile, email, psswd]);
            return res.status(200).json ( { success: result } );

        } catch (error) {
            
            return res.status(400).json( {error: error.message});   

        } finally {

            if (connection) connection.end()  

        }
    },
    insertComment : async (req, res) => {
        let connection;
        const { commentaire } = req.body;
        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL insert_comment(?);', [commentaire]);
            return res.status(200).json ( { success: result } );

        } catch (error) {
            
            return res.status(400).json( {error: error.message}); 
        } finally {

            if (connection) connection.end()  
        }
    },
    selectSeance : async (req, res) => {
        let connection;
        const { id } = req.params;
        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL seance_test(?);', [id]);
            return res.status(200).json ( { success: result } );

        } catch (error) {

            return res.status(400).json( {error: error.message}); 

        } finally {

            if (connection) connection.end()  

        }
    },
    insertStatutInscription : async (req,res) => {
        let connection;
        const { nom } = req.body;
        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL insert_statut_inscription(?);', [nom]);
            return res.status(200).json ( { success: result } );

        } catch (error) {

            return res.status(400).json( {error: error.message}); 

        } finally {

            if (connection) connection.end()  

        }
    },
    verifPasswordUser : async (req, res) => {
        let connection;
        const { email, psswd } = req.body;
        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL verif_psswd_user(?,?);', [email, psswd]);
            if(!result[0].length) {
                return res.status(401).json ( { error: "identifiant invalide"} )
            }
            
            return res.status(200).json ( { success: result } );

        } catch (error) {

            return res.status(400).json( {error: error.message}); 

        } finally {

            if (connection) connection.end()  
            
        }
    },
    selectSeanceTest : async (req, res) => {
        let connection;
        const { nom, prenom, date_seance} = req.body;

        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL count_utilisateur_seance(?,?,?);', [nom, prenom, date_seance]);
            return res.status(200).json ( { success: result } );
        } catch (error) {
            
            return res.status(400).json( {error: error.message});

        } finally {

            if (connection) connection.end;

        }
    },
};