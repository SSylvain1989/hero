-- Deploy heros:histoire-2 to pg

BEGIN;

INSERT INTO game.character (
    "name", 
    "playable",
    "hp",
    "atk",
    "def",
    "image"
    )
    VALUES  ('Anges déchus', 'true', '30', '15', '7', 'https://i.ibb.co/R2GFpYs/fallen-angels.gif'),
            ('Faucheur', 'true', '20', '20', '10', 'https://i.ibb.co/Ms8SSMQ/reaper-man.gif'),
            ('Golem', 'true', '40', '7', '15', 'https://i.ibb.co/qBG1rFg/golem.gif'),
            ('Goblin', 'false', '20', '5', '4', 'https://i.ibb.co/BZsGGtT/output-n-Ccx-S9.gif'),
            ('Orc', 'false', '30', '8', '10', 'https://i.ibb.co/zFYwy2J/orc.gif'),
            ('Ogre', 'false', '40', '12', '6', 'https://i.ibb.co/KLtDG9t/Webp-net-gifmaker.gif');

INSERT INTO game.history ( 
    "name",
    "description",
    "difficulty",
    "img"
    )
    VALUES  ('L''arène', 'Oyez oyez combattants de tous horizons ! Le moment est venu de vous battre en du-du-duel !! L''arène de Bonduel est la plus disputée sur ce website. Nombreux sont les héros prets à en découdre, à vous faire mordre la poussière, seriez vous prets à prendre la place de notre champion actuel et devenir notre nouvelle mascotte ?', 'Moyen', 'https://i.ibb.co/25xVbhh/arenes.jpg'),
            ('Chateau', 'Vous êtes le seul habitant d''un château à ne pas avoir été transformé par un bouffon maléfique qui s''est emparé du trésor du château, la couronne du roi. Parviendrez-vous à déjouer les vols de ce mauvais bougre ?', 'Moyen', 'https://i.ibb.co/xhnDvZ0/chateau.jpg'),
            ('Le labyrinthe', 'Trouvez la sortie le plus vite possible !', 'Difficile', 'https://i.ibb.co/bKW2JFn/labyrinth.jpg');

INSERT INTO game.scene ( 
    "name",
    "description"
    )
    VALUES ('vestiaire de l''arene', 'scene de depart'),
           ('combat de l''arene 1', 'scene de combat'),
           ('combat de l''arene 2', 'scene de combat 2'),
           ('combat de l''arene 3', 'scene de combat 3'),
           ('game over', 'scene de fin: gameover'),
           ('game win', 'scene de fin: sortir en ayant tuer tous les adversaires');

INSERT INTO game.categories ( 
    "name"
    )
    VALUES  ('fight');

INSERT INTO game.text_in_game ( 
    "description"
    )
    VALUES  ('Après avoir finalisé votre inscription au tournoi de l’arène, vous attendez impatiemment votre tour pour montrer votre talent au monde entier. Aucune inquiétude ! Votre combat est sur le point de commencer, seriez-vous prêts à en découdre ?');

COMMIT;

BEGIN;

UPDATE game.scene SET "type_id" = 1, "opponent_id" = null WHERE "id" = 12;
UPDATE game.scene SET "type_id" = 4, "opponent_id" = 7 WHERE "id" = 13;
UPDATE game.scene SET "type_id" = 4, "opponent_id" = 8 WHERE "id" = 14;
UPDATE game.scene SET "type_id" = 4, "opponent_id" = 9 WHERE "id" = 15;
UPDATE game.scene SET "type_id" = 5, "opponent_id" = null WHERE "id" = 16;
UPDATE game.scene SET "type_id" = 5, "opponent_id" = null WHERE "id" = 17;

INSERT INTO game.history_has_scene ( 
    "history_id",
    "scene_id",
    "previous_scene_id",
    "next_scene_id"
    )
    VALUES  (2, 12, null, 13),
            (2, 13, 12, 14),
            (2, 14, 13, 15),
            (2, 15, 14, 17),
            (2, 16, 15, null),
            (2, 17, 15, null);

           

INSERT INTO game.history_has_categories ( 
    "history_id",
    "categories_id"
    )
    VALUES  (2, 3);

INSERT INTO game.scene_has_text ( 
    "scene_id",
    "text_in_game_id"
    )
    VALUES  (12, 6);

COMMIT;
