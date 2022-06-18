const pool = require('../controllers/database');
const { call } = require('../utils/index');                                                                         // pas besoin de mettre le '/index' quand le fichier se nomme index.
const req = require('express/lib/request');

module.exports = {                                                                                                  // export pour l'utiliser dans un autre fichier
    
    selectAllUtilisateur: async ( _ , res) => {

        let connection;
        
        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL select_all_utilisateur();');
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
        console.log(req.body);
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
        try {
            const { nom, prenom, ddn, sexe, adresse, cp, ville, pays, mobile, email, psswd } = req.body;
            const { id } = req.params;

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

    selectAllComment: async ( _ , res) => {

        let connection;
        
        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL select_all_comment();');
            console.log(result);
            return res.status(200).json( { success: result} );

        } catch (error) {
            
            return res.status(400).json( { error: error.message } );

        } finally {

            if (connection) connection.end();
        }
    },

    deleteComment: async (req, res) => {
        let connection; 
        try {
            const { id } = req.params;
            connection = await pool.getConnection();
            const result = await connection.query('CALL delete_comment(?);',[id]);                              // utiliser le même nom pour la requete.
            console.log(result);
            return res.status(200).json( { success: result } );

        }
        catch (error) {

            return res.status(400).json( { error: error.message } );

        } finally {

            if (connection) connection.end();
        }
    },

    insertDateSeance : async (req, res) => {
        let connection;
        const { date_seance, id_coach } = req.body;
        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL insert_date_test(?,?);', [date_seance, id_coach]);
            return res.status(200).json ( { success: result } );

        } catch (error) {
            
            return res.status(400).json( {error: error.message}); 
        } finally {

            if (connection) connection.end()  
        }
    },

    selectAllDateTest: async ( _ , res) => {

        let connection;
        
        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL select_all_date_test();');
            console.log(result);
            return res.status(200).json( { success: result} );

        } catch (error) {
            
            return res.status(400).json( { error: error.message } );

        } finally {

            if (connection) connection.end();
        }
    },
    selectSeance : async (req, res) => {
        let connection;
        const { id } = req.params;
        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL get_seance_test(?);', [id]);
            return res.status(200).json ( { success: result } );

        } catch (error) {

            return res.status(400).json( {error: error.message}); 

        } finally {

            if (connection) connection.end()  

        }
    },
    insertStatutInscription : async (req,res) => {
        let connection;
        const { id, nom } = req.body;
        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL insert_statut_inscription(?,?);', [id, nom]);
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
        const { id_seance } = req.params;

        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL count_utilisateur_seance(?);', [id_seance]);
            return res.status(200).json ( { success: result } );
        } catch (error) {
            
            return res.status(400).json( {error: error.message});

        } finally {

            if (connection) connection.end;

        }
    },
    insertDateTest : async (req, res) => {
        let connection;
        const { date_seance, id_coach } = req.body;

        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL insert_date_test(?,?);', [date_seance, id_coach]);
            return res.status(200).json ( { success: result } );
        } catch (error) {
            return res.status(400).json( {error: error.message});
        } finally { 
            if (connection) connection.end;
        }

    },
    selectUserId : async (req, res) => {
        let connection;
        const { id } = req.params;
        try {

            connection = await pool.getConnection();
            const result = await connection.query('CALL select_user_id(?);', [id]);
            return res.status(200).json ( { success: result } );
        } catch (error) {
            return res.status(400).json( {error: error.message});
        } finally {
            if (connection) connection.end;
        }
    },
    
    inscriptionSeanceTest : async (req, res) => {
        let connection;
        const { id_utilisateur, id_seance_test } = req.body;

     try {
        connection = await pool.getConnection();
        const result = await connection.query('CALL inscription_seance_test(?,?);', [id_utilisateur, id_seance_test]);
        return res.status(200).json ( { success: result } );
    } catch (error) {
        return res.status(400).json( {error: error.message});
    } finally {
        if (connection) connection.end;
        }
    },

    loginMobile: async (req, res) => {

        const { email, psswd} = req.body
        console.log(req.body);
        let connection;

        try {

            connection = await pool.getConnection();
            const result = await connection.query("CALL checkCredentials(?,?);", [email, psswd]);
            const data = result[0][0];
            if (!data) {
                return res.status(401).send();
            }
            return res.status(200).json( {success:data} );

        } catch (error) {

            return res.status(400).json( {error: error.message} )
        } finally {

            if(connection) connection.end();
        }
    },
    
    login: async (req, res) => {
        const { email, psswd } = req.body

        let connection;
        try {
            connection = await pool.getConnection();
            const result = await connection.query("CALL checkCredentials(?,?);", [email, psswd]);
            const data = result[0][0];
            // console.log(data);
            if (!data) {
                return res.status(401).send();
            }
            req.session.uid = data.id_utilisateur;
            req.session.email = data.email;
            return res.status(200).json({ success: data });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        } finally {
            if (connection) connection.end();
        }
    },
    checkLoginStatus: async (req, res) => {
        const { uid, email } = req.session;
        if (uid && email) {
            return res.status(200).json({ success: { uid, email } });
        }
        return res.status(401).send();        
    },

    logout: (req, res) => {
        console.log(req.session);
        if (req.session.uid) {
            req.session.destroy();
            console.log(req.session)
            return res.status(200).send()
        }
        return res.status(401).send()
    },

    insertInscription: async (req, res) => {
        let connection;
        const { idUtilisateur, idSeanceTest, idStatutInscription } = req.body
        try {
            connection = await pool.getConnection();
            const result = await connection.query('CALL insert_utilisateur_seance(?,?,?);', [idUtilisateur, idSeanceTest, idStatutInscription]);
            return res.status(200).json ( { success: result } );
        } catch (error) {
            return res.status(400).json( {error: error.message});                   

        } finally {
            if (connection) connection.end()                                        
        }
    }
};