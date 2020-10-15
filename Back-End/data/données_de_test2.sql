BEGIN;

UPDATE nav.user SET "detail_id" = 1, "updated_at" = now() WHERE "id" = 1;
UPDATE nav.user SET "detail_id" = 2, "updated_at" = now() WHERE "id" = 2;

UPDATE game.scene SET "type_id" = 1, "opponent_id" = 4, "item_id" = 1 WHERE "id" = 1;

INSERT INTO game.party ( 
    "user_id",
    "playable_id",
    "history_id"
    )
    VALUES (1, 1, 1);

INSERT INTO game.history_has_scene ( 
    "history_id",
    "scene_id",
    "previous_scene_id",
    "next_scene_id"
    )
    VALUES (1, 1, null, 2);

INSERT INTO game.history_has_categories ( 
    "history_id",
    "categories_id"
    )
    VALUES (1, 1);

INSERT INTO game.scene_has_text ( 
    "scene_id",
    "text_in_game_id"
    )
    VALUES (1, 1);

INSERT INTO game.scene_has_item ( 
    "scene_id",
    "item_id"
    )
    VALUES (1, 1);

COMMIT;