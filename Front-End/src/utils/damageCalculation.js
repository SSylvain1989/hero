const damageCalculation = (source, destination) => {
  // calcul des dégats en se basant sur un nombre aléatoire allant de 1 à 6
  const baseDamage = source.attackPoint;
  // calcul de la réduction de dégats grâce à la défense
  const reducedDamage = baseDamage - destination.defensePoint;
  // si dégats négatifs, dégats définit à 1
  const trueDamage = reducedDamage <= 0 ? 1 : reducedDamage;
  // réduction des points de vie de la cible
  destination.healthPoint.current -= trueDamage;

  console.log(source.name, 'attaque', destination.name, 'pour', baseDamage, 'dégats');
  console.log(destination.name, 'subit réellement', trueDamage, 'dégats');
  console.log(destination.name, ':', destination.healthPoint.current, '/', destination.healthPoint.max);

  // vérification si la cible est en vie
  return destination.healthPoint.current > 0;
};

export default damageCalculation;
