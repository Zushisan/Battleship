
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
      $('.board').append('<div class="row" id="'+seaTiles[1][i]+'"></div>');
    }
    // Create Display TILES in ROWS
    for(let i = 0; i < seaTiles[1].length; i++){
      $('#1.row').append('<div class="tile" id="1'+seaTiles[0][i]+'"></div>');
    }
    for(let i = 0; i < seaTiles[1].length; i++){
      $('#2.row').append('<div class="tile" id="2'+seaTiles[0][i]+'"></div>');
    }
    for(let i = 0; i < seaTiles[1].length; i++){
      $('#3.row').append('<div class="tile" id="3'+seaTiles[0][i]+'"></div>');
    }
    for(let i = 0; i < seaTiles[1].length; i++){
      $('#4.row').append('<div class="tile" id="4'+seaTiles[0][i]+'"></div>');
    }
    for(let i = 0; i < seaTiles[1].length; i++){
      $('#5.row').append('<div class="tile" id="5'+seaTiles[0][i]+'"></div>');
    }
    for(let i = 0; i < seaTiles[1].length; i++){
      $('#6.row').append('<div class="tile" id="6'+seaTiles[0][i]+'"></div>');
    }
    for(let i = 0; i < seaTiles[1].length; i++){
      $('#7.row').append('<div class="tile" id="7'+seaTiles[0][i]+'"></div>');
    }
    for(let i = 0; i < seaTiles[1].length; i++){
      $('#8.row').append('<div class="tile" id="8'+seaTiles[0][i]+'"></div>');
    }
    for(let i = 0; i < seaTiles[1].length; i++){
      $('#9.row').append('<div class="tile" id="9'+seaTiles[0][i]+'"></div>');
    }
    for(let i = 0; i < seaTiles[1].length; i++){
      $('#10.row').append('<div class="tile" id="10'+seaTiles[0][i]+'"></div>');
    }
  }

  // We initialize the grid, will refactor for two players and IA
  createGrid();



    // $('.row').click(function () {
    // }).children().click(function () {
    //   let columnID = this.id;
    //   let rowObject = $(this).parent('.row');
    //   let rowID = rowObject.attr('id');
    //   console.log('I am messing stuff');
    // }).attr('id', this.id+$(this).parent('.row').attr('id'));

    // $('#your_element').attr('id', columnID+rowID);


  // function tileClicked(rowID, columnID){
  //   return columnID+rowID;
  // }

  // $('.row').click(function () {
  // }).children().click(function () {
  //   let columnID = this.id;
  //   let rowObject = $(this).parent('.row');
  //   let rowID = rowObject.attr('id');
  //   tileClicked(rowID, columnID);
  //   });


  $('#destroyer').click(function(){
    console.log("i click button");

    $('.row').on('mouseover', function () {
    }).children().on('mouseover', function () {
      $(this).addClass('hover');
      $(this).next().addClass('hover');


    }).mouseout(function(){
      $(this).removeClass('hover');
      $(this).next().removeClass('hover');

    });;
  });

    $('#carrier').click(function(){
      console.log("i click button");

      $('.row').on('mouseover', function () {
      }).children().on('mouseover', function () {
        $(this).addClass('hover');
        $(this).next().addClass('hover');
        $(this).next().next().addClass('hover');
        $(this).prev().addClass('hover');
        $(this).prev().prev().addClass('hover');


      }).mouseout(function(){
        $(this).removeClass('hover');
        $(this).next().removeClass('hover');
        $(this).next().next().removeClass('hover');
        $(this).prev().removeClass('hover');
        $(this).prev().prev().removeClass('hover');

      });;
    });

    $('#carrierVertical').click(function(){
      console.log("i click button");

      $('.row').on('mouseover', function () {

        let idtest = $(this).children('.tile').next().attr('id');
        console.log(idtest);
        $(this).children('#'+idtest).addClass('hover');
      }).children().on('mouseover', function () {
        // $(this).addClass('hover');
        // $(this).next().addClass('hover');
        // $(this).next().next().addClass('hover');
        // $(this).prev().addClass('hover');
        // $(this).prev().prev().addClass('hover');


      }).mouseout(function(){
      // $(this).removeClass('hover');
      // $(this).next().removeClass('hover');
      // $(this).next().next().removeClass('hover');
      // $(this).prev().removeClass('hover');
      // $(this).prev().prev().removeClass('hover');

      });;
    });



});
