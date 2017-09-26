// Cookie setter and getter

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
  document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}

function cookieExists(cookie, base) {
    if (getCookie(cookie) > base) {
      let cookie = getCookie(cookie);
    } else {
      let cookie = base;
    }

}

if (getCookie("cookieWarning") != 0) {
  let cookieWarning = 1;
} else {
  let cookieWarning = 0;
}

let $cookieWarning = $("<div/>")
.addClass("cookieWarning")
.html("<div><p>This page uses cookies to improve your experience. To acknowledge, click this button -> "+"  "+"  </p><button> Ok!</button></div>")

if (getCookie("cookieWarning") == 0 ) {
  $("body").append($cookieWarning);
}

$(".cookieWarning button").click(function() {
  $(".cookieWarning").fadeOut(500)
  setCookie("cookieWarning", 1, 5);
});
//===================//
//Global Variables
//===================//

// Misc
let multiplyVal = 1.15;

// Cookies
if (getCookie("clickCount") > 0) {
  clickCount = getCookie("clickCount");
} else {
  clickCount = 0;
}


// Pre Generator values

let clickValBuild = 1
let clickValUpgrade = 1;


let autoCountUpgrade = 1;
let autoCountBuild = 0;
// Final Generator values
let clickVal = 1;
let autoCount = 0;

// Trackers
/*
if (getCookie("upgradeCount") > 0) {
  let upgradeCount = getCookie("upgradeCount");
  $(".upgradeCount").text(`Number of Upgrades: ${upgradeCount}`);
} else {
  */
  let upgradeCount = 0;
  /*
}
*/


let timer = 0;

let clickCountDisplay = 0;
let achievementMultiplier = 100;
let numberClicks = 0;
let numberAchievements = 0;

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

    setBuildingCookie() {
      setCookie(this._reference,this._buildNumber, 5);
    }

    getBuildingCookie() {
      if (getCookie(this._reference) != 0) {
        this._buildNumber = getCookie(this._reference);
      } else {
        this._buildNumber = 0;
      }
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
let mouse = new CPCBuildings('Mouse Upgrade','mouse',15,'+1 click per click',1);
let grandma = new CPSBuildings('Grandma','grandma',100,'1cps per Grandma', 1);
let temple = new CPSBuildings('Temple','temple',2000,'10cps per Temple',10);
let generator = new CPSBuildings('Generator','generator',40000,'100cps per Generator',100);
let dimensionRift = new CPSBuildings('Dimension Rift','dimensionRift',800000,'1000cps per Dimension Rift',1000);
let galaxyDrain = new CPSBuildings('Galaxy Drain','galaxyDrain',16000000,'10000cps per Galaxy Drain',10000);
let kittenKrusher = new CPSBuildings('Kitten Krusher','kittenKrusher',320000000,'100000cps per Kitten Krusher',100000);
let puppyPunisher = new CPSBuildings('Puppy Punisher','puppyPunisher',6400000000,'100000cps per Puppy Punisher',1000000);
let duckDestroyer = new CPSBuildings('Duck Destroyer','duckDestroyer',12800000000,'1000000cps per Duck Destroyer',1000000);

//List of all 'Buildings'
let buildingList = [
  mouse,
  grandma,
  temple,
  generator,
  dimensionRift,
  galaxyDrain,
  kittenKrusher,
  puppyPunisher,
  duckDestroyer
];

let purchaseAmount = 1;

$(".x1").click(function() {
  purchaseAmount = 1;
  $(".x100, .x10, x1").removeClass("purchaseAmountActive");
  $(this).addClass("purchaseAmountActive");
});

$(".x10").click(function() {
  purchaseAmount = 10;
  $(".x100, .x10, .x1").removeClass("purchaseAmountActive");
  $(this).addClass("purchaseAmountActive");
});

$(".x100").click(function() {
  purchaseAmount = 100;
  $(".x100, .x10, .x1").removeClass("purchaseAmountActive");
  $(this).addClass("purchaseAmountActive");
});

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
    for (let j = 0; j < purchaseAmount; j++) {
      if (clickCount >= Math.round(buildingList[i].buildCost * (multiplyVal ** buildingList[i].buildNumber ))) {
        clickCount -= Math.round(buildingList[i].buildCost * (multiplyVal ** buildingList[i].buildNumber ));
        buildingList[i].incrementBuildNumber();
        $(this).find(".buildCount").html("<p>"+buildingList[i].buildNumber+"</p>");
        $(this).find(".buildCost").text(Math.round(buildingList[i].buildCost * (multiplyVal ** buildingList[i].buildNumber )));
        buildingList[i].doBuildingEffect();
        };
      }
    });

};

