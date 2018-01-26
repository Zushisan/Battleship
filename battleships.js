
$(document).ready(function() {

const seaTiles = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", ],
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", ]
];

function createGrid(){

  // Create Display ROWS
  for(let i = 0; i < seaTiles[0].length; i++){
    $('.board').append('<div class="row" id="row'+seaTiles[1][i]+'"></div>');
  }
  // Create Display TILES in ROWS
  for(let j = 0; j < seaTiles[1].length; j++){
    $('.row').append('<div class="tile" id="column'+seaTiles[0][j]+'"></div>');
  }
}

function clickedRow(row){

}

function clickedColumn(column){

}



  $('.row').on('click', function() {
    var thisRow = this.id;
    console.log(thisRow);
    $('.row').children('.tile').on('click', function() {
      console.log(this.id);

    });
  });



// We initialize the grid
createGrid();

});





  // $('.photos').on('mouseenter', 'li', function() {
  //   $(this).find('span').slideToggle();
  // });
