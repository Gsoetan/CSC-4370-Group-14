// Group project 3 javascript
'use strict';

var game = null; // game board
var puzzle;

var empty_x_coordinate = '300px'; // 300 pixels right
var empty_y_coordinate = '300px'; // 300 pixels down
const rows = 4;
const cols = 4;
const pixels = 100;
const tiles = (rows * cols) - 1;

const timer_amount = 8; // 5 mins
const time_till_music = 3; // 3 mins
var deadline = null;
const switch_time = 5;

var gamePiecesArray = [];

var total_moves_taken = 0;
var total_time_taken = '';

var current_lead = '';

function clearElement(elemId) { document.getElementById(elemId).innerHTML = ''; }

function start_game(){
	clearElement('game');
	total_moves_taken = 0;
	total_time_taken = 0;
	let current_time = Date.parse(new Date());
	deadline = new Date(current_time + timer_amount*60*1000);
	start_timing("timer", deadline);
	game = document.getElementById('game');
	puzzle = document.createElement('section');
	puzzle.setAttribute('id', 'puzzle');

	for (var i = 0; i < tiles; i++) { 
		var tile = document.createElement('div');
		tile.setAttribute('id', 'tile' + (i+1));
		gamePiecesArray.push(tile);
		format_square(i);
	}

	game.appendChild(puzzle);

	for (var i = 0; i < tiles; i ++) { set_tile_num(i); }
}

function format_square(index) {
	gamePiecesArray[index].classList.add('puzzleTile');
	gamePiecesArray[index].style.left = (index%rows*pixels)+'px';
	gamePiecesArray[index].style.top = (parseInt(index/rows)*pixels)+'px';
	gamePiecesArray[index].style.backgroundPosition = '-' + gamePiecesArray[index].style.left + ' ' + '-' + gamePiecesArray[index].style.top;
	gamePiecesArray[index].style.backgroundImage = "url('images/mario.jpg')"; 

	gamePiecesArray[index].addEventListener('mouseover', onHoverHander);
	gamePiecesArray[index].addEventListener('mouseout', onLeaveHander);
	gamePiecesArray[index].addEventListener('click', onClickHandler);

	puzzle.appendChild(gamePiecesArray[index]);
}

function onClickHandler() {
	let isNotBlocked = mobility(parseInt(this.innerHTML));
	if (isNotBlocked) { 
		total_moves_taken++;
		//printResults(false); // for debugging
		switch_positions(this.innerHTML-1, true);
		if(youwon()) { endGame(); } 
	}
}

function onHoverHander() {
	let isNotBlocked = mobility(parseInt(this.innerHTML));
	if (isNotBlocked) {
		this.className = "freeTile";
	} else {
		this.className = "blockedTile";
	}
}

function onLeaveHander() {
	this.className = "puzzleTile";
}

function set_tile_num(index) { document.getElementById('tile' + (index+1)).innerHTML = index+1 }

function mobility(position) {
	var move_value = move(position-1);
	if (move_value == (position-1)) { return true; } else { return false; }
}

function something(pos) { document.getElementById('test').innerHTML = pos; }

function shuffle_tiles(){
	for (var i = 0; i < 300; i++){ // i here is what dictates how many randomized moves were used to make the shuffle
		let moveable_pieces = [];
		for (var j = 0; j < tiles; j++){
			let tile = gamePiecesArray[j];
			let tile_pos = parseInt(tile.innerHTML);
			let isNotBlocked = mobility(parseInt(tile.innerHTML));

			if (isNotBlocked) { moveable_pieces.push(tile_pos); } // add piece to array if it can be moved
		}
		let tile_to_be_moved = get_rand(moveable_pieces.length); // position of the tile to be moved
		let moveable = move(moveable_pieces[tile_to_be_moved]-1); // check if it can be moved
		if (moveable != -1) { switch_positions(moveable, false); }
	}
}


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
		// document.getElementById('test').innerHTML = "I moved right";
		if (be_fancy) { intv = setInterval(framesRight, switch_time); }
	} else if ((x_diff) > 0 && (x_diff) != 0) { // if the tile is moving to the left
		// document.getElementById('test').innerHTML = "I moved left";
		if (be_fancy) { intv = setInterval(framesLeft, switch_time); }
	}

	if ((y_diff) < 0 && (y_diff) != 0) { // if the tile is moving down
		// document.getElementById('test').innerHTML = "I moved down";
		if (be_fancy) { intv = setInterval(framesDown, switch_time); }
	} else if ((y_diff) > 0 && (y_diff) != 0) { // if the tile is moving up
		// document.getElementById('test').innerHTML = "I moved up";
		if (be_fancy) { intv = setInterval(framesUp, switch_time); }
	}

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

	let temp = gamePiecesArray[tile_pos].style.top;
	gamePiecesArray[tile_pos].style.top = empty_y_coordinate;
	empty_y_coordinate = temp;

	temp = gamePiecesArray[tile_pos].style.left;
	gamePiecesArray[tile_pos].style.left = empty_x_coordinate;
	empty_x_coordinate = temp
}

