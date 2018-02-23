let resource = 0;
let resourceSpent = 0;
let resourcePerSecond = 1;
let resourcePerClick = 1;

$('.clickContainer').click(function() {
  $('.resource').text(`Resource: ${resource}`);
  resource += resourcePerClick;
})

setInterval(function() {
  $('.resource').text(`Resource: ${resource}`);
  $('.resourceSpent').text(`Resource Spent: ${resourceSpent}`);
  $('.resourcePerSecond').text(`RPS: ${resourcePerSecond}`);
  $('.resourcePerClick').text(`RPC: ${resourcePerClick}`);
  resource += resourcePerSecond;
},1000);

$('.resourceSpend').click(function() {
  if (resource >= 10) {
    resource -= 10;
    resourceSpent += 10;
    $('.resourceSpent').text(`Resource Spent: ${resourceSpent}`);

  }
})

class StoreButton {
    constructor(name, reference, cost) {
      this._buyAmount = 0;
      this._name = name;
      this._reference = reference;
      this._cost = cost;
    }

    get name() {return this._name;}
    get reference() {return this._reference;}
    get cost() {return this._cost;}

    multiplyCost() {
      this._cost = Math.round(this._cost *= 1.15);
    }

    incrementBuyAmount() {
      this._buyAmount++;
    }
  };

class StoreButtonRPS extends storeButton {
  purchaseEffect() {
    resourcePerSecond++;
  }
}

class StoreButtonRPC extends storeButton {
  purchaseEffect() {
    resourcePerClick++;
  }
}

let resourceClick = new StoreButtonRPC('Resource Click','resourceClick',50 );
let resourceSpeed = new StoreButtonRPS('Resource Speed','resourceSpeed',100);

let storeButtonList = [
  resourceClick,
  resourceSpeed,
];

//Store Button Creation

for (let i = 0; i < storeButtonList.length; i++) {
  //creates Store Buttons
  let $storeButton = $("<div/>")   // creates a div element
        // add a class
      .addClass(storeButtonList[i].reference)
        //add html
      .html(`<button>${storeButtonList[i].name}: ${storeButtonList[i].cost}r</button>`);
        // add this element into the '.buildings' div
  //Add Buttons to DOM
  $(".store").append($storeButton);

  //Add click effect to Button
  $storeButton.click(function() {
    if (storeButtonList[i].cost <= resource) {
    storeButtonList[i].purchaseEffect();
    resource -= storeButtonList[i].cost;
    storeButtonList[i].multiplyCost();
    storeButtonList[i].incrementBuyAmount();
    $(`.${storeButtonList[i].reference}`).html(`<button>${storeButtonList[i].name}: ${storeButtonList[i].cost}r</button>`);
  }
  });

};
