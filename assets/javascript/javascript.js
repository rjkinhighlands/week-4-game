// Postal Service Music Icons:Snail Mail Cancellation Match //

$(document).ready(function(){

// VARIABLES //
	
	console.log("javascript loaded")
	// Music //
	var garcia_touch;
	var hendrix_watch;
	var janis_heart;
	var lennon_help;
	var morrison_fire;

	// Images //
	var garciaImg = "assets/images/garcia.jpg";

	var hendrixImg = "assets/images/hendrix.jpg";

	var janisImg = "assets/images/janis.jpg";

	var lennonImg = "assets/images/lennon.jpg";

	var morrisonImg = "assets/images/morrison.jpg";

// GAME //
	
	var characterSelected;
	var challengerSelected; 
	var currentSong;

// SOUND //

	// Creating sound //
	function sound(src) {
	    this.sound = document.createElement("audio");
	    this.sound.src = src;
	    this.sound.setAttribute("preload", "auto");
	    this.sound.setAttribute("controls", "none");
	    this.sound.style.display = "none";
	    document.body.appendChild(this.sound);
	    this.play = function(){
	        this.sound.play();
	    }
	    this.stop = function(){
	        this.sound.pause();
	    }
	}

	var soundInit = function() {

		garcia = new sound("assets/sounds/garcia_touch.mp3")
		hendrix = new sound("assets/sounds/hendrix_watch.mp3")
		janis = new sound("assets/sounds/janis_heart.mp3");
		lennon = new sound("assets/sounds/lennon_help.mp3");
		morrison = new sound("assets/sounds/morrison_fire.mp3");

	// Song Arrays //
		garciaSongArray = [ touchofgrey ];
		hendrixSongArray = [ allalongthewatchtower ];
		janisSongArray = [ alittlepiece ];
		lennonSongArray = [ help ];
		morrisonSongArray = [ lightmyfire ];
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
	
	// Reset Numbers //
		turn = 1;

		characterSelected = false;
		challengerSelected = false; // RESET as TRUE //

	// Characters //
		jerryGarcia = new character("Jerry Garcia", garciaImg, garciaSongArray, 100, 10, 10);
		jimiHendrix = new character("Jimi Hendrix", hendrixImg, hendrixSongArray, 100, 10, 10);
		janisJoplin = new character("Janis Joplin", janisImg, janisSongArray, 100, 10, 10);
		johnLennon = new character("John Lennon", lennonImg, lennonSongArray, 100, 10, 10);
		jimMorrison = new character("Jim Morrison", morrisonImg, morrisonSongArray, 100, 10, 10);


	// Append to DIVs //
		charSelect.append("<img id = 'jerryGarcia' class ='character img-responsive' src='" + jerryGarcia.image + "'>")
		$("#jerryGarcia").data("character", jerryGarcia)

		charSelect.append("<img id = 'jimiHendrix' class ='character img-responsive' src='" + jimiHendrix.image + "'>")
		$("#jimiHendrix").data("character", jimiHendrix)

		charSelect.append("<img id = 'janisJoplin' class ='character img-responsive' src='" + janisJoplin.image + "'>")
		$("#janisJoplin").data("character", janisJoplin)

		charSelect.append("<img id = 'johnLennon' class ='character img-responsive' src='" + johnLennon.image + "'>")
		$("#johnLennon").data("character", johnLennon)

		charSelect.append("<img id = 'jimMorrison' class ='character img-responsive' src='" + jimMorrison.image + "'>")
		$("#jimMorrison").data("character", jimMorrison)
	}


	var winCheck = function(player, challenger) {
		// Player //
		if (player.data('character').hp <= 0) {

		// Clear //
			$("#text-area").empty();
			
			$("#text-area").prepend("You died!");
			
		// End //

		// Challenger //	
		}else if (challenger.data('character').hp <= 0) {
			challenger.remove()
		// Clear //
			$("#text-area").empty();
			
			$("#text-area").prepend("Challenger defeated!");

		// Stop Music //
			console.log("current song: " + currentSong)
			currentSong.stop();

		// Extra Characters //
			if ($("#challengers").children().length == 0) {

		// End //
				window.setTimeout(function(){$("#text-area").empty(); 
					$("#text-area").prepend("You win!")}, 1500)

		// Victory Song //
				currentSong = $(".player").data('character').randomSong()
				currentSong.play()		

			}else{
				challengerSelected = false;

		// Another Challenger >2.5 //
				window.setTimeout(function(){$("#text-area").empty();
					$("#text-area").prepend("Choose your opponent!")}, 2500)
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

// SOUNDS INIT //

	soundInit()

// DISPLAY //

	var charSelect = $("#character-select");
	var charRowOne = $("#character-row-1");
	var charRowTwo = $("#character-row-2");
	var challengers = $("#challengers");
	var deck = $("#deck");
	var attack = $("#attack-button");
	var playerSide = $("#playerSide");
	var challengerSide = $("#challengerSide");
	

// CHARACTER VARIABLES //

	var characters = $('.character');
	var player = $('.player');
	var turn = 1;


// CHARACTERS //

	var jerryGarcia;
	var jimiHendrix;
	var janisJoplin; 
	var johnLennon;
	var jimMorrison;


// NEW GAME CLICK //

		// Reset //
		turn = 1;

		characterSelected = false;
		challengerSelected = false; // reset to true once an enemy is defeated 

		jerryGarcia = new character("Jerry Garcia", jerryGarciaImg, jerryGarciaSongArray, 1000, 10, 10);
		jimiHendrix = new character("Jimi Hendrix", jimiHendrixImg, jimiHendrixSongArray, 800, 10, 10);
		janisJoplin = new character("Janis Joplin", janisJoplinImg, janisJoplinSongArray, 900, 10, 10);
		johnLennon = new character("John Lennon", johnLennonImg, johnLennonSongArray, 750, 10, 10);
		jimMorrison = new character("Jim Morrison", jimMorrisonImg, jimMorrisonSongArray, 700, 10, 10);

		// Characters to DIV //
		$("#jerryGarcia").data("character", jerryGarcia)
		$("#jerryGarcia").find('.hp').append($("#jerryGarcia").data("character").hp)
		$("#jerryGarcia").find('.name').append($("#jerryGarcia").data("character").name)
		charSelect.append($('#jerryGarcia'))
		
		$("#jimiHendrix").data("character", jimMorrison)
		$("#jimiHendrix").find('.hp').append($("#jimiHendrix").data("character").hp)
		$("#jimiHendrix").find('.name').append($("#jimiHendrix").data("character").name)
		charSelect.append($('#jimiHendrix'))

		$("#janisJoplin").data("character", janisJoplin)
		$("#janisJoplin").find('.hp').append($("#janisJoplin").data("character").hp)
		$("#janisJoplin").find('.name').append($("#janisJoplin").data("character").name)
		charSelect.append($('#janisJoplin'))
	
		$("#johnLennon").data("character", johnLennon)
		$("#johnLennon").find('.hp').append($("#johnLennon").data("character").hp)
		$("#johnLennon").find('.name').append($("#johnLennon").data("character").name)
		charSelect.append($('#johnLennon'))

		$("#jimMorrison").data("character", jimMorrison)
		$("#jimMorrison").find('.hp').append($("#jimMorrison").data("character").hp)
		$("#jimMorrison").find('.name').append($("#jimMorrison").data("character").name)
		charSelect.append($('#jimMorrison'))


// CHARACTER CLICK //

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

		// Player & Challenger Choosen //
		if(characterSelected == true && challengerSelected == true){
			console.log("attack!")

			// Player On //
			console.log($('.player').data('character').ap)

			// Player Up // 
			var playerAttack = $('.player').data('character').ap * turn;

			// Minus Player //
			$('.chosen-challenger').data('character').hp -= playerAttack;
			console.log("challenger hp: " + $('.chosen-challenger').data('character').hp);

			// Attack Slogan //
			textAreaCheck()
			$("#text-area").prepend("<p>You attacked " + $(".chosen-challenger").data('character').name +
			" for " + playerAttack + " damage!<hr></p>")

			// Win < Attack //
			winCheck($('.player'), $('.chosen-challenger'));

			// Challenger > Attack //
			var challengerAttack = $('.chosen-challenger').data('character').cp;

			// Minus Player //
			$('.player').data('character').hp -= challengerAttack;
			console.log("player hp: " + $('.player').data('character').hp);

			// Counter Attack Slogan //
			textAreaCheck()
			$("#text-area").prepend('<p>' + $(".chosen-challenger").data('character').name + " attacked you for " +
			" for " + challengerAttack + " damage!<hr></p>")

// END this GAME //

			turn += 1;
			winCheck($('.player'), $('.chosen-challenger'));

			}

		else {
			return false
		}
	});

	




});