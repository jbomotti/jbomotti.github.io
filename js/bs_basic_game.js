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
function Player() {
  this.health = 100;
  this.mana =   100;
  this.attack = function() {
    var damage = Math.floor((Math.random() * 30) + 5);
    enemy.health -= damage;
    if (enemy.health <= 0) {
      document.getElementById("e-health").innerHTML = 0;
      playerWin();
    }
    else {
      document.getElementById("e-health").innerHTML = enemy.health;
      console.log("You attacked the enemy, remaining health: " + enemy.health);
      enemy.turn();
    }
  };
  this.heal = function() {
    if (player.mana >= 25) {
      var restore = Math.floor((Math.random() * 15) + 25);
      this.health += restore;
      this.mana -= 25;
      console.log("You healed yourself, restoring " + restore + " health");
      document.getElementById("p-health").innerHTML = this.health;
      document.getElementById("p-mana").innerHTML = this.mana;
      enemy.turn();
    }
    else {
      console.log("You don't have enough mana!");
      enemy.turn();
    }
  };
  this.report = function() {
    console.log("You currently have " + this.health + " health and " + this.mana + " mana.");
  };
};

// Create enemy
function Enemy() {
  this.health = 100;
  this.mana =   100;
  this.attack = function() {
    var damage = Math.floor((Math.random() * 30) + 10);
    player.health -= damage;
    if (player.health <= 0) {
      document.getElementById("p-health").innerHTML = 0;
      playerLoss();
    }
    else {
      document.getElementById("p-health").innerHTML = player.health;
      console.log("The enemy attacked you, remaining health: " + player.health);
    }
  };
  this.bash = function() {
    var damage = Math.floor((Math.random() * 40) + 15);
    player.health -= damage;
    console.log("The enemy used its special skill!");
    if (player.health <= 0) {
      document.getElementById("p-health").innerHTML = 0;
      playerLoss();
    }
    else {
      document.getElementById("p-health").innerHTML = player.health;
      console.log("The enemy lashed out violently! Remaining health: " + player.health);
    }
  };
  this.turn = function() {
    var action = Math.floor((Math.random() * 100) + 1);
    if (action <= 70) {
      enemy.attack();
    }
    else {
      if (enemy.mana >= 25) {
        enemy.mana -= 25;
        document.getElementById("e-mana").innerHTML = this.mana;
        enemy.bash();
      }
      else {
        enemy.attack();
      };
    };
  };
};

var player = new Player;
var enemy = new Enemy;

function newGame() {
  player = new Player;
  enemy = new Enemy;
  enemySelect();
  displayReset();
};

function enemySelect() {
  var picker = Math.floor((Math.random() * 3) + 1)
  switch (picker) {
    case 1:
      document.getElementById("enemy-pic").src="../imgs/enemy-01.jpg";
      break;
    case 2:
      document.getElementById("enemy-pic").src="../imgs/enemy-02.jpg";
      break;
    case 3:
      document.getElementById("enemy-pic").src="../imgs/enemy-03.jpg";
      break;
  }
}

function playerLoss() {
  console.log("You have been defeated. Game Over!");
  document.getElementById("end-status").innerHTML = "You Lost!";
  document.getElementById("end-x").style.left="14.5%";
  endGame();
};

function playerWin() {
  console.log("You deal a critical blow to the enemy!")
  console.log("You have defeated your enemy. Congratulations!");
  document.getElementById("end-status").innerHTML = "You Won!";
  document.getElementById("end-x").style.left="71%";
  endGame();
};

function endGame() {
  document.getElementById("attack_button").disabled = true;
  document.getElementById("heal_button").disabled = true;
  var d = document.getElementById("reset_button");
  d.className = "btn btn-lg show";
  // document.getElementById("reset_button").style.display="inline-block";
  document.getElementById("end-status").style.display="inline-block";
  document.getElementById("end-x").style.display="inline-block";
};

function displayReset() {
  var d = document.getElementById("reset_button");
  d.className = "btn btn-lg hidden";
  // document.getElementById("reset_button").style.display="none";
  document.getElementById("end-status").style.display="none";
  document.getElementById("end-x").style.display="none";
  document.getElementById("attack_button").disabled = false;
  document.getElementById("heal_button").disabled = false;
  document.getElementById("p-health").innerHTML = player.health;
  document.getElementById("e-health").innerHTML = enemy.health;
  document.getElementById("p-mana").innerHTML = player.mana;
  document.getElementById("e-mana").innerHTML = enemy.mana;
};


// while (player.health > 0 && enemy.health > 0) {
//   if (player.health < 30 && player.mana >= 25) {
//     player.heal();
//     player.report();
//   }
//   else {
//     player.attack();
//     if (enemy.health <= 0) {break};
//   }
//   enemy.attack();
//   console.log("");
// };
// if (player.health <= 0) {
//   console.log("You lost!");
// }
// else if (enemy.health <= 0) {
//   console.log("You won!!");
// }


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
