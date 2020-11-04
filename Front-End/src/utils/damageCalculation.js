const rollDice = () => (Math.round((Math.random() * 5) + 1));

const damageCalculation = (source, destination) => {
  // dégats de la source
  const baseDamage = source.attackPoint;
  // calcul des dégats en se basant sur un nombre aléatoire allant de 1 à 6
  // 1. nombre aléatoire entre 1 et 6 (lancer de dé)
  const rolledValue = rollDice();
  // 2. appliquer un ratio par rapport au résultat du dé
  /*
  **    1 => Pas de dégats on se loupe (*0)
  **    2 => Dégats réduits, petit malus (*0.5)
  **    3 => Dégats normaux, aucun malus/bonus (*1)
  **    4 => Dégats normaux, aucun malus/bonus (*1)
  **    5 => Dégats augmentés, petit bonus (*1.5)
  **    6 => Dégats critiques, double dégats (*2)
  */
  let rolledDamage = baseDamage;
  switch (rolledValue) {
    case 1:
      rolledDamage *= 0; // rolledDamage = rolledDamage * 0;
      break;
    case 2:
      rolledDamage *= 0.5;
      break;
    case 5:
      rolledDamage *= 1.5;
      break;
    case 6:
      rolledDamage *= 2;
      break;
    default:
      break;
  }
  // calcul de la réduction de dégats grâce à la défense
  const reducedDamage = rolledDamage - destination.defensePoint;
  // si dégats négatifs, dégats définit à 1
  // du coup les dégats vont de 1 à autant que possible
  const trueDamage = reducedDamage <= 0 ? 0 : reducedDamage;

  // réduction des points de vie de la cible
  destination.healthPoint.current -= trueDamage;
  // eslint-disable-next-line max-len

  // vérification si la cible est en vie
  return [destination.healthPoint.current > 0,
  // ici je passe toutes les informations dont j'ai besoin
  // pour structurer mon msg ds le component Battle
  destination.name,
  source.name,
    baseDamage,
    trueDamage,
  destination.healthPoint.max,
  ];
};

export default damageCalculation;
