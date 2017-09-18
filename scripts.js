

$(document).ready(function() {

// Cookies
let clickCount = 0;

// Generators
let clickVal = 1;
let autoCount = 0;

// Misc
let multiplyVal = 1.15;

//Building Costs
let mouseCost = 10;
let autoCost = 10;
let grandmaCost = 100;

//===================//

let increaseCPS = (cps) => {
  autoCount = Math.floor((autoCount + cps)*10)/10;
};

let multiplyCost = (cost) => {
  cost *= multiplyVal;
  cost = Math.floor(cost);
};

let clickCountUpdate = (buildingCost) => {
  clickCount = Math.round(clickCount - buildingCost);
};

let autoUpdate = function(building, buildingCost) {
  if (clickCount < buildingCost) {
    $(building).css("background","red");
  } else if (clickCount >= buildingCost) {
    $(building).css("background","green");
  };
};

let mouseOver = function(building) {
  $(building).mouseenter(function() {
    $(this).css("border","solid 3px lightblue");
  });
  $(building).mouseleave(function() {
    $(this).css("border","0px");
  });
};
mouseOver(".display");
mouseOver(".auto");
mouseOver(".mouse");
mouseOver(".grandma")



let mouseClick = function(building) {
  $(building).mousedown(function() {
    $(this).css("transform","translateY(5%)");
    $(this).css("transform","scale(1.03,1.03)");
  });
  $(building).mouseup(function() {
    $(this).css("transform","translateY(5%)");
    $(this).css("transform","scale(1,1)");
  });
};



//code goes here that will be run every .1 seconds.
setInterval(function(){
  clickCount = Math.round((clickCount + autoCount/10)*100)/100;
  $(".display").text(clickCount);
  $(".CPS").text(`Clicks per Second: ${autoCount}`);
  $(".CPC").text(`Clicks per Click: ${clickVal}`);
  autoUpdate(".mouse", mouseCost);
  autoUpdate(".auto", autoCost);
  autoUpdate(".grandma", grandmaCost);
}, 100);

// Cookier Clicker
$('.display').mousedown(function() {
  mouseClick(".display");
  clickCount += clickVal;
  $(".display").text(clickCount);
  $(".mouse").text("Cost: " + mouseCost);

});

// Mouseclicker
$(document).ready(function() {
  $(".mouse").mousedown(function() {
      if (clickCount >= mouseCost) {
        clickCountUpdate(mouseCost);
        mouseCost = Math.floor(mouseCost * multiplyVal);
        $(".display").text(clickCount);
        $(".mouse").text("Cost: " + mouseCost);
        clickVal++;
      };
    });
  });



// Autoclicker
  $(document).ready(function() {
    $(".auto").mousedown(function() {
        if (clickCount >= autoCost) {
          clickCountUpdate(autoCost);
          autoCost = Math.floor(autoCost * multiplyVal);
          $(".display").text(clickCount);
          $(".auto").text("Cost: " + autoCost);
          increaseCPS(.1);
        };
      });
    });

// Grandmaclicker
  $(document).ready(function() {
    $(".grandma").mousedown(function() {
        if (clickCount >= grandmaCost) {
          clickCountUpdate(grandmaCost);
          grandmaCost = Math.floor(grandmaCost * multiplyVal);
          $(".display").text(clickCount);
          $(".grandma").text("Cost: " + grandmaCost);
          increaseCPS(1);
        };
      });
    });

$(".upgrade1").click(function() {
  $(this).hide();
  autoCount *= 2;
})

$(document).ready(function() {
  $('.test').mousedown(function() {
    $(this).css("background","red");
  });
  $('.test').mouseup(function() {
    $(this).css("background","blue");
  })
})

});
