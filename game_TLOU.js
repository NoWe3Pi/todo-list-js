//The Last Of Us//

function powerGenerator() {
  return Math.floor(Math.random() * 24) + 1;
}
function healGenerator() {
  return Math.floor(Math.random() * 100) + 1;
}

const jackson = {
  name: "Ellie",
  hp: 100,
  maxHp: 100,
  attack: function (targetObj) {
    const damage = powerGenerator();
    targetObj.hp = Math.max(0, targetObj.hp - damage);
    console.log(
      `${this.name} атакует ${targetObj.name} и наносит ей ${damage} урона, оставляя ${targetObj.hp} здоровья`
    );
  },
  heal: function () {
    const recovery = healGenerator();

    this.hp = Math.min(this.maxHp, this.hp + recovery);
    console.log(
      `${this.name} похилилась на ${recovery}. Стало здоровья: ${this.hp}`
    );
  },
};

const wlf = {
  name: "Abby",
  hp: 100,
  maxHp: 100,

  attack: function (targetObj) {
    const damage = powerGenerator();
    targetObj.hp = Math.max(0, targetObj.hp - damage);
    console.log(
      `${this.name} атакует ${targetObj.name} и наносит ей ${damage} урона, оставляя ${targetObj.hp} здоровья`
    );
  },
  heal: function () {
    const recovery = healGenerator();
    this.hp = Math.min(this.maxHp, this.hp + recovery);
    console.log(
      `${this.name} похилилась на ${recovery}. Стало здоровья: ${this.hp}`
    );
  },
};

console.log("Начало Битвы");

while (jackson.hp > 0 && wlf.hp > 0) {
  if (jackson.hp < 32) {
    jackson.heal();
  } else jackson.attack(wlf);
  if (wlf.hp <= 0) break;

  if (wlf.hp < 32) {
    wlf.heal();
  } else wlf.attack(jackson);
  if (jackson.hp <= 0) break;
}

if (jackson.hp <= 0) {
  console.log(`**${wlf.name} ликует победе над ${jackson.name}**`);
} else {
  console.log(`**${jackson.name} ликует победе над ${wlf.name}**`);
}

console.log("Конец Битвы");
