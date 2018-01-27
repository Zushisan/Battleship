
$(document).ready(function() {

const seaTiles = [
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", ],
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", ]
];

var battleships = [

{ name: "Carrier",
  length: 5,
  pos: ["","","","",""]},
{},
{},
{},
{}

];


function createGrid(){
  // Create Display ROWS
  for(let i = 0; i < seaTiles[0].length; i++){
    $('.board').append('<div class="row" id="row'+seaTiles[1][i]+'ondrop="drop(event)" ondragover="allowDrop(event)"></div>');
  }
  // Create Display TILES in ROWS
  for(let j = 0; j < seaTiles[1].length; j++){
    $('.row').append('<div class="tile" id="column'+seaTiles[0][j]+'ondrop="drop(event)" ondragover="allowDrop(event)"></div>');
  }
}
// We initialize the grid, will refactor for two players and IA
createGrid();

function tileClicked(rowID, columnID, battleshipsPos){

  columnID = columnID.substr(columnID.length - 1);

  if(rowID.length === 5){
    rowID = rowID.substr(rowID.length - 2);
  }
  else {
    rowID = rowID.substr(rowID.length - 1);
  }
  console.log(columnID+rowID);
}


$('.row').click(function () {

  }).children().click(function () {
      let columnID = this.id;
      let rowObject = $(this).parent('.row');
      let rowID = rowObject.attr('id');
      tileClicked(rowID, columnID);
      });

});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}




