const { Router } = require('express');

const mainController = require('./controllers/maincontroller');
const storieController = require('./controllers/storiecontroller');
const profileController = require('./controllers/profilcontroller');
const boardController = require('./controllers/boardcontroller');
const contactController = require('./controllers/contactcontroller');
const connexionController = require('./controllers/connexioncontroller');
const gameController = require('./controllers/gamecontroller');

const router = Router();

router.get('/sayHi', mainController.sayHi); /* test */

router.get('/api/stories', storieController.getAll); /* Récupère toutes les histoires */
router.get('/api/stories/:id', storieController.getById); /* Récupère page d'un jeu spécifique */

router.post('/api/sign-up', connexionController.signup); /* Créer un compte en base de données */
router.post('/api/log-in', connexionController.login); /* Connexion utilisateur, redirige l'utilisateur et confirme la connexion */
// router.get('/api/login-check', connexionController.loginCheck); /* Vérifie si l'utilisateur est déjà connecté */

// router.get('/api/profile', profileController.getOne); /* Récupérer des informations profil */
// router.patch('/api/profile/edit', profileController.edit); /* Modifier mot de passe / Email */
// router.delete('/api/profile/delete', profileController.delete); /* Supprimer son compte (ATTENTION) */

// router.get('/api/board', boardController.getOneBoard); /* Récupérer des informations profil */
// router.patch('/api/board/edit', boardController.edit); /* Modifier avatar / Pseudo */

// router.post('/api/contact', contactController.email); /* Envoyer les infos du mail */

// router.get('/api/stories/:game-name/play', gameController.getHistory); /* Recevoir toute l'histoire */
// router.post('/api/stories/:game-name/finish', boardController.editStat); /* Mettre a jour les stats d'un user */


module.exports = router;