$(document).ready(function() {
  for (let i = 0 ; i < buildingList.length; i++) {
  buildingList[i].getBuildingCookie();
  $("."+buildingList[i].reference).find(".buildCount").html("<p>"+buildingList[i].buildNumber+"</p>");
  $("."+buildingList[i].reference).find(".buildCost").text(Math.round(buildingList[i].buildCost * (multiplyVal ** buildingList[i].buildNumber )));
  for (let j = 0; j < buildingList[i].buildNumber; j++) {
    buildingList[i].doBuildingEffect();
  }
}
});



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
    this._purchased++;
  }

  doUpgradeEffect() {
    clickValUpgrade *= this._effect;
  }

  setUpgradeCookie() {
    setCookie(this._reference,this._purchased, 5);
  }

  getUpgradeCookie() {
    if (getCookie(this._reference) == 1) {
      this._purchased = getCookie(this._reference);
      upgradeCount++;
    } else {
      this._purchased = 0;
    }
  }
};

class CPCUpgrades extends Upgrades {
  constructor(name,reference,buyCost,description,criteria,type,effect) {
    super(name,reference,buyCost,description,criteria,type,effect);
  }


};

// (name,reference,buyCost,description,criteria,effect)
let chocolateChip = new CPCUpgrades('Chocolate Chip','chocolateChip',10,'Gives 15% CPS boost!',true,'clickValUpgrade',1.15);
let whiteChoc = new CPCUpgrades('White Chocolate','whiteChoc',25,'Gives 20% CPS boost!',true,'autoCountUpgrade',1.15);
let raisin = new CPCUpgrades('Raisin','raisin',50,'Gives 15% CPS boost!',true,'autoCountUpgrade',1.15);
let darkChoc = new CPCUpgrades('Dark Chocolate','darkChoc',50,'Gives 15% CPS boost!',true,'autoCountUpgrade',1.15);
let brownie = new CPCUpgrades('Brownie','brownie',200,'Gives 15% CPS boost!',true,'autoCountUpgrade',1.15);
let blueberryMuffin = new CPCUpgrades('Blueberry Muffin','blueberryMuffin',1000,'Gives 500% CPS boost!',true,'autoCountUpgrade',5);
let raspberryMuffin = new CPCUpgrades('Raspberry Muffin','raspberryMuffin',5000,'Gives 500% CPS boost!',true,'autoCountUpgrade',5);
let bananaMuffin = new CPCUpgrades('Banana Muffin','bananaMuffin',20000,'Gives 500% CPS boost!',true,'autoCountUpgrade',5);
let pumpkinMuffin = new CPCUpgrades('Pumpkin Muffin','pumpkinMuffin',1000000,'Gives 500% CPS boost!',true,'autoCountUpgrade',5);


let upgradeList = [
  chocolateChip,
  whiteChoc,
  raisin,
  darkChoc,
  brownie,
  blueberryMuffin,
  raspberryMuffin,
  bananaMuffin,
  pumpkinMuffin,
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
      $(".upgradeCount").text(`Number of Upgrades: ${upgradeCount}`);
      setCookie(upgradeList[i].reference,upgradeList[i].locked, 5);
  };
});

};





let buildNumberUpgrades = new Array (
  10,
  25,
  50,
);





// Show Upgrades when 20% of cost, make blue when 100%;
setInterval(function(){
  for (var i = 0 ; i < upgradeList.length; i++) {
    if (clickCount >= upgradeList[i].buyCost * 0.2 && upgradeList[i].purchased == 0) {
      $("."+upgradeList[i].reference).fadeIn(1000);

    } else if (clickCount < upgradeList[i].buyCost) {
        $("."+upgradeList[i].reference).css("background","green");
  }
  if (clickCount >= upgradeList[i].buyCost) {
    $("."+upgradeList[i].reference).css("background","blue");
  }
}

  for (let j = 0; j < buildingList.length; j++) {
    if (clickCount >= Math.round(buildingList[j].buildCost * (multiplyVal ** buildingList[j].buildNumber ))) {
      $("."+buildingList[j].buildCost).css("background","green");
    } else {
      $("."+buildingList[j].buildCost).css("background","red");
    }

    for (let k = 0; k < buildNumberUpgrades.length; k++) {
      if (buildingList[j].buildNumber > buildNumberUpgrades[k] ) {
        $(".upgrades").append("");
      }
    }
  }
}, 1000)

