
//===================//
//Global Variables
//===================//

// Misc
let multiplyVal = 1.15;

// Cookies
let clickCount = 0;

// Generators
let clickVal = 1;
let autoCount = 0;

//===================//
//Building Generator
//===================//

class Buildings {
    constructor(name,reference,buildCost,description,effect) {
      this._buildNumber = 0;
      this._name = name;
      this._reference = reference;
      this._description = description;
      this._effect = effect;
      this._buildCost = buildCost;
    }

    get name() {
      return this._name;
    }

    get buildNumber() {
      return this._buildNumber;
    }

    get reference() {
      return this._reference;
    }

    get description() {
      return this._description;
    }

    get buildCost() {
      return this._buildCost;
    }

    get effect() {
      return this._effect;
    }

    incrementBuildNumber() {
      this._buildNumber++;
    }

    decrementBuildNumber() {
      this._buildNumber--;
    }


  };

  class CPCBuildings extends Buildings {
    constructor(name,reference,buildCost,description,effect) {
      super(name,reference,buildCost,description,effect);
    }

    doBuildingEffect() {
      clickVal += this._effect;
    }

  };

  class CPSBuildings extends Buildings {
    constructor(name,reference,buildCost,description,effect) {
      super(name,reference,buildCost,description,effect);
}

    doBuildingEffect() {
      autoCount += this._effect;
    }

  };


//Adds 'Buildings' instances
const mouse = new CPCBuildings('Mouse Upgrade','mouse',10,'+1 click per click',1);
const grandma = new CPSBuildings('Grandma','grandma',10,'0.1cps per Grandma', 0.1);
const temple = new CPCBuildings('Temple','temple',100,'1cps per Temple',1);
const generator = new CPSBuildings('Generator','generator',1000,'10cps per Generator',10);
const dimensionRift = new CPSBuildings('Dimension Rift','dimensionRift',10000,'100cps per Dimension Rift',100);
const galaxyDrain = new CPSBuildings('Galaxy Drain','galaxyDrain',100000,'1000cps per Galaxy Drain',1000);

//List of all 'Buildings'
let buildingList = [
  mouse,
  grandma,
  temple,
  generator,
  dimensionRift,
  galaxyDrain
];

// Cycle through 'buildingList', generate buildings based on 'Buildings'
for (let i = 0 ; i < buildingList.length; i++) {

  let $newBuildingBox = $("<div/>")   // creates a div element
      // add a class
    .addClass(`building ${buildingList[i].reference}`)
      //add html
    .html(
    "<div id="+buildingList[i].reference+" class='buildCount'>"+
      "<p>"+buildingList[i].buildNumber+"</p>"+
    "</div>"+
    "<div class='buildingContainer'>"+
      "<div class='buildingName'>"+buildingList[i].name+"</div>"+
      "<div class='buildCost'>"+buildingList[i].buildCost+"</div>"+
    "</div>"+
    "<div class='description' style='display:none;'>"+buildingList[i].description+"</div>");
      // add this element into the '.buildings' div
    $(".buildings").append($newBuildingBox);

    // add onClick effects to this new element
  $("."+buildingList[i].reference).click(function() {
    if (clickCount >= Math.round(buildingList[i].buildCost * (multiplyVal ** buildingList[i].buildNumber ))) {
      clickCount -= Math.round(buildingList[i].buildCost * (multiplyVal ** buildingList[i].buildNumber ));
      buildingList[i].incrementBuildNumber();
      $(this).find(".buildCount").html("<p>"+buildingList[i].buildNumber+"</p>");
      $(this).find(".buildCost").text(Math.round(buildingList[i].buildCost * (multiplyVal ** buildingList[i].buildNumber )));
      buildingList[i].doBuildingEffect();
      };
  })

};


//===================//
//Upgrade Generator
//===================//

class Upgrades {
  constructor(name,reference,buyCost,description,criteria,effect) {
    this._name = name;
    this._reference = reference;
    this._buyCost = buyCost;
    this._description = description;
    this._criteria = criteria;
    this._effect = effect;
    this._purchased = "not_purchased";
  }

  get name() {
    return this._name;
  }

  get reference() {
    return this._reference;
  }

  get buyCost() {
    return this._buyCost;
  }

  get description() {
    return this._description
  }

  get criteria() {
    return this._criteria;
  }

  get effect() {
    return this._effect;
  };

  get purchased() {
    return this._purchased;
  }

  setPurchased() {
    this._purchased = "purchased";
  }

};

// (name,reference,buyCost,description,criteria,effect)
const chocolateChip = new Upgrades('Chocolate Chip','chocolateChip',10,'Gives 15% CPS boost!',true,1.15);
const raisin = new Upgrades('Raisin','raisin',50,'Gives 15% CPS boost!',true,1.15);
const whiteChoc = new Upgrades('White Chocolate','whiteChoc',25,'Gives 20% CPS boost!',true,1.15);

let upgradeList = [
  chocolateChip,
  raisin,
  whiteChoc
];



for (var i = 0 ; i < upgradeList.length; i++) {
  let $newUpgradeBox = $("<div style='display:none'/>")   // creates a div element
  .addClass(`upgrade ${upgradeList[i].reference}`)   // add a class
  .html("<div>"+upgradeList[i].name+"</div>"+
  "<div>"+upgradeList[i].buyCost+"</div>"+
  "<div class='description' style='display:none;'>"+upgradeList[i].description+"</div>");

  $(".upgrades").append($newUpgradeBox);


  $("."+upgradeList[i].reference).click(function() {
    $(this).hide();
    upgradeList[i].setPurchased();
    if (clickCount >= 10) {
    }
  });
};

// Show Upgrades when 20% of cost
setInterval(function(){
  for (var i = 0 ; i < upgradeList.length; i++) {
    if (clickCount >= upgradeList[i].buyCost * 0.2 && upgradeList[i].purchased == "not_purchased") {
      $("."+upgradeList[i].reference).fadeIn(1000);
    }
  }
}, 1000)

$(".upgrade, .building").hover(function() {
  $(this).find(".description").show();
}, function() {
  $(this).find(".description").hide();
})


//===================//
//Misc Functions
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
    $(building).css("background","purple");
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
let timer = 0;
let unlocked = "no";

setInterval(function(){
  clickCount = Math.round((clickCount + autoCount/10)*100)/100;
  $(".display h1").text(clickCount);
  $(".CPS").text(`Clicks per Second: ${autoCount}`);
  $(".CPC").text(`Clicks per Click: ${clickVal}`);
  timer += 0.1;
  timer = Math.round(timer*10)/10;
  $(".timer").text(`Time: ${timer}`);
  if (clickCount >= 1000 && unlocked == "no") {
    let $newAchivementBox = $("<div/>").addClass("achievement").html("I Did It!!");
    $("body").append($newAchivementBox);
    $newAchivementBox.delay(1000).fadeOut(2000);
    unlocked = "yes";
  }

}, 100);

// Cookier Clicker
$('.display').mousedown(function() {
  mouseClick(".display");
  clickCount += clickVal;
  $(".display h1").text(clickCount);

});


mouseOver(".display");
mouseOver(".auto");
mouseOver(".mouse");
mouseOver(".grandma");
mouseOver(".upgrade");
mouseClick(".upgrade");
mouseOver(".building");



//==============//
//Misc Functions//
//==============//

//adds s
$(".s").click(function() {
  clickCount += 10000000;
  $(this).hide(1000);
});

//adds d
$(".d").click(function() {
  clickCount += 100000000000000000000;
});
