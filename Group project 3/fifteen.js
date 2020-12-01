// Group project 3 javascript
'use strict';

var game = null; // game board
var puzzle;

const ROWS = 4;
const COLS = 4;
const PIXELS = 100;
const TILES = (ROWS * COLS) - 1;

const TIMER_AMOUNT = 8; // 8 mins
const TIME_TILL_MUSIC = 3; // 3 mins

var deadline = null;
var gamePiecesArray = [];
var empty_x_coordinate = '300px'; // 300 pixels right
var empty_y_coordinate = '300px'; // 300 pixels down
var total_moves_taken = 0;
var total_time_taken = '';
var current_lead = '';

// Used for clearing elements to avoid them from endlessly stacking ontop of each other
function clearElement(elemId) { document.getElementById(elemId).innerHTML = ''; }

function start_game(){
	clearElement('game'); // Clear entire game screen load

	// These values are saved for later when the results screen will be shown
	total_moves_taken = 0;
	total_time_taken = 0;

	// Initalizing the timer used for the game
	let current_time = Date.parse(new Date());
	deadline = new Date(current_time + TIMER_AMOUNT*60*1000); // 1000 milisecond * 60 make 1 minute
	start_timing("timer", deadline);

	// attach what will be the puzzle itself to the game div
	game = document.getElementById('game');
	puzzle = document.createElement('section');
	puzzle.setAttribute('id', 'puzzle'); // setting id for CSS

	// Creation of each individual tile
	for (var i = 0; i < TILES; i++) { 
		var tile = document.createElement('div');
		tile.setAttribute('id', 'tile' + (i+1));
		gamePiecesArray.push(tile); // add tile to an array that will be the "grid" of the puzzle
		format_square(i);
	}

	// append puzzle div to the game div
	game.appendChild(puzzle);

	for (var i = 0; i < TILES; i ++) { set_tile_num(i); }
}

/*This function is solely meant to get the image position correctly on each of the TILES.
As well as adding the listeners to each TILES to give them their effects and actions*/
function format_square(index) {
	gamePiecesArray[index].classList.add('puzzleTile');
	gamePiecesArray[index].style.left = (index%ROWS*PIXELS)+'px'; // set the left (x) offset of the tile
	gamePiecesArray[index].style.top = (Math.floor(index/ROWS)*PIXELS)+'px'; // set the top (y) offset of the tile
	gamePiecesArray[index].style.backgroundPosition = '-' + gamePiecesArray[index].style.left + ' ' + '-' + gamePiecesArray[index].style.top; // set the x/y offset of the picture
	gamePiecesArray[index].style.backgroundImage = "url('images/mario.jpg')"; 

	gamePiecesArray[index].addEventListener('mouseover', onHoverHander);
	gamePiecesArray[index].addEventListener('mouseout', onLeaveHander);
	gamePiecesArray[index].addEventListener('click', onClickHandler);

	// Add the array to the puzzle div
	puzzle.appendChild(gamePiecesArray[index]);
}
/*Checks to see if the card is blocked and if it's not then allow it to move*/
function onClickHandler() {
	let isNotBlocked = mobility(parseInt(this.innerHTML));
	if (isNotBlocked) { 
		total_moves_taken++;
		switch_positions(this.innerHTML-1, true);
		if(youwon()) { endGame(); } 
	}
}
/*Checks to see if card is blocked, and if it's not then highlight
it green. But if it is then just add a underline to the number*/
function onHoverHander() {
	let isNotBlocked = mobility(parseInt(this.innerHTML));
	if (isNotBlocked) {
		this.className = "freeTile";
	} else {
		this.className = "blockedTile";
	}
}
/*Sets tile back to it's original look*/
function onLeaveHander() {
	this.className = "puzzleTile";
}

/*Meant to add the tile number to the tile by changing the inner text*/
function set_tile_num(index) { document.getElementById('tile' + (index+1)).innerHTML = index+1 }

/*Fist method called to get value for it the tile can move or not*/
function mobility(position) {
	var move_value = move(position-1);
	if (move_value == (position-1)) { return true; } else { return false; }
}

function something(pos) { document.getElementById('test').innerHTML = pos; } // strictly meant for debugging

/*Method that is used when the user clicks on the shuffle button on the page
shuffles the tiles buy randomly choosing from movable pieces and swapping them*/
function shuffle_tiles(){
	for (var i = 0; i < 1000; i++){ // i here is what dictates how many randomized moves were used to make the shuffle
		let moveable_pieces = [];
		for (var j = 0; j < TILES; j++){
			let tile = gamePiecesArray[j];
			let tile_pos = parseInt(tile.innerHTML);
			let isNotBlocked = mobility(parseInt(tile.innerHTML)); // check to make sure tile can be moved

			if (isNotBlocked) { moveable_pieces.push(tile_pos); } // add piece to array if it can be moved
		}
		let tile_to_be_moved = get_rand(moveable_pieces.length); // position of the tile in movable array to be swapped (is picked randomly)
		let moveable = move(moveable_pieces[tile_to_be_moved]-1); // check if it can be moved
		if (moveable != -1) { switch_positions(moveable, false); }
	}
}

