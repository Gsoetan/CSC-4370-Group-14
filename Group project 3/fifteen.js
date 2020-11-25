// Group project 3 javascript

var game = null; // game board
var puzzle;

var boardArray;
var empty_x_coordinate = '300px'; // 300 pixels right
var empty_y_coordinate = '300px'; // 300 pixels down
const rows = 4;
const cols = 4;
const pixels = 100;
const tiles = (rows * cols) - 1;

const timer_amount = 8; // 5 mins
const time_till_music = 3; // 3 mins
var deadline = null;

var gamePiecesArray = [];

var total_moves_taken = 0;
var total_time_taken = ''; // gonna be something like time/1000 = seconds then idk after that

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
	let isBlocked = mobility(parseInt(this.innerHTML));
	if (isBlocked) { 
		total_moves_taken++;
		printResults(false);
		switch_positions(this.innerHTML-1); 
	}
}

function onHoverHander() {
	//something(parseInt(this.innerHTML)); // testing to get each number
	let isBlocked = mobility(parseInt(this.innerHTML));
	if (!isBlocked) { // can probably just link it to a css class style
		this.className = "blockedTile";
	} else {
		this.className = "freeTile";
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

}

function switch_positions(tile_pos) {
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
		document.getElementById('test').innerHTML = "I moved right";
		intv = setInterval(framesRight, 5);
	} else if ((x_diff) > 0 && (x_diff) != 0) { // if the tile is moving to the left
		document.getElementById('test').innerHTML = "I moved left";
		intv = setInterval(framesLeft, 5);
	}

	if ((y_diff) < 0 && (y_diff) != 0) { // if the tile is moving down
		document.getElementById('test').innerHTML = "I moved down";
		intv = setInterval(framesDown, 5);
	} else if ((y_diff) > 0 && (y_diff) != 0) { // if the tile is moving up
		document.getElementById('test').innerHTML = "I moved up";
		intv = setInterval(framesUp, 5);
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

function get_rand(min, max){
	let rand = 0; 
	Math.floor((Math.random() * max) + min);
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
			// current_time = Date.parse(new Date());
			// deadline = new Date(current_time + timer_for*60*1000);
			// start_timing("timer",deadline);
		}
		if(time.total<300000){ // 5 mins
			//music.play();
		} 
	}
	update_clock(); // run once remove lag
	timeinterval = setInterval(update_clock,1000); // timer to show time counting down
}

function formatTime(number) {
	if (number <= 9) { number = "0" + number; }
	return number;
}

function printResults(out_of_time) {
	if (out_of_time) {
		let time_at_finish = countDown(deadline);
		let seconds = Math.floor((time_at_finish.total/1000) % 60);
		let minutes = Math.floor((time_at_finish.total/1000/60) % 60);
		let total_time_taken = minutes + 'm ' + seconds + 's';
		document.getElementById('total_time').innerHTML = total_time_taken;
	}
	document.getElementById('total_moves').innerHTML = total_moves_taken;
	
}