$(".upgrade, .building").hover(function() {
  $(this).find(".description").show();
}, function() {
  $(this).find(".description").hide();
})

$(".buyAll").click(function() {
  for (let i = 0; i < upgradeList.length; i++) {
    let tempCost = upgradeList[i].buyCost;
    let tempEffect = upgradeList[i].effect;
    if (clickCount >= tempCost && upgradeList[i].purchased == 1) {
      $(`.${upgradeList[i].reference}`).hide(0);
      clickValUpgrade *= tempEffect;
      autoCountUpgrade *= tempEffect;
      upgradeCount++;
      clickCount -= tempCost;
      upgradeList[i].setPurchased();
      $(".upgradeCount").text(`Number of Upgrades: ${upgradeCount}`);
      setCookie(upgradeList[i].reference,upgradeList[i].locked, 5);
    }
  }
})


class Achievements {
  constructor(name,reference,description,criteria,type,reward) {
    this._unlocked = 0;
    this._name = name;
    this._reference = reference;
    this._description = description;
    this._criteria = criteria;
    this._type = type;
    this._reward = reward;
  }

  get unlocked() {
    return this._unlocked;
  }

  get name() {
    return this._name;
  }

  get reference() {
    return this._reference;
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

  get reward() {
    return this._reward;
  }

  lock() {
    this._unlocked = 1;
  }


  setAchievementCookie() {
    setCookie(this._reference, this._unlocked, 5);
  }

  getAchievementCookie() {
    if (getCookie(this._reference) == 1) {
      this._unlocked = getCookie(this._reference);
      achievementMultiplier += this._reward;
      numberAchievements++;
    } else {
      this._unlocked = 0;
    }
  }


};
//                            (name,reference,description,criteria,type,reward)
const oneOne = new Achievements('One One!','oneOne','You earned 1 Click!',1,"clickCount",1);
const oneTen = new Achievements('Ten!','oneTen','You earned 10 Clicks!',10,"clickCount",1);
const oneHundred = new Achievements('One Hundred!','oneHundred','You earned 100 Clicks!',100,"clickCount",2);
const oneThousand = new Achievements('One Thousand!','oneThousand','You earned 1000 Clicks!',1000,"clickCount",2);

const upgradeOne = new Achievements('One upgrade!','upgradeOne','You bought 1 Upgrade!',1,"upgradeCount",1);
const upgradeThree = new Achievements('Three upgrades!','upgradeThree','You bought 3 Upgrades!',3,"upgradeCount",2);
const upgradeSix = new Achievements('Six upgrades!','upgradeSix','You bought 6 Upgrades!',6,"upgradeCount",3);

let achievementList = new Array(
  oneOne,
  oneTen,
  oneHundred,
  oneThousand,
  upgradeOne,
  upgradeThree,
  upgradeSix,

);


let buildAchievementUnlocks = new Array(
  1,
  10,
  25,
  50,
  75,
  100,
  150,
  200
);

for (let k = 0; k < buildAchievementUnlocks.length; k++) {

(function(context) {
    for ( let i = 0; i < buildingList.length; i++) {
       let key = `${buildingList[i].reference}${buildAchievementUnlocks[k]}`;
       key = new Achievements(`${buildAchievementUnlocks[k]} ${buildingList[i].name}!`,`${buildingList[i].reference}${buildAchievementUnlocks[k]}`,`You bought ${buildAchievementUnlocks[k]} ${buildingList[i].name}!`,buildAchievementUnlocks[k],"buildNumber",(k+1));
       achievementList.push(key);
       $(".display").append(this[key]);
     }
}(window));

};


setInterval(function(){
  for (let i = 0; i < achievementList.length; i++) {

    let filler = $("<div/>").addClass(achievementList[i].reference).html("<div style='width: 60px; height: 60px; background: rgba(255,255,255,1); margin: 5px; color: black; display: flex; border: solid 2px grey;'>"+achievementList[i].name+"</div>");

  if (clickCount >= achievementList[i].criteria && achievementList[i].unlocked == 0 && achievementList[i].type == "clickCount") {
    let $newAchievementBox = $("<div/>").addClass("achievement").html("<div style='background: grey; width: 100%;'>"+achievementList[i].name+"</div><div style='width: 100%;'>"+achievementList[i].description+"</div>");
    $("body").append($newAchievementBox);
    $newAchievementBox.delay(1000).fadeOut(2000);
    achievementList[i].lock();
    numberAchievements++;
    achievementMultiplier += achievementList[i].reward;
    achievementList[i].setAchievementCookie();
    $(".achievements").append(filler);

  }

  if (upgradeCount >= achievementList[i].criteria && achievementList[i].unlocked == 0 && achievementList[i].type == "upgradeCount") {
    let $newAchievementBox = $("<div/>").addClass("achievement").html("<div style='background: grey; width: 100%;'>"+achievementList[i].name+"</div><div style='width: 100%;'>"+achievementList[i].description+"</div>");
    $("body").append($newAchievementBox);
    $(".achievements").append(filler);
    $newAchievementBox.delay(1000).fadeOut(2000);
    achievementList[i].lock();
    numberAchievements++;
    achievementMultiplier += achievementList[i].reward;
    achievementList[i].setAchievementCookie();

  }

for ( var j = 0; j < buildingList.length; j++) {
if (`${buildingList[j].reference}${achievementList[i].criteria}` === achievementList[i].reference && buildingList[j].buildNumber >= achievementList[i].criteria && achievementList[i].unlocked == 0 && achievementList[i].type == "buildNumber") {
    let $newAchievementBox = $("<div/>").addClass("achievement").html("<div style='background: grey; width: 100%;'>"+achievementList[i].name+"</div><div style='width: 100%;'>"+achievementList[i].description+"</div>");
    $("body").append($newAchievementBox);
    $newAchievementBox.delay(1000).fadeOut(2000);
    achievementList[i].lock();
    numberAchievements++;
    achievementMultiplier += achievementList[i].reward;
    achievementList[i].setAchievementCookie();
    $(".achievements").append(filler);
    }
  }
}

}, 3000);



for (let i = 0; i < achievementList.length; i++) {
  achievementList[i].getAchievementCookie();
  let filler = $("<div/>").addClass(achievementList[i].reference).html("<div style='width: 60px; height: 60px; background: rgba(255,255,255,1); margin: 5px; color: black; display: flex; border: solid 2px grey;'>"+achievementList[i].name+"</div>");
  if (achievementList[i].unlocked == 1) {
    $(".achievements").append(filler);
  }
}

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

setInterval(function(){
  clickCount = Math.round((clickCount + autoCount/10)*100)/100;
  clickCountDisplay = Math.floor(clickCount*10)/10;
  $(".display h1").text(clickCountDisplay);
  $(".CPS").text(`Clicks per Second: ${autoCount}`);
  $(".CPC").text(`Clicks per Click: ${clickVal}`);
  $(".numberAchievements").text(`Number of Achievements: ${numberAchievements}`);
  $(".achievementMultiplier").text(`Achievement Multiplier: ${achievementMultiplier}%`);
  $(".numberClicks").text(`Number of Clicks: ${numberClicks}`);
  timer += 0.1;
  timer = Math.round(timer*10)/10;
  $(".timer").text(`Time: ${timer}`);

  clickVal = Math.round((clickValBuild * clickValUpgrade * achievementMultiplier/100)*100)/100;
  autoCount = Math.round((autoCountBuild * autoCountUpgrade * achievementMultiplier/100)*100)/100;

}, 100);

// Cookier Clicker
$('.display').mousedown(function() {
  mouseClick(".display");
  clickCount = Math.round((clickCount + clickVal)*100)/100;
  clickCountDisplay = Math.floor(clickCount*10)/10;
  $(".display h1").text(clickCountDisplay);
  numberClicks++;

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
  clickCount += 1;
  $(this).hide(1000);
});

//adds d
$(".d").click(function() {
  clickCount += 1000;
});



//==============//
//Cookie Control//
//==============//

setInterval(function(){
  let $saveMessage =  $("<div/>").addClass("saved").html("<div style='font-size: 20px; font-weight: 900;'>Saved!</div>");
  $(".cookieClear").after($saveMessage);
  $saveMessage.delay(1000).fadeOut(2000);
  setCookie("clickCount", clickCount, 5);
  setCookie("autoCountBuild", clickCount, 5);
  setCookie("clickValBuild", clickValBuild, 5);
  setCookie("upgradeCount", upgradeCount, 5);
  setCookie("timer", timer, 5);
for (let i = 0; i < buildingList.length; i++) {
  buildingList[i].setBuildingCookie();
}
}, 10000);


$(".cookieClear").click(function() {
  for (let i = 0; i < buildingList.length; i++) {
    deleteCookie(buildingList[i].reference);
  };
  for (let i = 0; i < achievementList.length; i++) {
    deleteCookie(achievementList[i].reference);
  };
  deleteCookie("clickCount");
  deleteCookie("upgradeCount");
  deleteCookie("timer");
  deleteCookie("cookieWarning");
});
