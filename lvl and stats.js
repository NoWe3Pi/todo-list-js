function getCharacterStats(levels, minStat, maxStat) {
  let stats = [];
  const min = Math.min(minStat, maxStat);
  const max = Math.max(minStat, maxStat);

  for (let i = 0; i < levels; i++) {
    let randomNumb = Math.floor(Math.random() * (max - min + 1)) + min; //+ 1: «...включая само максимальное число». \ сдвигаем на + min
    stats.push(randomNumb);
  }

  return stats;
}
const fiveLevels = getCharacterStats(5, 10, 50);
console.log(fiveLevels);

let totalPower = 0;

for (let i = 0; i < fiveLevels.length; i++) {
  totalPower += fiveLevels[i];
}
console.log(`Характеристики: ${fiveLevels}`);
console.log(`Общая мощность: ${totalPower}`);
