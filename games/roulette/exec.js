// Play with these values. 39, 100, 5 in respective order works. 
// Make sure the wanted value arrives in the middle of the indicator.
const amountOfLoadedItems = 39;
const itemWidth = 100;
const maxItemsToDisplay = 5;

const rollTime = 7; // seconds
const rollLeftMargin = -itemWidth * (amountOfLoadedItems - maxItemsToDisplay); // -3400;
const randomnessFactor = getRandomInt(rollLeftMargin + itemWidth/2, rollLeftMargin - itemWidth*0.5);

let itemGot = null;

let retryBtn = document.getElementById("retryBtn");

const arrayOfCases = [
    new Case(
        1000,
        "Red Phoenix", 
        10, 
        [
            new Item("Red Bronze", 50000, Rarity.Common), 
            new Item("Red Silver", 30000, Rarity.Uncommon),
            new Item("Red Golden", 16000, Rarity.Rare), 
            new Item("Red Diamond", 3, Rarity.Epic),
            new Item("Red Ruby", 1, Rarity.Legendary)
        ]
    )
];

function startRoulette() {

    document.getElementById("main").innerHTML = "";
    document.getElementById("main").innerHTML = '<div id="case_spin" class="case_spin">'+
        '<div class="pointer"></div>' +
            '<div id="case_spin_item_wrapper" class="case_spin_item_wrapper" class="transitioning"></div>'+
        '</div>'+
        '<div id="result" class="result">'+
        '</div>';

    let roulette = document.getElementById('case_spin_item_wrapper');

    let arr = getRandomItems(arrayOfCases[0].getItems, amountOfLoadedItems);
    itemGot = arr[36];
    console.log(arr);

    let temp = 0;
    arr.forEach(element => {
        temp++;
        let idName = "case_item"+temp;
        document.getElementById('case_spin_item_wrapper').innerHTML += '<div id="'+idName+'" style="width: ' + itemWidth+'px; display: inline-block; text-align:center; color:white;">'+element.name+'</div>';
        document.getElementById(idName).style.backgroundColor = element.getRarity.color;
    });
    console.log("test");

    roulette.style.transition = 'margin-left ' + rollTime + 's ease-out';

    //roulette.classList.add("transitioning");
    //roulette.classList.add("margin-offset"); //.style.marginLeft = rollLeftMargin + "px"; // rollLeftMargin + "px"; // randomnessFactor + "px";
    //roulette.style.marginLeft = "-3400px"; 

    /**
     * @plamoni#6321
     * What’s happening here is the result of how web browsers work. There’s something called a “repaint.” 
     * This is when the browser draws a new version of the page. 
     *
     * JavaScript, as you might know, gets executed in as a series of “macrotasks.” 
     * All the code that’s set to run at a given time is executed with a macrotask.
     *
     * Repaints typically don’t happen during macrotasks. 
     * That’s why, for example, if you do a lot of work inside the onclick handler of a button, 
     *      the button gets stuck while that work finishes — there’s no time for a repaint to draw the new button state.
     *
     * Given all three lines of your code execute in the same macrotask, it will not apply the new styles until after the margin is set to -3400px. It’s like the act of setting it to 0px never happened.
     *
     * The easiest and most common and most appropriate way to allow a repaint is to defer execution of your code to the next macrotask. 
     * This is typically done using setTimeout, as you discovered. 
     * However, you don’t need to wait 100ms if you don’t want. It’s not a race condition. Any deferral will work. 
     * So it’s common to have the setTimeout duration be 0. 
     * That’s a sign to readers of the code that you’re just deferring to the next macrotask. 
     */
    setTimeout(() => {
        roulette.style.marginLeft = rollLeftMargin; 
    }, 0);

    setTimeout(() =>{
        for(let property in itemGot) {
            if(property == "rarity") {
                document.getElementById("result").innerHTML += itemGot[property].name + " " + itemGot[property].color + "</br>";
            } else {
                document.getElementById("result").innerHTML += itemGot[property] + "</br>";
            }
         }
         retryBtn.disabled = false;
    }, rollTime*1000);
}

retryBtn.onclick = function(e) {
    retryBtn.disabled = true;
    startRoulette();
}

retryBtn.disabled = true;
startRoulette();