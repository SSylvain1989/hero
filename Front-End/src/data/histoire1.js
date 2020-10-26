const history = {
  history: {
    history_id: 1,
    history_name: 'Prison',
    history_description: 'Evadez-vous',
    history_difficulty: 'easy',
    scene_list: [
      {
        details_scene: {
          scene_id: 1,
          scene_name: 'alcatraz',
          scene_description: 'scene de depart',
          scene_type: 'Début',
          scene_text: 'Vous vous réveillez en prison mais vous ne savez comment vous êtes arrivé là... La porte ne semble pas verrouillée pour autant et un vieillard gît dans un coin sombre.',
        },
        previous_scene_id: null,
        next_scene_id: 2,
        next_scene_name: 'Démarrer',
      },
      {
        details_scene: {
          scene_id: 2,
          scene_name: 'door_and_opponent',
          scene_description: 'scene clickable: cellule',
          scene_type: 'Cliquable',
          clickable_element: {
            clickable_element_name: 'porte',
            clickable_element_shape: 'rect',
            clickable_element_coords: '0,0,500,500',
          },
          clickable_element2: {
            clickable_element_name: 'vieillard',
            clickable_element_shape: 'rect',
            clickable_element_coords: '500,0,1000,500',
          },
        },
        previous_scene_id: 1,
        next_scene: {
          next_scene_id: 3,
          next_scene_name: 'Vieillard',
        },
        next_scene2: {
          next_scene_id2: 6,
          next_scene_name2: 'Porte',
        },
      },
      {
        details_scene: {
          scene_id: 3,
          scene_name: 'click_on_opponent',
          scene_description: 'scene de choix: discution combat',
          scene_type: 'Choix',
          scene_text: "Hum... Cela fait si longtemps... Je n'ai vu que des rats depuis des années... Rien d'autre de vivant... Tuez-moi pour mettre fin à cette malédiction",
        },
        previous_scene_id: 2,
        next_scene: {
          next_scene_id: 4,
          next_scene_name: 'Combattre',
        },
        next_scene2: {
          next_scene_id2: 5,
          next_scene_name2: 'Discuter',
        },
      },
      {
        details_scene: {
          scene_id: 4,
          scene_name: 'combat',
          scene_description: 'scene de combat',
          scene_type: 'Combat',
          opponent_name: 'Vieillard',
          opponent_hp: 20,
          opponent_atk: 3,
          opponent_def: 2,
        },
        previous_scene_id: 3,
        next_scene: {
          next_scene_id: 2,
          next_scene_name: 'Suite',
        },
        next_scene2: {
          next_scene_id2: 9,
          next_scene_name2: 'GameOver',
        },
      },
      {
        details_scene: {
          scene_id: 5,
          scene_name: 'speak',
          scene_description: 'scene de discution',
          scene_type: 'Choix',
          scene_text: "Tuez-moi ou vous serez maudit à jamais en partant d'ici !",
        },
        previous_scene_id: 3,
        next_scene: {
          next_scene_id: 2,
          next_scene_name: 'Suite',
        },
      },
      {
        details_scene: {
          scene_id: 6,
          scene_name: 'click_on_door',
          scene_description: 'scene de choix: partir rester',
          scene_type: 'Choix',
          scene_text: "Vous voyez au loin une une sortie vers l'extérieur. Quelle aubaine ! Vous pourriez vous enfuir sans aucun soucis, Philosophie.",
        },
        previous_scene_id: 2,
        next_scene: {
          next_scene_id: 7,
          next_scene_name: 'Sortir',
        },
        next_scene2: {
          next_scene_id2: 2,
          next_scene_name2: "Revenir a l'entrée",
        },
      },
      {
        details_scene: {
          scene_id: 7,
          scene_name: 'raft',
          scene_description: 'scene clickable: bord de mer',
          scene_type: 'Cliquable',
          clickable_element_name: 'barque',
          clickable_element_shape: 'rect',
          clickable_element_coords: '0,0,1000,1000',
        },
        previous_scene_id: 6,
        next_scene: {
          next_scene_id: 8,
          next_scene_name: 'Barque',
        },
      },
      {
        details_scene: {
          scene_id: 8,
          scene_name: 'click_on_raft',
          scene_description: 'scene de choix: partir',
          scene_type: 'Choix',
          scene_text: "Vous montez sur la barque mais la mer l'emporte immédiatement ! Vous ne savez pas comment revenir en arrière et ça ne vous dérange pas plus que ça... LIBRE !",
        },
        previous_scene_id: 7,
        next_scene: {
          next_scene_id: 10,
          next_scene_name: 'Si le vieillard est en vie',
        },
        next_scene2: {
          next_scene_id2: 11,
          next_scene_name2: 'Si le veillard est mort',
        },
        finish_text: 'Suite',
      },
      {
        details_scene: {
          scene_id: 9,
          scene_name: 'game_over',
          scene_description: 'scene de fin: gameover',
          scene_type: 'Fin',
        },
        previous_scene_id: 4,
        finish_text: 'Game Over, Vous etes mort !',
      },
      {
        details_scene: {
          scene_id: 10,
          scene_name: 'game_neutral',
          scene_description: 'scene de fin: sortir maudit sans avoir tuer le Vieillard',
          scene_type: 'Fin',
        },
        previous_scene_id: 8,
        finish_text: 'Bravo, vous avez terminé le jeu mais vous etes maudit !',
      },
      {
        details_scene: {
          scene_id: 11,
          scene_name: 'game_win',
          scene_description: 'scene de fin: sortir en ayant tuer le Vieillard',
          scene_type: 'Fin',
        },
        previous_scene_id: 8,
        finish_text: 'Bravo, vous avez terminé le jeu en ayant levé la malédiction !',
      },
    ],
  },
};

export default history;
