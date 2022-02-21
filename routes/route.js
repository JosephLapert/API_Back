const router = require('express-promise-router')();                         //utilisation du module pour la création de routes



// Définition en parametre (destructuring) les fonctions qui sont dans le controllers
const { test, deleteUtilisateur, insertUtilisateur, updateUtilisateur, insertComment, selectSeance } = require('../controllers/test');


router
    .route('/')
router
    .route('/test')
    .get(test)
router
    .route('/users/:id')
    .delete(deleteUtilisateur)
router
    .route('/users/')
    .post(insertUtilisateur)
    .put(updateUtilisateur)
router
    .route('/comment/')
    .post(insertComment)
router
    .route('/seances/:id')
    .get(selectSeance)

module.exports = router;    //export pour l'utiliser dans un autre fichier */