/*Switches positions of the movable tile and the empty space by checking if the difference in values
and depending on the value the tile is moved in a direction (It's also animated)*/
function switch_positions(tile_pos, be_fancy) {
	let current_tile_x = parseInt(gamePiecesArray[tile_pos].style.left);
	let current_tile_y = parseInt(gamePiecesArray[tile_pos].style.top);
	let space_x = parseInt(empty_x_coordinate);
	let space_y = parseInt(empty_y_coordinate);
	let x_diff = current_tile_x - space_x;
	let y_diff = current_tile_y - space_y;
	let isRight = false;
	let isDown = false;
	var intv;

	if ((x_diff) < 0 && (x_diff) != 0) { // if tile is moving to the right
		if (be_fancy) { intv = setInterval(framesRight, 5); }
	} else if ((x_diff) > 0 && (x_diff) != 0) { // if the tile is moving to the left
		if (be_fancy) { intv = setInterval(framesLeft, 5); }
	}

	if ((y_diff) < 0 && (y_diff) != 0) { // if the tile is moving down
		if (be_fancy) { intv = setInterval(framesDown, 5); }
	} else if ((y_diff) > 0 && (y_diff) != 0) { // if the tile is moving up
		if (be_fancy) { intv = setInterval(framesUp, 5); }
	}

	// Animation of the TILES moving. It adds or subtracts y or x till it reaches it's desired location (is done in 5 mili sec intervals)
	function framesLeft() {
		if (current_tile_x == space_x) { clearInterval(intv); }
		else {
			current_tile_x--;
			gamePiecesArray[tile_pos].style.left = current_tile_x + 'px';
		}
	}

	function framesRight() {
		if (current_tile_x == space_x) { clearInterval(intv); }
		else {
			current_tile_x++;
			gamePiecesArray[tile_pos].style.left = current_tile_x + 'px';
		}
	}

	function framesUp() {
		if (current_tile_y == space_y) { clearInterval(intv); }
		else{
			current_tile_y--;
			gamePiecesArray[tile_pos].style.top = current_tile_y + 'px';
		}
	}

	function framesDown() {
		if (current_tile_y == space_y) { clearInterval(intv); }
		else{
			current_tile_y++;
			gamePiecesArray[tile_pos].style.top = current_tile_y + 'px';
		}
	}
	//your run of the mill swapping
	let temp = gamePiecesArray[tile_pos].style.top;
	gamePiecesArray[tile_pos].style.top = empty_y_coordinate;
	empty_y_coordinate = temp;

	temp = gamePiecesArray[tile_pos].style.left;
	gamePiecesArray[tile_pos].style.left = empty_x_coordinate;
	empty_x_coordinate = temp
}

/*function used as one of the checks to make sure a tile can move, but in this case is checking to make sure that
the space is within the board as well as checking where exactly it might be in relation of the tile to be move to it*/
function move(pos) {
	let space_x_coord = parseInt(empty_x_coordinate);
	let space_y_coord = parseInt(empty_y_coordinate);
	let result = 0;

	//checking to make sure that the space is still within the bounds of the game
	if (space_x_coord > 0 || space_x_coord < 300) { 
		result = coord_check(space_x_coord, space_y_coord, pos); 
		return result;
	}
	else if (space_y_coord > 0 || space_y_coord < 300) { 
		result = coord_check(space_x_coord, space_y_coord, pos);
		return result;
	}
	return -1;
}

/*Checking to make sure that when the tile moves, it's actually going to the empty space*/
function coord_check(x_coord, y_coord, tile_pos) {
	let tile_x_coord = parseInt(gamePiecesArray[tile_pos].style.left); // get the x coord
	let tile_y_coord = parseInt(gamePiecesArray[tile_pos].style.top); // get the y coord
	if((tile_x_coord + 100) == x_coord && tile_y_coord == y_coord) { return tile_pos; } // if the space tile is in the x position 100 more than the tile
	else if((tile_x_coord - 100) == x_coord && tile_y_coord == y_coord) { return tile_pos; } // if the space tile is in the x position 100 less than the tile
	else if(tile_x_coord == x_coord && (tile_y_coord + 100) == y_coord) { return tile_pos; } // if the space tile is in the y position 100 more than the tile
	else if(tile_x_coord == x_coord && (tile_y_coord - 100) == y_coord) { return tile_pos; } // if the space tile is in the y position 100 less than the tile
	return -1; // return -1 if nothing was true
}

/*Helper function to get random number*/
function get_rand(max){
	let rand = 0; 
	rand = Math.floor(Math.random() * max);
	return rand;
}

