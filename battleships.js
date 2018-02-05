
$(document).ready(function() {

  const seaTiles = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", ],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", ]
  ];

  var battleships = [
    { name: "Carrier",
      setDown: false,
      coordinates: [],
      alive: true },
    { name: "Battleship",
      setDown: false,
      coordinates: [],
      alive: true },
    { name: "Cruiser",
      setDown: false,
      coordinates: [],
      alive: true },
    { name: "Submarine",
      setDown: false,
      coordinates: [],
      alive: true },
    { name: "Destroyer",
      setDown: false,
      coordinates: [],
      alive: true }
  ];

    var battleshipsP2 = [
    { name: "Carrier",
      setDown: false,
      coordinates: [],
      alive: true },
    { name: "Battleship",
      setDown: false,
      coordinates: [],
      alive: true },
    { name: "Cruiser",
      setDown: false,
      coordinates: [],
      alive: true },
    { name: "Submarine",
      setDown: false,
      coordinates: [],
      alive: true },
    { name: "Destroyer",
      setDown: false,
      coordinates: [],
      alive: true }
  ];

// <div class="row-numbers"><p class="numbers">'+(i+1)+'</p></div>

  // function createGrid(){
  //   // Create Display ROWS
  //   for(let i = 0; i < seaTiles[0].length; i++){
  //     $('.board').append('<div class="row" id="'+seaTiles[1][i]+'"></div>');
  //   }
  //   // Create Display TILES in ROWS
  //   for(let i = 0; i < seaTiles[1].length; i++){
  //     $('#1.row').append('<div class="tile" id="1'+seaTiles[0][i]+'"></div>');
  //   }
  //   for(let i = 0; i < seaTiles[1].length; i++){
  //     $('#2.row').append('<div class="tile" id="2'+seaTiles[0][i]+'"></div>');
  //   }
  //   for(let i = 0; i < seaTiles[1].length; i++){
  //     $('#3.row').append('<div class="tile" id="3'+seaTiles[0][i]+'"></div>');
  //   }
  //   for(let i = 0; i < seaTiles[1].length; i++){
  //     $('#4.row').append('<div class="tile" id="4'+seaTiles[0][i]+'"></div>');
  //   }
  //   for(let i = 0; i < seaTiles[1].length; i++){
  //     $('#5.row').append('<div class="tile" id="5'+seaTiles[0][i]+'"></div>');
  //   }
  //   for(let i = 0; i < seaTiles[1].length; i++){
  //     $('#6.row').append('<div class="tile" id="6'+seaTiles[0][i]+'"></div>');
  //   }
  //   for(let i = 0; i < seaTiles[1].length; i++){
  //     $('#7.row').append('<div class="tile" id="7'+seaTiles[0][i]+'"></div>');
  //   }
  //   for(let i = 0; i < seaTiles[1].length; i++){
  //     $('#8.row').append('<div class="tile" id="8'+seaTiles[0][i]+'"></div>');
  //   }
  //   for(let i = 0; i < seaTiles[1].length; i++){
  //     $('#9.row').append('<div class="tile" id="9'+seaTiles[0][i]+'"></div>');
  //   }
  //   for(let i = 0; i < seaTiles[1].length; i++){
  //     $('#10.row').append('<div class="tile" id="10'+seaTiles[0][i]+'"></div>');
  //   }
  // }

  // // We initialize the grid before anything, will refactor for two players and IA
  // createGrid();

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

    changeId[3] = parseInt(changeId[3]);
    changeId[3] = changeId[3] + number;
    verticalId = changeId.join('');
    return '#' + verticalId;
  }

  // Function created to place carrier, will be refactored with other ships function to contain all ships
  // orientation takes vertical or horizontal.
  function setCarrier(orientation){
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
        battleships[0].coordinates.push(this.id, $(this).next().attr('id'), $(this).next().next().attr('id'), $(this).prev().attr('id'), $(this).prev().prev().attr('id'));

        displayMessage("Please place your Ships: ", true);
        $('.tile').off();
        listening();

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
        battleships[0].coordinates.push(this.id, $(setVerticalId(this, 1)).attr('id'), $(setVerticalId(this, 2)).attr('id'), $(setVerticalId(this, -1)).attr('id'), $(setVerticalId(this, -2)).attr('id'));


        displayMessage("Please place your Ships: ", true);
        $('.tile').off();
        listening();

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
        battleships[1].coordinates.push(this.id, $(this).next().attr('id'), $(this).next().next().attr('id'), $(this).prev().attr('id'));

        displayMessage("Please place your Ships: ", true);
        $('.tile').off();
        listening();

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
        battleships[1].coordinates.push(this.id, $(setVerticalId(this, 1)).attr('id'), $(setVerticalId(this, 2)).attr('id'), $(setVerticalId(this, -1)).attr('id'));

        displayMessage("Please place your Ships: ", true);
        $('.tile').off();
        listening();

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
        battleships[2].coordinates.push(this.id, $(this).next().attr('id'), $(this).next().next().attr('id'));

        displayMessage("Please place your Ships: ", true);
        $('.tile').off();
        listening();

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
        battleships[2].coordinates.push(this.id, $(setVerticalId(this, 1)).attr('id'), $(setVerticalId(this, 2)).attr('id'));

        displayMessage("Please place your Ships: ", true);
        $('.tile').off();
        listening();

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
        battleships[3].coordinates.push(this.id, $(this).next().attr('id'), $(this).next().next().attr('id'));

        displayMessage("Please place your Ships: ", true);
        $('.tile').off();
        listening();

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
        battleships[3].coordinates.push(this.id, $(setVerticalId(this, 1)).attr('id'), $(setVerticalId(this, 2)).attr('id'));

        displayMessage("Please place your Ships: ", true);
        $('.tile').off();
        listening();

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
        battleships[4].coordinates.push(this.id, $(this).next().attr('id'));

        displayMessage("Please place your Ships: ", true);
        $('.tile').off();
        listening();

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
        battleships[4].coordinates.push(this.id, $(setVerticalId(this, 1)).attr('id'));

        displayMessage("Please place your Ships: ", true);
        $('.tile').off();
        listening();

      });
    }
  }

  function isTouched(tileId){
    for(let i = 0; i < battleshipsP2.length; i++){
      for(let j = 0; j < battleshipsP2[i].coordinates.length; j++){
        if(tileId === battleshipsP2[i].coordinates[j]){
          let currentTile = "#"+tileId+".tile";
          $(currentTile).removeClass('shipSet').removeClass('hover').addClass('touched');

          battleshipsP2[i].coordinates.splice(j, 1);
          console.log(battleshipsP2[i].coordinates.length);
          if(battleshipsP2[i].coordinates.length === 0){
            battleshipsP2[i].alive = false;
          }

          return;
        }
        else {
          let currentTile = "#"+tileId+".tile";
          $(currentTile).addClass('missed');
          return;
        }
      }
    }
  }

  function numberToLetter(number){
    if(number === 1){
      return "A";
    }
    if(number === 2){
      return "B";
    }
    if(number === 3){
      return "C";
    }
    if(number === 4){
      return "D";
    }
    if(number === 5){
      return "E";
    }
    if(number === 6){
      return "F";
    }
    if(number === 7){
      return "G";
    }
    if(number === 8){
      return "H";
    }
    if(number === 9){
      return "I";
    }
    if(number === 10){
      return "J";
    }
  }

  function playTime(){
    displayMessage("AI / Player 2 is placing his/her ships.");

    // Min and Max are inclusive
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function aiSetup(callback){
      function setCarrierAI(){
        // 1 is horizontal, 2 is vertical
        let orientation = getRandomInt(1, 2);
        let carrierSet = false;

        while(!carrierSet){
          let row = getRandomInt(1, 10);
          let column = getRandomInt(1, 10);

          if(row >= 3 && row <= 8 && column >= 3 && column <= 8){

            if(orientation === 1){
              let column1 = numberToLetter(column);
              let column2 = numberToLetter(column + 1);
              let column3 = numberToLetter(column + 2);
              let column4 = numberToLetter(column - 1);
              let column5 = numberToLetter(column - 2);

              let originId = "p2" + column1 + row;
              let id1 = "p2" + column2 + row;
              let id2 = "p2" + column3 + row;
              let id3 = "p2" + column4 + row;
              let id4 = "p2" + column5 + row;

              battleshipsP2[0].setDown = true;
              battleshipsP2[0].coordinates.push(originId, id1, id2, id3, id4);
            }
            if(orientation === 2){
              let column1 = numberToLetter(column);

              let originId = "p2" + column1 + row;
              let id1 = "p2" + column1 + (row + 1);
              let id2 = "p2" + column1 + (row + 2);
              let id3 = "p2" + column1 + (row - 1);
              let id4 = "p2" + column1 + (row - 2);

              battleshipsP2[0].setDown = true;
              battleshipsP2[0].coordinates.push(originId, id1, id2, id3, id4);
            }

            carrierSet = true;
          }
        }
      }

      function setBattleshipAI(){
        // 1 is horizontal, 2 is vertical
        let orientation = getRandomInt(1, 2);
        let battleshipSet = false;

        while(!battleshipSet){
          let row = getRandomInt(1, 10);
          let column = getRandomInt(1, 10);

          if(row >= 2 && row <= 8 && column >= 2 && column <= 8){

            if(orientation === 1){
              let column1 = numberToLetter(column);
              let column2 = numberToLetter(column + 1);
              let column3 = numberToLetter(column + 2);
              let column4 = numberToLetter(column - 1);

              let originId = "p2" + column1 + row;
              let id1 = "p2" + column2 + row;
              let id2 = "p2" + column3 + row;
              let id3 = "p2" + column4 + row;

              battleshipsP2[1].setDown = true;
              battleshipsP2[1].coordinates.push(originId, id1, id2, id3);
            }
            if(orientation === 2){
              let column1 = numberToLetter(column);

              let originId = "p2" + column1 + row;
              let id1 = "p2" + column1 + (row + 1);
              let id2 = "p2" + column1 + (row + 2);
              let id3 = "p2" + column1 + (row - 1);

              battleshipsP2[1].coordinates.push(originId, id1, id2, id3);
            }
          }

          for(let i = 0; i < battleshipsP2[0].coordinates.length; i++){
            let restart = battleshipsP2[0].coordinates.find(function(element){
              return element === battleshipsP2[1].coordinates[i];
            });
            console.log("restart battleship: ",restart);
            if(restart){
              battleshipsP2[1].coordinates = [];
              setBattleshipAI();
              break;
            }
          }
            battleshipSet = true;
            battleshipsP2[1].setDown = true;
        }
      }


      function setCruiserAI(){
        console.log("AI Cruiser set begin");
        // 1 is horizontal, 2 is vertical
        let orientation = getRandomInt(1, 2);
        let cruiserSet = false;

        while(!cruiserSet){
          let row = getRandomInt(1, 10);
          let column = getRandomInt(1, 10);

          if(row >= 2 && row <= 9 && column >= 2 && column <= 9){

            if(orientation === 1){
              let column1 = numberToLetter(column);
              let column2 = numberToLetter(column + 1);
              let column4 = numberToLetter(column - 1);

              let originId = "p2" + column1 + row;
              let id1 = "p2" + column2 + row;
              let id3 = "p2" + column4 + row;

              battleshipsP2[2].setDown = true;
              battleshipsP2[2].coordinates.push(originId, id1, id3);
            }
            if(orientation === 2){
              let column1 = numberToLetter(column);

              let originId = "p2" + column1 + row;
              let id1 = "p2" + column1 + (row + 1);
              let id3 = "p2" + column1 + (row - 1);

              battleshipsP2[2].coordinates.push(originId, id1, id3);
            }
          }

          for(let i = 0; i < battleshipsP2[0].coordinates.length; i++){
            let restart = battleshipsP2[0].coordinates.find(function(element){
              return element === battleshipsP2[2].coordinates[i];
            });
            console.log("restart cruiser 1: ",restart);
            if(restart){
              battleshipsP2[2].coordinates = [];
              setCruiserAI();
              break;
            }
          }
          for(let i = 0; i < battleshipsP2[1].coordinates.length; i++){
            let restart = battleshipsP2[1].coordinates.find(function(element){
              return element === battleshipsP2[2].coordinates[i];
            });
            console.log("restart cruiser 2: ",restart);
            if(restart){
              battleshipsP2[2].coordinates = [];
              setCruiserAI();
              break;
            }
          }
          battleshipsP2[2].setDown = true;
          cruiserSet = true;
        }
      }




    function setSubAI(){
        // 1 is horizontal, 2 is vertical
        let orientation = getRandomInt(1, 2);
        let subSet = false;

        while(!subSet){
          let row = getRandomInt(1, 10);
          let column = getRandomInt(1, 10);

          if(row >= 2 && row <= 9 && column >= 2 && column <= 9){

            if(orientation === 1){
              let column1 = numberToLetter(column);
              let column2 = numberToLetter(column + 1);
              let column4 = numberToLetter(column - 1);

              let originId = "p2" + column1 + row;
              let id1 = "p2" + column2 + row;
              let id3 = "p2" + column4 + row;

              battleshipsP2[3].setDown = true;
              battleshipsP2[3].coordinates.push(originId, id1, id3);
            }
            if(orientation === 2){
              let column1 = numberToLetter(column);

              let originId = "p2" + column1 + row;
              let id1 = "p2" + column1 + (row + 1);
              let id3 = "p2" + column1 + (row - 1);

              battleshipsP2[3].coordinates.push(originId, id1, id3);
            }
          }

          for(let i = 0; i < battleshipsP2[0].coordinates.length; i++){
            let restart = battleshipsP2[0].coordinates.find(function(element){
              return element === battleshipsP2[3].coordinates[i];
            });
            console.log("restart sub 1: ",restart);
            if(restart){
              battleshipsP2[3].coordinates = [];
              setSubAI();
              break;
            }
          }
          for(let i = 0; i < battleshipsP2[1].coordinates.length; i++){
            let restart = battleshipsP2[1].coordinates.find(function(element){
              return element === battleshipsP2[3].coordinates[i];
            });
            console.log("restart sub 2: ",restart);
            if(restart){
              battleshipsP2[3].coordinates = [];
              setSubAI();
              break;
            }
          }
          for(let i = 0; i < battleshipsP2[2].coordinates.length; i++){
            let restart = battleshipsP2[2].coordinates.find(function(element){
              return element === battleshipsP2[3].coordinates[i];
            });
            console.log("restart sub 3: ",restart);
            if(restart){
              battleshipsP2[3].coordinates = [];
              setSubAI();
              break;
            }
          }
          battleshipsP2[3].setDown = true;
          subSet = true;
        }
      }



    function setDesAI(){
        // 1 is horizontal, 2 is vertical
        let orientation = getRandomInt(1, 2);
        let desSet = false;

        while(!desSet){
          let row = getRandomInt(1, 10);
          let column = getRandomInt(1, 10);

          if(row >= 1 && row <= 9 && column >= 1 && column <= 9){

            if(orientation === 1){
              let column1 = numberToLetter(column);
              let column2 = numberToLetter(column + 1);

              let originId = "p2" + column1 + row;
              let id1 = "p2" + column2 + row;

              battleshipsP2[4].setDown = true;
              battleshipsP2[4].coordinates.push(originId, id1);
            }
            if(orientation === 2){
              let column1 = numberToLetter(column);

              let originId = "p2" + column1 + row;
              let id1 = "p2" + column1 + (row + 1);

              battleshipsP2[4].coordinates.push(originId, id1);
            }
          }

          for(let i = 0; i < battleshipsP2[0].coordinates.length; i++){
            let restart = battleshipsP2[0].coordinates.find(function(element){
              return element === battleshipsP2[4].coordinates[i];
            });
            console.log("restart des 1: ",restart);
            if(restart){
              battleshipsP2[4].coordinates = [];
              setDesAI();
              break;
            }
          }
          for(let i = 0; i < battleshipsP2[1].coordinates.length; i++){
            let restart = battleshipsP2[1].coordinates.find(function(element){
              return element === battleshipsP2[4].coordinates[i];
            });
            console.log("restart des 2: ",restart);
            if(restart){
              battleshipsP2[4].coordinates = [];
              setDesAI();
              break;
            }
          }
          for(let i = 0; i < battleshipsP2[2].coordinates.length; i++){
            let restart = battleshipsP2[2].coordinates.find(function(element){
              return element === battleshipsP2[4].coordinates[i];
            });
            console.log("restart des 3: ",restart);
            if(restart){
              battleshipsP2[4].coordinates = [];
              setDesAI();
              break;
            }
          }
          for(let i = 0; i < battleshipsP2[3].coordinates.length; i++){
            let restart = battleshipsP2[3].coordinates.find(function(element){
              return element === battleshipsP2[4].coordinates[i];
            });
            console.log("restart des 4: ",restart);
            if(restart){
              battleshipsP2[4].coordinates = [];
              setDesAI();
              break;
            }
          }
          battleshipsP2[4].setDown = true;
          desSet = true;
        }
      }

      setCarrierAI();
      setBattleshipAI();
      setCruiserAI();
      setSubAI();
      setDesAI();

      callback();
    }

    aiSetup(function(){
      displayMessage("legoooo");
      $('.tile').on('click', function(){
        console.log(battleshipsP2);
        isTouched(this.id);
        if(battleshipsP2[0].alive === false &&
          battleshipsP2[1].alive === false &&
          battleshipsP2[2].alive === false &&
          battleshipsP2[3].alive === false &&
          battleshipsP2[4].alive === false){
          console.log('You win')
          displayMessage("YOU WIN !!!!!!!!!");
          return;
       }
      });
    });





  }


  // Need this function to create a dynamic ship set down, called everytime we need to listen to a new button click
  function listening(){

    if(battleships[0].setDown === true &&
      battleships[1].setDown === true &&
      battleships[2].setDown === true &&
      battleships[3].setDown === true &&
      battleships[4].setDown === true){

      console.log("Setup finished, ready to play !!!");
      playTime();
      // $('.tile').on('click', function(){
      //   console.log("I click on a tile.");
      //   console.log(this.id);
      // });

    }



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

  $('#welcome #onePlayerGame').click(function(){
    $('#welcome').slideUp();
    $('#container').removeClass('hidden').addClass('visible');
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

// look at data set
