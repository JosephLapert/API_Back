const router = require('express-promise-router')();                         //utilisation du module pour la création de routes



// Définition en parametre (destructuring) les fonctions qui sont dans le controllers
const { deleteUtilisateur, insertUtilisateur, updateUtilisateur, insertComment, selectSeance, verifPasswordUser, selectSeanceTest, insertDateTest, selectUserId, insertStatutInscription, selectAllUtilisateur, selectAllComment, deleteComment, selectAllDateTest, inscriptionSeanceTest } = require('../controllers/test');


router
    .route('/')
router
    // .route('/test')
    // .get(test)
router
    .route('/users/:id')
    .delete(deleteUtilisateur)
    .get(selectUserId)
router
    .route('/users/')
    .get(selectAllUtilisateur)
    .post(insertUtilisateur)
    .put(updateUtilisateur)
router
    .route('/comment/')
    .post(insertComment)
    .get(selectAllComment)
router
    .route('/comment/:id')
    .delete(deleteComment)
router
    .route('/seance/')
    .get(selectAllDateTest)
    .post(insertDateTest)
router
    .route('/seances/:id')
    .get(selectSeance)
    .post(inscriptionSeanceTest)
router
    .route('/nom/')
    .post(insertStatutInscription)
router
    .route('/psswd/')
    .get(verifPasswordUser)

module.exports = router;    //export pour l'utiliser dans un autre fichier */