/*Function to make playing sounds easier*/
function sound(sound_obj) {
	this.sound = document.createElement("audio");
	this.sound.src = sound_obj;
    document.body.appendChild(this.sound);
	this.play = function(){ this.sound.play(); }
	this.stop = function(){ this.sound.pause(); }
}

// timer methods 
var timeinterval = setInterval(update_clock,1000);

/*endtime is the deadline and this returns a array of the total time/time left for the timer */
function countDown(endtime){
	var total_time = Date.parse(endtime) - Date.parse(new Date()); // endtime is the deadline and this is 
	var seconds = Math.floor((total_time/1000) % 60);
	var minutes = Math.floor((total_time/1000/60) % 60);
	return {'total':total_time, 'minutes':minutes, 'seconds':seconds};
}

/*the meat of the timer which update the clock as well as formats the timer for better user experience*/
function start_timing(elemId,endtime){
	var timer = document.getElementById(elemId);
	function update_clock(){
		var time = countDown(endtime);
		timer.innerHTML = "Time left: " + formatTime(time.minutes)+':'+formatTime(time.seconds);
		if(time.total<0){ // when timer runs out
			clearInterval(timeinterval);
			music.stop();
			document.getElementById('timer').innerHTML = "Time's up!";
			clearElement("game");
			clearElement("interface");
			printResults(true);
		}
		if(time.total<300000){ // 5 mins
			music.play();
		} 
	}
	update_clock(); // run once remove lag
	timeinterval = setInterval(update_clock,1000); // timer to show time counting down
}

/*Formates the timer given above by adding an extra digit if necessary*/
function formatTime(number) {
	if (number <= 9) { number = "0" + number; }
	return number;
}

// used for endgame results
function getFormattedTime(time) {
	let seconds = Math.floor((time/1000) % 60);
	let minutes = Math.floor((time/1000/60) % 60);
	let total_time = minutes + 'm ' + seconds + 's';
	return total_time;
}

// what makes up the award/end screen
function printResults(out_of_time) {
	let time_at_finish = 0;
	if (!out_of_time) {
		let time_at_finish_array = countDown(deadline);
		time_at_finish = (TIMER_AMOUNT * (60*1000)) - time_at_finish_array.total;
		let total_time_taken = getFormattedTime(time_at_finish);
		document.getElementById('total_time').innerHTML = "Time taken: " + total_time_taken;
	}
	check_leader(total_moves_taken, time_at_finish, out_of_time);
	let leader_arr = current_lead.split(';');

	let best_time_taken = getFormattedTime(leader_arr[1]);

	document.getElementById('best').innerHTML = "Best so far: " + leader_arr[0] + " moves in " + best_time_taken;
	document.getElementById('total_moves').innerHTML = "Total moves taken: " + total_moves_taken;
}

/*a function for simply shwoing that the game is finished*/
function endGame(){
	clearInterval(timeinterval); // stop the timer
	clearElement('game'); // clear the game element
	clearElement('interface'); // clear buttons
	clearElement('timer'); // clear timer
	printResults(false); // print out the results for the game

	//setting up the winner div tag 
	let win_interface_id = document.getElementById('win');
	music.stop();

	var win_ui = document.createElement('P');
	win_ui.setAttribute('id', 'win_text');
	win_interface_id.appendChild(win_ui);
    document.getElementById('win_text').innerHTML = 'You Won!';

    var img = document.createElement('IMG'); 
    img.setAttribute("src", "images/mario_winner.png");
    win_interface_id.appendChild(img);
}

/*Function for checking the postion of each tile and verifying that it matches
to what the puzzle would look like solved. All by checking the tile's left and top
position in the div*/
function youwon() {
    var win=true;
    for (var i=0; i<TILES; i++){
    	var top_coord = parseInt(gamePiecesArray[i].style.top);
    	var left_coord = parseInt(gamePiecesArray[i].style.left);
    	if (left_coord != ((i%ROWS)*PIXELS) || top_coord != Math.floor(i/ROWS)*PIXELS) { //check to make sure that the tile coords are equal to their inner value mod 4 tiles 100 (because of the dimensions)
    		win = false;
    		return win;
    	}
    }
    return win;
}

/*function for getting and saving the current leader for this game*/
function check_leader(moves, time, out_of_time) {
	current_lead = localStorage.leader; // get the leader from stored memory
	let new_leader = moves + ';' + time;
	let old_leader_values = null;

	if (current_lead == undefined && !out_of_time) { // if leader isn't there, you're the first leader
		localStorage.leader = new_leader;
		current_lead = new_leader;
	} else { 
		old_leader_values = current_lead.split(';');

		//comparing based off of time taken to complete puzzle
		if (old_leader_values[1] > time) { 
			localStorage.leader = new_leader;
			current_lead = new_leader; 
		}
	}
}