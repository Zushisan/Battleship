
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

  // That function will return the vertical ID from this and 'number' tile away
  // Use it to set ship vertically
  function setVerticalId(thisId, number){
    let verticalId = $(thisId).attr('id');
    let changeId = verticalId.split('');
    changeId[0] = parseInt(changeId);
    changeId[0] = changeId[0] + number;
    verticalId = changeId.join('');
    return '#' + verticalId;
  }


  // let destroyerPlaced = 0;
  // $('#destroyer').on('click', function(){

  //   $('.row').on('mouseover', function () {
  //   }).children().on('mouseover', function () {
  //     // Principal origin from where we hover and from where we set ship down
  //     if (destroyerPlaced === 0){
  //       $(this).addClass('hover').on('click', function(){


  //         console.log('I CLICK');
  //         $(this).addClass('shipSet').removeClass('hover');
  //         // Next tiles we need to set down
  //         $(this).next().addClass('shipSet').removeClass('hover');
  //         console.log(destroyerPlaced);
  //         destroyerPlaced++;

  //       });

  //       // Next tiles we need to hover
  //       $(this).next().addClass('hover');
  //     }
  //   }).mouseout(function(){

  //       $(this).removeClass('hover');
  //       $(this).next().removeClass('hover');

  //   });
  // });

    $('#carrier').click(function(){

      $('.tile').on('mouseover', function (){
        // Principal origin from where we hover and from where we set ship down
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

      }).on('click', function(){
        $(this).addClass('shipSet');
        $(this).next().addClass('shipSet');
        $(this).next().next().addClass('shipSet');
        $(this).prev().addClass('shipSet');
        $(this).prev().prev().addClass('shipSet');
      });

    });

    $('#carrierVertical').on('click', function(){

        $('.tile').mouseover(function (){
          $(this).addClass('hover');
          $(setVerticalId(this, 1)).addClass('hover');
          $(setVerticalId(this, 2)).addClass('hover');
          $(setVerticalId(this, -1)).addClass('hover');
          $(setVerticalId(this, -2)).addClass('hover');

        }).mouseout(function(){
          $(this).removeClass('hover');
          $(setVerticalId(this, 1)).removeClass('hover');
          $(setVerticalId(this, 2)).removeClass('hover');
          $(setVerticalId(this, -1)).removeClass('hover');
          $(setVerticalId(this, -2)).removeClass('hover');

        }).click(function(){
          $(this).addClass('shipSet');
          $(setVerticalId(this, 1)).addClass('shipSet');
          $(setVerticalId(this, 2)).addClass('shipSet');
          $(setVerticalId(this, -1)).addClass('shipSet');
          $(setVerticalId(this, -2)).addClass('shipSet');


        }).off('mouseover', 'mouseout', 'click');

    });

}); // document ready







