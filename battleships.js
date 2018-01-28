
$(document).ready(function() {

  const seaTiles = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", ],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", ]
  ];

  var battleships = [
    { name: "Carrier",
      setDown: false },
    { name: "Battleship",
      setDown: false },
    { name: "Cruiser",
      setDown: false },
    { name: "Submarine",
      setDown: false },
    { name: "Destroyer",
      setDown: false }
  ];

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

  // We initialize the grid before anything, will refactor for two players and IA
  createGrid();

  // That function is used to display any message to the player from the message box
  // shipPlacement is an optional argument that we use to setup ships.
  function displayMessage (message, shipPlacement) {
    $('.messageBox').empty();
    $('.messageBox').append('<p>' + message + '</p>');

    if(shipPlacement){
      if(!battleships[0].setDown){
        $('.messageBox').append('<p> <button type="button" id="carrier">Carrier</button> </p>');
      }
      if(!battleships[1].setDown){
        $('.messageBox').append('<p> <button type="button" id="battleship">Battleship</button> </p>');
      }
      if(!battleships[2].setDown){
        $('.messageBox').append('<p> <button type="button" id="cruiser">Cruiser</button> </p>');
      }
      if(!battleships[3].setDown){
        $('.messageBox').append('<p> <button type="button" id="submarine">Submarine</button> </p>');
      }
      if(!battleships[4].setDown){
        $('.messageBox').append('<p> <button type="button" id="destroyer">Destroyer</button> </p>');
      }
    }
  }

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

  // Function created to place carrier, will be refactored with other ships function to contain all ships
  // orientation takes vertical or horizontal.
  function setCarrier(orientation){
    console.log("I am in setCarrier")
    if(orientation === "horizontal"){
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
        battleships[0].setDown = true;
        displayMessage("Please place your Ships: ", true);
        listening();
        $('.tile').off();

      });
    }
    else if(orientation === "vertical"){
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
        battleships[0].setDown = true;
        displayMessage("Please place your Ships: ", true);
        listening();
        $('.tile').off();

      });
    }
  }

  function setBattleship(orientation){

    if(orientation === "horizontal"){
      $('.tile').on('mouseover', function (){
      // Principal origin from where we hover and from where we set ship down
        $(this).addClass('hover');
        $(this).next().addClass('hover');
        $(this).next().next().addClass('hover');
        $(this).prev().addClass('hover');

      }).mouseout(function(){
        $(this).removeClass('hover');
        $(this).next().removeClass('hover');
        $(this).next().next().removeClass('hover');
        $(this).prev().removeClass('hover');

      }).on('click', function(){
        $(this).addClass('shipSet');
        $(this).next().addClass('shipSet');
        $(this).next().next().addClass('shipSet');
        $(this).prev().addClass('shipSet');
        battleships[1].setDown = true;
        displayMessage("Please place your Ships: ", true);
        listening();
        $('.tile').off();

      });
    }
    else if(orientation === "vertical"){
      $('.tile').mouseover(function (){
        $(this).addClass('hover');
        $(setVerticalId(this, 1)).addClass('hover');
        $(setVerticalId(this, 2)).addClass('hover');
        $(setVerticalId(this, -1)).addClass('hover');

      }).mouseout(function(){
        $(this).removeClass('hover');
        $(setVerticalId(this, 1)).removeClass('hover');
        $(setVerticalId(this, 2)).removeClass('hover');
        $(setVerticalId(this, -1)).removeClass('hover');

      }).click(function(){
        $(this).addClass('shipSet');
        $(setVerticalId(this, 1)).addClass('shipSet');
        $(setVerticalId(this, 2)).addClass('shipSet');
        $(setVerticalId(this, -1)).addClass('shipSet');
        battleships[1].setDown = true;
        displayMessage("Please place your Ships: ", true);
        listening();
        $('.tile').off();

      });
    }
  }

  function setCruiser(orientation){

    if(orientation === "horizontal"){
      $('.tile').on('mouseover', function (){
      // Principal origin from where we hover and from where we set ship down
        $(this).addClass('hover');
        $(this).next().addClass('hover');
        $(this).next().next().addClass('hover');

      }).mouseout(function(){
        $(this).removeClass('hover');
        $(this).next().removeClass('hover');
        $(this).next().next().removeClass('hover');

      }).on('click', function(){
        $(this).addClass('shipSet');
        $(this).next().addClass('shipSet');
        $(this).next().next().addClass('shipSet');
        battleships[2].setDown = true;
        displayMessage("Please place your Ships: ", true);
        listening();
        $('.tile').off();

      });
    }
    else if(orientation === "vertical"){
      $('.tile').mouseover(function (){
        $(this).addClass('hover');
        $(setVerticalId(this, 1)).addClass('hover');
        $(setVerticalId(this, 2)).addClass('hover');

      }).mouseout(function(){
        $(this).removeClass('hover');
        $(setVerticalId(this, 1)).removeClass('hover');
        $(setVerticalId(this, 2)).removeClass('hover');

      }).click(function(){
        $(this).addClass('shipSet');
        $(setVerticalId(this, 1)).addClass('shipSet');
        $(setVerticalId(this, 2)).addClass('shipSet');
        battleships[2].setDown = true;
        displayMessage("Please place your Ships: ", true);
        listening();
        $('.tile').off();

      });
    }
  }

  function setSubmarine(orientation){

    if(orientation === "horizontal"){
      $('.tile').on('mouseover', function (){
      // Principal origin from where we hover and from where we set ship down
        $(this).addClass('hover');
        $(this).next().addClass('hover');
        $(this).next().next().addClass('hover');

      }).mouseout(function(){
        $(this).removeClass('hover');
        $(this).next().removeClass('hover');
        $(this).next().next().removeClass('hover');

      }).on('click', function(){
        $(this).addClass('shipSet');
        $(this).next().addClass('shipSet');
        $(this).next().next().addClass('shipSet');
        battleships[3].setDown = true;
        displayMessage("Please place your Ships: ", true);
        listening();
        $('.tile').off();

      });
    }
    else if(orientation === "vertical"){
      $('.tile').mouseover(function (){
        $(this).addClass('hover');
        $(setVerticalId(this, 1)).addClass('hover');
        $(setVerticalId(this, 2)).addClass('hover');

      }).mouseout(function(){
        $(this).removeClass('hover');
        $(setVerticalId(this, 1)).removeClass('hover');
        $(setVerticalId(this, 2)).removeClass('hover');

      }).click(function(){
        $(this).addClass('shipSet');
        $(setVerticalId(this, 1)).addClass('shipSet');
        $(setVerticalId(this, 2)).addClass('shipSet');
        battleships[3].setDown = true;
        displayMessage("Please place your Ships: ", true);
        listening();
        $('.tile').off();

      });
    }
  }

  function setDestroyer(orientation){

    if(orientation === "horizontal"){
      $('.tile').on('mouseover', function (){
      // Principal origin from where we hover and from where we set ship down
        $(this).addClass('hover');
        $(this).next().addClass('hover');

      }).mouseout(function(){
        $(this).removeClass('hover');
        $(this).next().removeClass('hover');

      }).on('click', function(){
        $(this).addClass('shipSet');
        $(this).next().addClass('shipSet');
        battleships[4].setDown = true;
        displayMessage("Please place your Ships: ", true);
        listening();
        $('.tile').off();

      });
    }
    else if(orientation === "vertical"){
      $('.tile').mouseover(function (){
        $(this).addClass('hover');
        $(setVerticalId(this, 1)).addClass('hover');

      }).mouseout(function(){
        $(this).removeClass('hover');
        $(setVerticalId(this, 1)).removeClass('hover');

      }).click(function(){
        $(this).addClass('shipSet');
        $(setVerticalId(this, 1)).addClass('shipSet');
        battleships[4].setDown = true;
        displayMessage("Please place your Ships: ", true);
        listening();
        $('.tile').off();

      });
    }
  }


  // Need this function to create a dynamic ship set down, called everytime we need to listen to a new button click
  function listening(){

    $('#carrier').click(function(){
      $('.messageBox').empty();
      $('.messageBox').append('<p> Choose orientation </p>');
      $('.messageBox').append('<p> <button type="button" id="carrier" class="horizontal">Horizontal</button> </p>');
      $('.messageBox').append('<p> <button type="button" id="carrier" class="vertical">Vertical</button> </p>');

      $('#carrier.horizontal').click(function(){
        setCarrier('horizontal');
      });

      $('#carrier.vertical').click(function(){
        setCarrier('vertical');
      });
    });

    $('#battleship').click(function(){
      $('.messageBox').empty();
      $('.messageBox').append('<p> Choose orientation </p>');
      $('.messageBox').append('<p> <button type="button" id="battleship" class="horizontal">Horizontal</button> </p>');
      $('.messageBox').append('<p> <button type="button" id="battleship" class="vertical">Vertical</button> </p>');

      $('#battleship.horizontal').click(function(){
        setBattleship('horizontal');
      });

      $('#battleship.vertical').click(function(){
        setBattleship('vertical');
      });
    });

    $('#cruiser').click(function(){
      $('.messageBox').empty();
      $('.messageBox').append('<p> Choose orientation </p>');
      $('.messageBox').append('<p> <button type="button" id="cruiser" class="horizontal">Horizontal</button> </p>');
      $('.messageBox').append('<p> <button type="button" id="cruiser" class="vertical">Vertical</button> </p>');

      $('#cruiser.horizontal').click(function(){
        setCruiser('horizontal');
      });

      $('#cruiser.vertical').click(function(){
        setCruiser('vertical');
      });
    });

    $('#submarine').click(function(){
      $('.messageBox').empty();
      $('.messageBox').append('<p> Choose orientation </p>');
      $('.messageBox').append('<p> <button type="button" id="submarine" class="horizontal">Horizontal</button> </p>');
      $('.messageBox').append('<p> <button type="button" id="submarine" class="vertical">Vertical</button> </p>');

      $('#submarine.horizontal').click(function(){
        setSubmarine('horizontal');
      });

      $('#submarine.vertical').click(function(){
        setSubmarine('vertical');
      });
    });

    $('#destroyer').click(function(){
      $('.messageBox').empty();
      $('.messageBox').append('<p> Choose orientation </p>');
      $('.messageBox').append('<p> <button type="button" id="destroyer" class="horizontal">Horizontal</button> </p>');
      $('.messageBox').append('<p> <button type="button" id="destroyer" class="vertical">Vertical</button> </p>');

      $('#destroyer.horizontal').click(function(){
        setDestroyer('horizontal');
      });

      $('#destroyer.vertical').click(function(){
        setDestroyer('vertical');
      });
    });

  }

  // When clicked, the startGame button will walk the player into placing each of his ships.
  $('#startGame').click(function(){
    displayMessage("Please place your Ships: ", true);
    listening();
  });



}); // document ready



// happy path for one player setup + play against himself:

  // create the board
  // have a message box on the right
  // first ask the player to place his ships
  // in order from longest to shortest
  // Carrier then Vertical or Horizontal
  // followed by other ships

  // Click on Start playing
    // Please place ship message with Carrier
    // Place Carrier
      // Click on Hori or Verti
        // Start the highlight for specified mode
          // Click place the ship down
            // end the highlight
              // start next event for next ship

    //   Place Battleship
    //     Place Cruiser
    //       Place Submarine
    //         Place Destroyer

// Start game set 5 fives button, one for each ship
// clicking one promtp the vertical or horizontal
// setting it up gets back to the button selection with the ship button less









  // then display a message to start playing
  // each click on a ship works
  // each click not on a ship misses

  // first start by just displaying messages in message box to see if I get the right info to work with.



