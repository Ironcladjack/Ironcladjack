//===================//
//Global Variables
//===================//

// Misc
let multiplyVal = 1.15;

// Cookies
let clickCount = 0;

// Pre Generator values
let clickValBuild = 1;
let clickValUpgrade = 1;


let autoCountBuild = 0;
let autoCountUpgrade = 1;

// Final Generator values
let clickVal = 1;
let autoCount = 0;

// Trackers
let upgradeCount = 0;
let achievementMultiplier = 0;

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
      clickValBuild += this._effect;
      autoCountBuild += this._effect/10;
    }

  };

  class CPSBuildings extends Buildings {
    constructor(name,reference,buildCost,description,effect) {
      super(name,reference,buildCost,description,effect);
}

    doBuildingEffect() {
      autoCountBuild += this._effect;
    }

  };


//Adds 'Buildings' instances
const mouse = new CPCBuildings('Mouse Upgrade','mouse',15,'+1 click per click',1);
const grandma = new CPSBuildings('Grandma','grandma',100,'1cps per Grandma', 1);
const temple = new CPSBuildings('Temple','temple',2000,'10cps per Temple',10);
const generator = new CPSBuildings('Generator','generator',30000,'100cps per Generator',100);
const dimensionRift = new CPSBuildings('Dimension Rift','dimensionRift',400000,'1000cps per Dimension Rift',1000);
const galaxyDrain = new CPSBuildings('Galaxy Drain','galaxyDrain',5000000,'10000cps per Galaxy Drain',10000);

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
      "<div class='buildCost "+buildingList[i].buildCost+"'>"+buildingList[i].buildCost+"</div>"+
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
  constructor(name,reference,buyCost,description,criteria,type,effect) {
    this._purchased = 0;
    this._name = name;
    this._reference = reference;
    this._buyCost = buyCost;
    this._description = description;
    this._criteria = criteria;
    this._type = type;
    this._effect = effect;
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
    return this._description;
  }

  get criteria() {
    return this._criteria;
  }

  get type() {
    return this._type;
  }

  get effect() {
    return this._effect;
  };

  get purchased() {
    return this._purchased;
  }

  setPurchased() {
    this._purchased = 1;
  }

  doUpgradeEffect() {
    clickValUpgrade *= this._effect;
  }
};

class CPCUpgrades extends Upgrades {
  constructor(name,reference,buyCost,description,criteria,type,effect) {
    super(name,reference,buyCost,description,criteria,type,effect);
  }


};

// (name,reference,buyCost,description,criteria,effect)
const chocolateChip = new CPCUpgrades('Chocolate Chip','chocolateChip',10,'Gives 15% CPS boost!',true,'clickValUpgrade',1.15);
const raisin = new CPCUpgrades('Raisin','raisin',50,'Gives 15% CPS boost!',true,'autoCountUpgrade',1.15);
const whiteChoc = new CPCUpgrades('White Chocolate','whiteChoc',25,'Gives 20% CPS boost!',true,'autoCountUpgrade',1.15);
const blueberryMuffin = new CPCUpgrades('blueberryMuffin','blueberryMuffin',1000,'Gives 20% CPS boost!',true,'autoCountUpgrade',5);

let upgradeList = [
  chocolateChip,
  raisin,
  whiteChoc,
  blueberryMuffin,
];


for (var i = 0 ; i < upgradeList.length; i++) {
  let $newUpgradeBox = $("<div style='display:none'/>")   // creates a div element
  .addClass(`upgrade ${upgradeList[i].reference}`)   // add a class
  .html("<div>"+upgradeList[i].name+"</div>"+
  "<div>"+upgradeList[i].buyCost+"</div>"+
  "<div class='description' style='display:none;'>"+upgradeList[i].description+"</div>");

  $(".upgrades").append($newUpgradeBox);

  let tempCost = upgradeList[i].buyCost;
  let tempEffect = upgradeList[i].effect;


  $(`.${upgradeList[i].reference}`).mousedown(function() {
    if (clickCount >= tempCost) {
      $(this).hide(0);
      clickValUpgrade *= tempEffect;
      autoCountUpgrade *= tempEffect;
      upgradeCount++;
      clickCount -= tempCost;
      $(".upgradeCount").text(`Upgrades: ${upgradeCount}`);
  };
});
};

// Show Upgrades when 20% of cost, make blue when 100%;
setInterval(function(){
  for (var i = 0 ; i < upgradeList.length; i++) {
    if (clickCount >= upgradeList[i].buyCost) {
      $("."+upgradeList[i].reference).css("background","blue");
    } else if (clickCount >= upgradeList[i].buyCost * 0.2 && upgradeList[i].purchased == 0) {
      upgradeList[i].setPurchased();
      $("."+upgradeList[i].reference).fadeIn(1000);
    } else {
        $("."+upgradeList[i].reference).css("background","green");
  }
  }

  for (let j = 0; j < buildingList.length; j++) {
    if (clickCount >= Math.round(buildingList[j].buildCost * (multiplyVal ** buildingList[j].buildNumber ))) {
      $("."+buildingList[j].buildCost).css("background","green");
    } else {
      $("."+buildingList[j].buildCost).css("background","red");
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

  clickVal = Math.round((clickValUpgrade * clickValBuild)*100)/100;
  autoCount = Math.round((autoCountBuild * autoCountUpgrade)*100)/100;

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
  clickCount = Math.round((clickCount + clickVal)*100)/100;
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
