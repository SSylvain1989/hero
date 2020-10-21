// on recupère le router de express
const { Router } = require('express');

// on require tous les controllers
const mainController = require('./controllers/maincontroller');
const storieController = require('./controllers/storiecontroller');
const profileController = require('./controllers/profilcontroller');
const boardController = require('./controllers/boardcontroller');
const contactController = require('./controllers/contactcontroller');
const connexionController = require('./controllers/connexioncontroller');
const gameController = require('./controllers/gamecontroller');

// middleWare qui check si l'utilisateur est connecter pour donner l'accès a certaine page
const checkConnexion = require('./middlewares/checkConnexion');

const router = Router();

router.get('/sayHi', mainController.sayHi); /* test */

// Route accécible sans connexion

router.get('/api/stories', storieController.getAll); /* Récupère toutes les histoires */
router.get('/api/stories/:id(\\d+)', storieController.getById); /* Récupère page d'un jeu spécifique ( (\\d+) n'autorise que des numéros dans l'url )*/

router.post('/api/sign-up', connexionController.signup); /* Créer un compte en base de données */
router.post('/api/log-in', connexionController.login); /* Connexion utilisateur, confirme la connexion */
router.post('/api/login-check', connexionController.loginCheck); /* Vérifie si l'utilisateur est déjà connecté */
router.get('/api/log-out', connexionController.logout); /* Deconnexion utilisateur, confirme la deconnexion */

// Route accécible seulement avec connexion

router.get('/api/profile', checkConnexion, profileController.getOne); /* Récupérer des informations profil */
router.patch('/api/profile/edit', checkConnexion, profileController.edit); /* Modifier mot de passe / Email */
router.delete('/api/profile/delete', checkConnexion, profileController.delete); /* Supprimer son compte (ATTENTION) */

router.get('/api/board', checkConnexion, boardController.getOneBoard); /* Récupérer des informations profil */
router.patch('/api/board/edit', checkConnexion, boardController.edit); /* Modifier avatar / Pseudo */

// router.post('/api/contact', contactController.email); /* Envoyer les infos du mail */

router.get('/api/stories/:id(\\d+)/play', checkConnexion, gameController.getHistory); /* Recevoir toute l'histoire */
// router.post('/api/stories/:id(\\d+)/finish', boardController.editStat); /* Mettre a jour les stats d'un user */


module.exports = router;