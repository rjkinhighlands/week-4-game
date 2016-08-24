// Postal Service Music Icons:Snail Mail Cancellation Match //

$(document).ready(function(){

// VARIABLES //
	
	console.log("javascript loaded")
	// Music //
	var mrpostman;
	var garciatouch;
	var hendrixwatch;
	var janisheart;
	var lennonhelp;
	var morrisonstrange;
	var finafire;

	// Images //
	var garciaImg = "assets/images/garcia.jpg";

	var hendrixImg = "assets/images/hendrix.jpg";

	var janisImg = "assets/images/janis.jpg";

	var lennonImg = "assets/images/lennon.jpg";

	var morrisonImg = "assets/images/morrison.jpg";

// GAME //
	
	var gameStarted = false;
	var characterSelected;
	var challengerSelected; 
	var currentSong;
	var attackClicked = false
	var turn = 1;

// DISPLAY //

	var charSelect = $("#character-select");
	var charRowOne = $("#character-row-1");
	var charRowTwo = $("#character-row-2");
	var challengers = $("#challengers");
	var action = $("#action");
	var attack = $("#attack-button");
	var playerSide = $("#playerSide");
	var challengerSide = $("#challengerSide");	

// CHARACTER VARIABLES //

	var characters = $('.character');
	var player = $('.player');

// CHARACTERS //

	var jerryGarcia;
	var jimiHendrix;
	var janisJoplin; 
	var johnLennon;
	var jimMorrison;

// SOUND //

	var soundInit = function() {

		garcia = new sound("assets/sounds/garciatouch.mp3")
		hendrix = new sound("assets/sounds/hendrixwatch.mp3")
		janis = new sound("assets/sounds/janisheart.mp3");
		lennon = new sound("assets/sounds/lennonhelp.mp3");
		morrison = new sound("assets/sounds/morrisonstrange.mp3");

	// Song Arrays //
		garciaSongArray = [ garciatouch];
		hendrixSongArray = [ hendrixwatch ];
		janisSongArray = [ janisheart ];
		lennonSongArray = [ lennonhelp ];
		morrisonSongArray = [ morrisonstrange ];
	}

// CLASSES //

	function character(name, image, songArray, hp, ap, cp) {

		this.name = name;
		this.image = image;
		this.songArray = songArray;
		this.hp = hp; // HEALTH //
		this.ap = ap; // ATTACK //
		this.cp = cp; // COUNTER ATTACK //

		this.randomSong = function() {
			var song = Math.floor((Math.random() * this.songArray.length));
			return songArray[song];
		}
	}

// LOGIC //
	var startGame = function() {
	
	// Game Start //
if (gameStarted == false){

			$("#text-area").empty();
			$("#text-area").prepend("<p>Choose your Postage Rock Icon!</p>")
			
			gameStarted = true;

			$('#playerSide').empty();
	// Characters //
		jerryGarcia = new character("Jerry Garcia", garciaImg, garciaSongArray, 100, 10, 10);
		jimiHendrix = new character("Jimi Hendrix", hendrixImg, hendrixSongArray, 100, 10, 10);
		janisJoplin = new character("Janis Joplin", janisImg, janisSongArray, 100, 10, 10);
		johnLennon = new character("John Lennon", lennonImg, lennonSongArray, 100, 10, 10);
		jimMorrison = new character("Jim Morrison", morrisonImg, morrisonSongArray, 100, 10, 10);

	// Clear Old //
			$(".character").find('.name').empty()
			$(".character").find('.hp').empty()

			createCharacterDiv('jerryGarcia', garciaImg)
			createCharacterDiv('jimiHendrix', hendrixImg)
			createCharacterDiv('janisJoplin', janisImg)
			createCharacterDiv('johnLennon', lennonImg)
			createCharacterDiv('jimMorrison', morrisonImg)

	// Reset //
			console.log("starting new game")
			turn = 1;

			characterSelected = false;
			challengerSelected = false; 

	// Append to DIVs //
			$("#jerryGarcia").data("character", jerryGarcia)
			$("#jerryGarcia").find('.hp').append($("#jerryGarcia").data("character") .hp)
			$("#jerryGarcia").find('.name').append($("#jerryGarcia").data("character").name)
				
			$("#jimiHendrix").data("character", jimiHendrix)
			$("#jimiHendrix").find('.hp').append($("#jimiHendrix").data("character").hp)
			$("#jimiHendrix").find('.name').append($("#jimiHendrix").data("character").name)
		
			$("#janisJoplin").data("character", janisJoplin)
			$("#janisJoplin").find('.hp').append($("#janisJoplin").data("character").hp)
			$("#janisJoplin").find('.name').append($("#janisJoplin").data("character").name)
			
			$("#johnLennon").data("character", johnLennon)
			$("#johnLennon").find('.hp').append($("#johnLennon").data("character").hp)
			$("#johnLennon").find('.name').append($("#johnLennon").data("character").name)
		
			$("#jimMorrison").data("character", jimMorrison)
			$("#jimMorrison").find('.hp').append($("#jimMorrison").data("character").hp)
			$("#jimMorrison").find('.name').append($("#jimMorrison").data("character").name)
	}
}
	
	var winCheck = function(player, challenger) {
		// Player //
		if (player.data('character').hp <= 0) {

		// Clear //
			$("#text-area").empty();
			
			$("#text-area").prepend("Your Cancelled!");			

		// Challenger //	
		}else if (challenger.data('character').hp <= 0) {
			challenger.remove()
		// Clear //
			$("#text-area").empty();
			
			$("#text-area").prepend("You've been Cancelled!");

		// Stop Music //
			currentSong.stop();

		// Extra Characters //
			if ($("#challengers").children().length == 0) {

		// End //
			window.setTimeout(function(){$("#text-area").empty(); 
			$("#text-area").prepend("You've been delivered!")}, 1500)

		// Victory Song //
			currentSong = $(".player").data('character').randomSong()
			currentSong.play()		
			gameStarted = false;
			
			}else{
				challengerSelected = false;

		// Another Challenger //
				window.setTimeout(function(){$("#text-area").empty();
				$("#text-area").prepend("Pick Your Postage!")}, 2500)
			}

		};
	};

// EXTRA //

	var textAreaCheck = function(){
		if ($('#text-area').children().length >= 18){
			console.log($('#text-area').children().length)
			$('#text-area').empty();

		}
	}

	var updateHP = function() {

		$('.player').find('.hp').empty()
		$('.chosen-challenger').find('.hp').empty()

		$('.player').find('.hp').append("\xa0 HP: "+ $('.player').data("character").hp)
		$('.chosen-challenger').find('.hp').append("\xa0 HP: "+ $('.chosen-challenger').data("character").hp)

	var createCharacterDiv = function(id, imgsrc) {
		$('#character-select').append("<div class ='character' id = '" + id + "'><h1 class='name'>&nbsp </h1><h1 class ='hp'>&nbsp HP: </h1></div>")
		$('#character-select #'+ id).append("<img class='img responsive' src ='" + imgsrc + "'/>")
		console.log($('#character-select #'+ id))
	}

// Scene Change //

	var chooseCharacterScene = function(){

	}

	var fightScene = function(){
		$('#main-container').empty();
		$('#main-container').append('<div class="row" id="character-row-1">' + 
			'<div class="col-md-3" id="playerSide"></div>' +
			'<!-- Empty space between characters --><div class="col-md-6"' +
			'id="centerSpace"></div><div class="col-md-3" id="challengerSide"></div></div>')

	}

// CHARACTER CLICK //

	$('#new-game').on("click", startGame)		

	// Image Click ??
	$('#characterRow div').on("click", '.character', function(){

		console.log("character clicked")
		if(characterSelected == false){ 
			characterSelected = true;



		// Fade Music //
		if (currentSong ){
			currentSong.fade(1, 0, 1000)
				
		}


	$('.character').on("click", function(){

		console.log("character clicked")
		if(characterSelected == false){ 
			characterSelected = true;

			// DOM //
			$(this).data("status", 'player')

			// Challenger //
			for (var i = 0; i < $('.character').length; i++){
				if ($('.character').data("status") != 'player'){
					$('.character').data("status", 'challenger')
				}
			}

			challengers.append($('.character')) 
			$('#character-select').empty(); 
			$("#playerSide").prepend(this);
			$(this).addClass("player") 

			// Clear //
			$("#text-area").empty();
			$("#text-area").prepend("Choose your opponent!")

			// Character no Challenger //
		}else if (challengerSelected == false && characterSelected == true && $(this).data('status') != 'player'){ 
			challengerSelected = true;

			$(this).addClass("chosen-challenger") 
			$("#challengerSide").append(this); 

			// Challengers Song //
			currentSong = $(".chosen-challenger").data('character').randomSong()
			currentSong.play()

			// Clear //
			$("#text-area").empty();
		}else if (characterSelected == true && $(this).data('status') != 'player' == 'player'){
			console.log("display tooltip")
		}

	});


	attack.on("click", function(){

		// Player & Challenger //
		if(characterSelected == true && challengerSelected == true){

			attackClicked = true;
			
			// Player Attack < //
			var playerAttack = $('.player').data('character').ap * turn;

			// Player and Challenger //
			$('.player').velocity({left: '100px'})
			$('.chosen-challenger').velocity({opacity: .5}, 'fast');

			$('.chosen-challenger img')
				.velocity({borderColor: '#F50C0C'})
				.velocity('reverse');

			$('.chosen-challenger').velocity({opacity: 2}, 'fast');

			$('.player').velocity({left: '0px'}, 'fast');
						
			// Player - from Challenger HP //
			$('.chosen-challenger').data('character').hp -= playerAttack;
			console.log("challenger hp: " + $('.chosen-challenger').data('character').hp);

			// HP Update //
			updateHP()

			// Action Display //
			textAreaCheck()
			$("#text-area").prepend("<p>You attacked " + $(".chosen-challenger").data('character').name +
			" for " + playerAttack + " damage!<hr></p>")

			// Player Win //
			winCheck($('.player'), $('.chosen-challenger'));

			// Challenger Counter //
			window.setTimeout(function(){
				var challengerAttack = $('.chosen-challenger').data('character').cp;

				// Counter Movement //

				$('.chosen-challenger').velocity({left: '-100px'});

				$('.player').velocity({opacity: .7}, 'fast');

				$('.player img')

					.velocity({borderColor: '#F50C0C'})
					.velocity('reverse');

				$('.player').velocity({opacity: 1}, 'fast')

				$('.chosen-challenger').velocity({left: '0px'}, 'fast');

				// subtract counter-attack from player hp
				$('.player').data('character').hp -= challengerAttack;
				console.log("player hp: " + $('.player').data('character').hp);

				// update the HP display
				updateHP()

				// display counter-attack text in text area
				textAreaCheck()
				$("#text-area").prepend('<p>' + $(".chosen-challenger").data('character').name + " attacked you for " +
				" for " + challengerAttack + " Cancelled!<hr></p>")



				// end of turn -- advance turn and check if game should end
				turn += 1;
				winCheck($('.player'), $('.chosen-challenger'));
			}, 800) // delay before counter attack animation is played


				// let the player click attack again after attack routine is completed
				window.setTimeout(function(){
					attackClicked = false;
				}, 1200)

			}

		else {
			return false
		}
	});

// Start Music //
	console.log('starting')
	soundInit()
	//$('#introModal').modal({backdrop: true});
	currentSong = mrpostman;
	currentSong.play();

});