function move(pos) {
	let space_x_coord = parseInt(empty_x_coordinate);
	let space_y_coord = parseInt(empty_y_coordinate);
	let result = 0;

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

function coord_check(x_coord, y_coord, tile_pos) {
	let tile_x_coord = parseInt(gamePiecesArray[tile_pos].style.left);
	let tile_y_coord = parseInt(gamePiecesArray[tile_pos].style.top);
	if((tile_x_coord + 100) == x_coord && tile_y_coord == y_coord) { return tile_pos; }
	else if((tile_x_coord - 100) == x_coord && tile_y_coord == y_coord) { return tile_pos; }
	else if(tile_x_coord == x_coord && (tile_y_coord + 100) == y_coord) { return tile_pos; }
	else if(tile_x_coord == x_coord && (tile_y_coord - 100) == y_coord) { return tile_pos; }
	return -1;
}

function get_rand(max){
	let rand = 0; 
	rand = Math.floor(Math.random() * max);
	return rand;
}

function sound(sound_obj) {
	this.sound = document.createElement("audio");
	this.sound.src = sound_obj;
    document.body.appendChild(this.sound);
	this.play = function(){ this.sound.play(); }
	this.stop = function(){ this.sound.pause(); }
}

// timer methods 
var timeinterval = setInterval(update_clock,1000);

function countDown(endtime){
	var total_time = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((total_time/1000) % 60);
	var minutes = Math.floor((total_time/1000/60) % 60);
	return {'total':total_time, 'minutes':minutes, 'seconds':seconds};
}

function start_timing(elemId,endtime){
	var timer = document.getElementById(elemId);
	function update_clock(){
		var time = countDown(endtime);
		timer.innerHTML = "Time left: " + formatTime(time.minutes)+':'+formatTime(time.seconds);
		if(time.total<0){ 
			clearInterval(timeinterval);
			music.stop();
			document.getElementById('timer').innerHTML = "Time's up!";
			printResults(true);
		}
		if(time.total<300000){ // 5 mins
			music.play();
		} 
	}
	update_clock(); // run once remove lag
	timeinterval = setInterval(update_clock,1000); // timer to show time counting down
}

function formatTime(number) {
	if (number <= 9) { number = "0" + number; }
	return number;
}

function getFormattedTime(time) {
	let seconds = Math.floor((time/1000) % 60);
	let minutes = Math.floor((time/1000/60) % 60);
	let total_time = minutes + 'm ' + seconds + 's';
	return total_time;
}

function printResults(out_of_time) {
	let time_at_finish = 0;
	if (!out_of_time) {
		let time_at_finish_array = countDown(deadline);
		time_at_finish = (timer_amount * (60*1000)) - time_at_finish_array.total;
		let total_time_taken = getFormattedTime(time_at_finish);
		document.getElementById('total_time').innerHTML = "Time taken: " + total_time_taken;
	}
	check_leader(total_moves_taken, time_at_finish);
	let leader_arr = current_lead.split(';');

	let best_time_taken = getFormattedTime(leader_arr[1]);

	document.getElementById('best').innerHTML = "Best so far: " + leader_arr[0] + " moves in " + best_time_taken;
	document.getElementById('total_moves').innerHTML = "Total moves taken: " + total_moves_taken;
}

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

function youwon() {
    var win=true;
    for (var i=0; i<tiles; i++){
    	var top_coord = parseInt(gamePiecesArray[i].style.top);
    	var left_coord = parseInt(gamePiecesArray[i].style.left);
    	if (left_coord != (i%4*100) || top_coord != parseInt(i/4)*100) {
    		win = false;
    		break;
    	}
    }
    return win;
}

function check_leader(moves, time) {
	current_lead = localStorage.leader;
	let new_leader = moves + ';' + time;
	let old_leader_values = null;

	if (current_lead == undefined) {
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