// App starts here
//main();

// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (incluse).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
    let nb = Math.random() * (max - min+1) + min;
    //console.log(0.49*(1 - 0 + 1) + 0);
    //console.log(0.50*(1 - 0 + 1) + 0);
    //console.log(nb);
	return Math.floor(nb);
}

function getRandomItems(pArray, times) {
    let resultArray = [];
    for(i = 0; i < times; i++) {
        resultArray.push(getRandomItem(pArray));
    }
    return resultArray;
}

function getRandomItem(pArray) {

	let totalItems = 0;

	pArray.forEach(element => {
		totalItems += element.getOccurences;
	});

	let minInt = 0;
	let randomInt = getRandomInt(1, totalItems);

	//console.log(pArray + " | RANDOM NUMBER = " + randomInt);

	// This allows us to get out of the loop once we find the element, which we cant do using a forEach in Javascript.
	for(let i = 0 ; i < pArray.length; i++) {
		minInt += pArray[i].getOccurences;
		if(randomInt <= minInt && randomInt >= 1) {
			return pArray[i];
		}
	}

    // forEach way ...
	/*
	let tempArray = [];
	pArray.forEach(element => {
		minInt += element.getOccurences;
		if(randomInt <= minInt && randomInt >= 1) {
			tempArray.push(element);
		}
	});
	return tempArray[0];
	*/
}

function testRun(pTimes, pArray) {
    console.log("Running " + pTimes + " tests...");

    let startTime = performance.now();
    let resultMap = new Map();
    let totalOccurences = 0;
    let totalOccurencesCount = 0;

    pArray.forEach(element => {
        resultMap.set(element, 0);
        totalOccurences += element.getOccurences;
    });

    for(let i = 0; i < pTimes; i++) {
        let item = getRandomItem(pArray);
        resultMap.set(item, resultMap.get(item)+1);
    }

    console.log(resultMap);
    pArray.forEach((e)=>{
        totalOccurencesCount += (e.getOccurences/totalOccurences)*100;
		console.log(e.getName + " : " + (e.getOccurences/totalOccurences)*100 + " %" + " --- (" + e.getOccurences + " / " + totalOccurences + ")" + " --- " + totalOccurencesCount + " %");
	});
    console.log(totalOccurencesCount + " --> if not equal to 100, then the odds are incorrect. If trailing numbers occur, could be because of float point number precision.");

    let endTime = performance.now();
    console.log(`Running ` + pTimes + ` tests took ${parseFloat((endTime - startTime)/1000).toFixed(3)} seconds.`);
}


/**
 * Manages the logical order of code execution.
 */
function main() {

    /* -------------------------------- WITH CASES -------------------------------- */
    const arrayOfCases = [
        new Case(
            1000,
            "Red Phoenix", 
            10, 
            [
                new Item("Red Bronze", 50000), 
                new Item("Red Silver", 30000),
                new Item("Red Golden", 16000), 
                new Item("Red Diamond", 3),
                new Item("Red Ruby", 1)
            ]
        ),
        new Case(
            1001,
            "Blue Saphyr", 
            10, 
            [
                new Item("Blue Bronze", 50000), 
                new Item("Blue Silver", 30000),
                new Item("Blue Golden", 16000), 
                new Item("Blue Diamond", 3),
                new Item("Blue Ruby", 1)
            ]
        )
    ];

    console.log(arrayOfCases[0])
    console.log(arrayOfCases[1])
    console.log("~~~ RANDOM CASE + RANDOM ITEM: " + getRandomItem(getRandomItem(arrayOfCases).getItems).getName);
    console.log("--------------------------------------------")
    console.log(testRun(100, arrayOfCases[0].getItems));

    /* -------------------------------- 1 RANDOM ITEM -------------------------------- */
	const arrayOfAvailableItems = [
		new Item("Bronze", 50000), 
		new Item("Silver", 30000),
		new Item("Golden", 16000), 
		new Item("Diamond", 3),
		new Item("Ruby", 1)
	];

	console.log("~~~ RANDOM ITEM: " + getRandomItem(arrayOfAvailableItems));
}