// Group project 3 javascript

"use strict";

var game = null; // game board
var puzzle;

var boardArray;
var empty_x_coordinate = 300; // 300 pixels right
var empty_y_coordinate = 300; // 300 pixels down
const rows = 4;
const cols = 4;
const pixels = 100;
const tiles = (rows * cols) - 1;

var gamePiecesArray = [];

function clearElement(elemId) { document.getElementById(elemId).innerHTML = ''; }

function start_game(){
	clearElement('game');
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
	// var string = gamePiecesArray.toString();
	// document.write(string);
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
	if (isBlocked) { switch_positions(this.innerHTML-1); }
}

function onHoverHander() {
	//something(parseInt(this.innerHTML)); // testing to get each number
	let isBlocked = mobility(parseInt(this.innerHTML));
	if (!isBlocked) { // can probably just link it to a css class style
		this.style.border = "2px solid red";
		this.style.color = "#ff0008";
		this.style.textDecoration = "underline";
	} else {
		this.style.border = "2px solid green";
		this.style.color = "#229103";
		this.style.textDecoration = "underline";
	}
}

function onLeaveHander() {
	this.style.border = "2px solid black";
	this.style.color = "#000000";
	this.style.textDecoration = "none";
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

	if (space_x_coord > 0) { 
		result = coord_check(space_x_coord, space_y_coord, pos); 
		return result;
	}
	else if (space_x_coord < 300) { 
		result = coord_check(space_x_coord, space_y_coord, pos); 
		return result;
	}
	else if (space_y_coord > 0) { 
		result = coord_check(space_x_coord, space_y_coord, pos);
		return result;
	}
	else if (space_y_coord < 300) {
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