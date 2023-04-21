let alliance = {
  races: ['Human', 'Dwarf', 'Night Elf', 'Gnome', 'Draenei'],
  classes: ['Warrior', 'Paladin', 'Warlock', 'Mage', 'Druid'],
  abilities: ['Fire Ball', 'Heroic Strike', 'Whirlwind', 'Ambush', 'Frost Bolt'],
  photos: ['./img/warrior.png', './img/paladin.png', './img/warlock.png', './img/druid.png', './img/mage.png']
};

function randomNumber(x, y) {
  return Math.floor(Math.random() * (y - x + 1)) + x;
}

function randomAbility() {
  return Math.floor(Math.random() * 5);
}

function characterHealth() {
  return Math.floor(Math.random() * (200 - 50 + 1)) + 50;
}

let randomCharacter1 = {
  randomRace: alliance.races[randomNumber(0, alliance.races.length - 1)],
  randomClass: alliance.classes[randomNumber(0, alliance.classes.length - 1)],
  randomSkill: alliance.abilities[randomAbility(0, alliance.abilities - 1)],
  characterHP: characterHealth()
}

let randomCharacter2 = {
  randomRace: alliance.races[randomNumber(0, alliance.races.length - 1)],
  randomClass: alliance.classes[randomNumber(0, alliance.classes.length - 1)],
  randomSkill: alliance.abilities[randomAbility(0, alliance.abilities - 1)],
  characterHP: characterHealth()
}


document.getElementById('race1').textContent = `${randomCharacter1.randomRace} ${randomCharacter1.randomClass} `

document.getElementById('health1').textContent = `Character Health: ${randomCharacter1.characterHP} `


/* document.getElementById('ability1').textContent = `Skill used: ${randomCharacter1.randomSkill} ` */


document.getElementById('race2').textContent = ` 
 ${randomCharacter2.randomRace} ${randomCharacter2.randomClass}  `

document.getElementById('health2').textContent = `Character Health: ${randomCharacter2.characterHP} `

/* document.getElementById('ability2').textContent = ` 
 Skill used: ${randomCharacter2.randomSkill}  ` */

function fight() {
  let attacker, defender;

  if (Math.random() < 0.5) {
    attacker = randomCharacter1;
    defender = randomCharacter2;
  } else {
    attacker = randomCharacter2;
    defender = randomCharacter1;
  }
  let firstAttacker = attacker;

  while (attacker.characterHP > 0 && defender.characterHP > 0) {
    let damage = randomNumber(20, 40);

    if (attacker === firstAttacker) {
      document.write(`<p><b class='green'>${attacker.randomRace} ${attacker.randomClass}</b> uses ${attacker.randomSkill} and deals <span class='red-dmg'>${damage}</span> damage to <b class='blue'>${defender.randomRace} ${defender.randomClass}</b>. <b class='blue'> ${defender.randomRace} ${defender.randomClass}</b> health is now <span class='blue'>${defender.characterHP}</span></p>`);
      defender.characterHP -= damage;
      if (defender.characterHP <= 0) {
        defender.characterHP = 0;
        break;
      }
      attacker = defender;
      defender = firstAttacker;
    } else {
      document.write(`<p><b class='blue'>${attacker.randomRace} ${attacker.randomClass}</b> uses ${attacker.randomSkill} and deals <span class='red-dmg'>${damage}</span> damage to <b class='green'>${defender.randomRace} ${defender.randomClass}</b>. <b class='green-health'> ${defender.randomRace} ${defender.randomClass}</b> health is now <span class='green-health'>${defender.characterHP}</span></p>`);
      defender.characterHP -= damage;
      if (defender.characterHP <= 0) {
        defender.characterHP = 0;
        break;
      }
      defender = attacker;
      attacker = firstAttacker;
    }

  }

  document.write(`<p><b class='green-health'>${defender.randomRace} ${defender.randomClass}</b> has been defeated by <b class='blue'>${attacker.randomRace} ${attacker.randomClass}!</b></p>`);

}

fight();


if (randomCharacter1.randomClass === 'Warrior') {
  let imageId = document.getElementById('container2');
  let imageElement = document.createElement('img');
  imageElement.src = alliance.photos[0];
  imageElement.classList.add('character-image');
  imageId.appendChild(imageElement)

}

if (randomCharacter1.randomClass === 'Paladin') {
  let imageId = document.getElementById('container2');
  let imageElement = document.createElement('img');
  imageElement.src = alliance.photos[1];
  imageElement.classList.add('character-image');
  imageId.appendChild(imageElement)
}

if (randomCharacter1.randomClass === 'Warlock') {
  let imageId = document.getElementById('container2');
  let imageElement = document.createElement('img');
  imageElement.src = alliance.photos[2];
  imageElement.classList.add('character-image');
  imageId.appendChild(imageElement)
}

if (randomCharacter1.randomClass === 'Druid') {
  let imageId = document.getElementById('container2');
  let imageElement = document.createElement('img');
  imageElement.src = alliance.photos[3];
  imageElement.classList.add('character-image');
  imageId.appendChild(imageElement)
}

if (randomCharacter1.randomClass === 'Mage') {
  let imageId = document.getElementById('container2');
  let imageElement = document.createElement('img');
  imageElement.src = alliance.photos[4];
  imageElement.classList.add('character-image');
  imageId.appendChild(imageElement)
}

if (randomCharacter2.randomClass === 'Warrior') {
  let imageId = document.getElementById('container2');
  let imageElement = document.createElement('img');
  imageElement.src = alliance.photos[0];
  imageElement.classList.add('character-image');
  imageId.appendChild(imageElement)

}

if (randomCharacter2.randomClass === 'Paladin') {
  let imageId = document.getElementById('container2');
  let imageElement = document.createElement('img');
  imageElement.src = alliance.photos[1];
  imageElement.classList.add('character-image');
  imageId.appendChild(imageElement)
}

if (randomCharacter2.randomClass === 'Warlock') {
  let imageId = document.getElementById('container2');
  let imageElement = document.createElement('img');
  imageElement.src = alliance.photos[2];
  imageElement.classList.add('character-image-warlock');
  imageId.appendChild(imageElement)
}

if (randomCharacter2.randomClass === 'Druid') {
  let imageId = document.getElementById('container2');
  let imageElement = document.createElement('img');
  imageElement.src = alliance.photos[3];
  imageElement.classList.add('character-image');
  imageId.appendChild(imageElement)
}

if (randomCharacter2.randomClass === 'Mage') {
  let imageId = document.getElementById('container2');
  let imageElement = document.createElement('img');
  imageElement.src = alliance.photos[4];
  imageElement.classList.add('character-image');
  imageId.appendChild(imageElement)
}


