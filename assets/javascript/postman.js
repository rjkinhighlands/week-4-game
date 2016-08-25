$(document).ready(function(){

// GAME START //

var theme = new Audio("assets/sounds/mrpostman.mp3");
theme.volume = 0.3; 

// VARIABLES //

var character;
var characterChosen;
var enemyChosen = false;
var opponent;
var defeated = false; 
var backgrounds = ["assets/images/mrpostman.jpg", "assets/images/burner.jpg"];

// CHARACTERS //

var characters = [
	garcia = {
		name: "garcia",
		image: "<img src = 'assets/images/garcia.jpg' id = 'garcia'>",
		baseAttack: 50,
		attack: 50,
		health: 500,
		choseSound: new Audio('assets/sounds/garciatouch.mp3')
	},

	hendrix = {
		name: "hendrix",
		image: "<img src = 'assets/images/hendrix.jpg' id = 'hendrix'>",
		baseAttack: 40,
		attack: 40,
		health: 400,
		choseSound: new Audio('assets/sounds/hendrixwatch.mp3')
	},

	joplin = {
		name: "joplin",
		image: "<img src = 'assets/images/janis.jpeg' id = 'joplin'>",
		baseAttack: 30,
		attack: 30,
		health: 300,
		choseSound: new Audio('assets/sounds/janisheart.mp3')
	},

	lennon = {
		name: "lennon",
		image: "<img src = 'assets/images/lennon.jpg' id = 'lennon'>",
		baseAttack: 20, 
		attack: 20,
		health: 200,
		choseSound: new Audio('assets/sounds/lennonhelp.mp3')

	},

	morrison = {
		name: "morrison",
		image: "<img src = 'assets/images/morrison.jpg' id = 'morrison'>",
		baseAttack: 10, 
		attack: 10,
		health: 100,
		choseSound: new Audio('assets/sounds/morrisonstrange.mp3')
	}
];	

// START //
	$('#top').append("<img src = 'assets/images/burner.jpg' class = 'img-responsive'>");
	$('#bottom').append("<button type='button' class='btn btn-outline-warning' id='start'>Start Delivery</button>");
	fadeAllIn();

	// Start Delivery //
	$('#start').on("click", function(){
		playGame()
		var theme = new Audio("assets/sounds/mrpostman.mp3");
		theme.play();
	});	

// Function //
	
	// Fade Out Elements //
	function fadeAllOut(){
		$('#top').fadeOut("slow");
		$('#top').empty();
		$('#middle').fadeOut("slow");
		$('#middle').empty();
		$('#bottom').fadeOut("slow");
		$('#bottom').empty();
	};

	// Fade In Elements //
	function fadeAllIn(){
		$('#top').fadeIn("slow");
		$('#middle').fadeIn("slow");
		$('#bottom').fadeIn("slow");
	};

// GAME //
	function playGame(){
		fadeAllOut();
		$('#top').append("<img src = 'assets/images/mrpostman.jpg' class = 'img-responsive'>");
		$('#middle').append("<h1>Choose your postage</h1>");
		$('#bottom').append(garcia.image, hendrix.image, janis.image, lennon.image, morrison.image);
		fadeAllIn();
			$('#bottom').on("click", "img[id = garcia]", function(){
				chooseChar(garcia);
			});
			$('#top').on("click", "img[id = garcia]", function(){
				chooseOpponent(garcia);
			});
			$('#bottom').on("click", "img[id = hendrix]", function(){
				chooseChar(hendrix);
			});
			$('#top').on("click", "img[id = hendrix]", function(){
				chooseOpponent(hendrix);
			})
			$('#bottom').on("click", "img[id = janis]", function(){
				chooseChar(janis);
			});
			$('#top').on("click", "img[id = janis]", function(){
				chooseOpponent(janis);
			})
			$('#bottom').on("click", "img[id = lennon]", function(){
				chooseChar(lennon);
			});
			$('#top').on("click", "img[id = lennon]", function(){
				chooseOpponent(lennon);
			})
			$('#bottom').on("click", "img[id = morrison]", function(){
				chooseChar(morrison);
			});
			$('#top').on("click", "img[id = morrison]", function(){
				chooseOpponent(morrison);
			})
			
			$('#attackButton').on("click", function(){
				attack(character, opponent)
			});	
		}
// CHOOSE POSTAGE //
	function chooseChar(char){
		characterChosen = true; 
		var sound = char.choseSound;
		character = char;
		console.log(character);
		sound.play();
		fadeAllOut();
		battle(char);
		//var randombg = backgrounds[Math.floor(Math.random()*3)]
	}
// CHOOSE OPPONENT //
	function chooseOpponent(char){
		if(enemyChosen == false){
			opponent = char; 
			enemyChosen = true; 
			$('#defenderZone').empty(); 
			$('#attackButton').empty();
			$('#defenderZone').append("<div id = 'opponent'>"+char.image+"<br><h4>"+char.name+"<br>Cancelling Power: "+char.attack+"<br>Health: "+char.health+"</h4></div>");
			$('#attackButton').append("<button class = 'btn btn-danger attackButton'>Cancel!</button>");
		}
	}
//// Battleground //
	function battle(char){
		$('#top').append("<div id = 'enemies'></div>");
		$('#middle').append("<div class = 'action'><div id = 'action'><p>Ready for Snail Mail? Choose any postage to begin attacking.</p></div></div>");
		$("#attackerZone").append("<div id = 'player'>"+char.image+"<br><h4>"+char.name+"<br>Cancelling Power: "+char.attack+"<br>Health: "+char.health+"</h4></div>");
		
			var enemy = "enemy"+i;  
			if(characters[i].name != char.name){
				$('#enemies').append("<div id ="+enemy+">"+characters[i].image+"<br><h4>"+characters[i].name+"<br>Cancelling Power: "+characters[i].attack+"<br>Health: "+characters[i].health+"</h4></div>");
			}
		}
	fadeAllIn();

// ATTACK //
	function attack(attacker, defender){
		if(defender.health > 0 && attacker.health > 0){
		// DOMS Players //
			$('#action').prepend("<p id = 'attacker'>"+attacker.name+" attacks "+defender.name+" for "+attacker.attack+" Cancel!</p>");
				defender.health -=attacker.attack; 
			$('#action').prepend("<p id = 'counter'>"+defender.name+" counters "+attacker.name+" for "+defender.attack+" Cancel!</p>");
				attacker.health -= defender.attack; 
				attacker.attack += attacker.baseAttack;
			$('#action').prepend("<p id = 'attackGain'>"+attacker.name+" He's going postal "+attacker.baseAttack+" postal power "+attacker.attack+" Cancel!</p>");
		
		// DOMS Health // 
			$("#attackerZone").html("<div id = 'player'>"+attacker.image+"<br><h4>"+attacker.name+"<br>Cancel Power: "+attacker.attack+"<br>Health: "+attacker.health+"</h4></div>");
			$('#defenderZone').html("<div id = 'opponent'>"+defender.image+"<br><h4>"+defender.name+"<br>Cancel Power: "+defender.attack+"<br>Health: "+defender.health+"</h4></div>");

		}
		else if (defender.health <= 0 && attacker.health > 0){
			$('#attackButton').empty();
			$('#attackButton').append("<button class = 'btn btn-default btn-lg btn-danger'>Cancel Stamp!</button>");
			$('#action').prepend("<p id = 'defenderDead'>"+attacker.name+" You Have Cancelled "+defender.name+"! Choose new postage, "+attacker.name+".");
			enemyChosen = false; 
		}
		
		else if (attacker.health <= 0 && defender.health > 0){
			$('#attackButton').html("<button class = 'btn btn-default btn-lg btn-primary'>New Postage!</button>");
			$('#action').prepend("<p id = 'attackerDead'>"+defender.name+" You have Been Cancelled "+attacker.name+"! Please click the button to start a new game.");
			
		}
	}

});