BEGIN;

INSERT INTO nav.user (
    "userName", 
    "email", 
    "password"
    ) 
    VALUES  ('Philippe', 'philippe@oclock.io', 'test'),
            ('Chuck', 'chuck@oclock.io', 'test');

INSERT INTO nav.game_details (
    "avatar", 
    "displayName", 
    "gameWin",
    "gameOver",
    "gamePlay"
    ) 
    VALUES  ('Warrior', 'warrior_test', '0', '3', '3'),
            ('Ranger', 'ranger_test', '1', '2', '3');

INSERT INTO game.character (
    "name", 
    "playable",
    "hp",
    "atk",
    "def"
    )
    VALUES  ('Warrior', 'true', '20', '5', '10'),
            ('Ranger', 'true', '15', '10', '5'),
            ('Mage', 'true', '10', '10', '15'),
            ('Lich', 'false', '30', '5', '7'),
            ('Goblin', 'false', '20', '3', '2');

INSERT INTO game.history ( 
    "name",
    "description",
    "difficulty"
    )
    VALUES ('Matrio et Luigri', 'Aide Matrio et Luigri a retrouver la princesse Pear', 'easy');

INSERT INTO game.type ( 
    "name"
    )
    VALUES  ('Début'),
            ('Cliquable'),
            ('Discution/Combat'),
            ('Combat'),
            ('Discution'),
            ('Déplacement'),
            ('Fin');

INSERT INTO game.scene ( 
    "name",
    "description",
    "type_id",
    "opponent_id",
    "item_id"
    )
    VALUES  ('test', 'scene de test', '0' '2', '4'),
            ('test2', 'scene de test2', '1' '3', '5');

INSERT INTO game.item (
    "name", 
    "hp",
    "atk",
    "def"
    )
    VALUES  ('weapon', '0', '5', '0'),
            ('Armor', '0', '0', '5');

INSERT INTO game.categories ( 
    "name"
    )
    VALUES ('fantastic');

INSERT INTO game.text_in_game ( 
    "description"
    )
    VALUES  ('Vous vous réveillez en prison mais vous ne savez comment vous êtes arrivé là...
              La porte ne semble pas verrouillée pour autant et un vieillard gît dans un coin sombre.')
            ('Hum...
              Cela fait si longtemps...
              Je n\'ai vu que des rats depuis des années...
              Rien d\'autre de vivant...
              Tuez moi pour mettre fin à cette malédiction')
            (`Tuez-moi ou vous serez maudit à jamais en partant d\'ici !`)
            (`Vous voyez au loin une une sortie vers l'extérieur. Quelle aubaine ! Vous pourriez vous enfuir sans aucun soucis, Philosophie.`)
            (`Vous montez sur la barque mais la mer l'emporte immédiatement !
            Vous ne savez pas comment revenir en arrière et ça ne vous dérange pas plus que ça...
            LIBRE !`);

INSERT INTO game.party ( 
    "user_id",
    "playable_id",
    "history_id"
    )
    VALUES ('0', '0', '0');

INSERT INTO game.history_has_scene ( 
    "history_id",
    "scene_id",
    "previous_scene_id",
    "next_scene_id"
    )
    VALUES ('0', '0', null, '1');

INSERT INTO game.history_has_categories ( 
    "history_id",
    "categories_id"
    )
    VALUES ('0', '0');

INSERT INTO game.scene_has_text ( 
    "scene_id",
    "text_in_game_id"
    )
    VALUES ('0', '0');

INSERT INTO game.scene_has_item ( 
    "scene_id",
    "item_id"
    )
    VALUES ('0', '0');

COMMIT;