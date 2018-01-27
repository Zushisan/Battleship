
$(document).ready(function() {

  const seaTiles = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", ],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", ]
  ];

  // var battleships = [

  // { name: "Carrier",
  //   length: 5,
  //   pos: ["","","","",""]},
  // {},
  // {},
  // {},
  // {}

  // ];


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
  // We initialize the grid, will refactor for two players and IA
  createGrid();

  function tileClicked(rowID, columnID){

    columnID = columnID.substr(columnID.length - 1);

    if(rowID.length === 5){
      rowID = rowID.substr(rowID.length - 2);
    }
    else {
      rowID = rowID.substr(rowID.length - 1);
    }
    return columnID+rowID;
  }


  $('.row').click(function () {
    }).children().click(function () {
        let columnID = this.id;
        let rowObject = $(this).parent('.row');
        let rowID = rowObject.attr('id');
        tileClicked(rowID, columnID);
        });


  $('#destroyer').click(function(){
    console.log("i click button");

      $('.row').on('mouseover', function () {
    }).children().on('mouseover', function () {
        $(this).addClass('hover');


        }).mouseout(function(){
      $(this).removeClass('hover')});;
  });




});
