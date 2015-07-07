 // U3.W7: Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description:
// Overall mission: Defeat your enemy
// Goals: Reduce enemy health, don't let your health drop to 0
// Characters: Main character (you), enemy combatant(s)
// Objects: MC(health, mana), Enemy(health, attack)
// Functions: Attack(calculate damage dealt, subtract from current hp), Heal (restore some health, reduce mana)

// Pseudocode
// Declare 'player' object with properties health, mana, and attack
// Add methods to player to attack and heal
// Declare 'enemy' object with properties health and (?)
// Add method to enemy to attack
// After each attack, check health of player/enemy
// If either is at or below 0, end game.
// Report winner

// Initial Code

// Create player
var player = {
  health: 100,
  mana:   100,
  attack: function() {
    var damage = Math.floor((Math.random() * 30) + 5);
    enemy.health -= damage;
    console.log("You attacked the enemy, remaining health: " + enemy.health);
  },
  heal: function() {
    var restore = Math.floor((Math.random() * 15) + 25);
    this.health += restore;
    this.mana -= 25;
    console.log("You healed yourself, restoring " + restore + " health");
  },
  report: function() {
    console.log("You currently have " + this.health + " health and " + this.mana + " mana.");
  }
};

// Create enemy
var enemy = {
  health: 100,
  attack: function() {
    var damage = Math.floor((Math.random() * 30) + 10);
    player.health -= damage;
    console.log("The enemy attacked you, remaining health: " + player.health);
  }
};


while (player.health > 0 && enemy.health > 0) {
  if (player.health < 30 && player.mana >= 25) {
    player.heal();
    player.report();
  }
  else {
    player.attack();
    if (enemy.health <= 0) {break};
  }
  enemy.attack();
  console.log("");
};
if (player.health <= 0) {
  console.log("You lost!");
}
else if (enemy.health <= 0) {
  console.log("You won!!");
}


// Refactored Code






// Reflection
//
//
//
//
//
//
//
//