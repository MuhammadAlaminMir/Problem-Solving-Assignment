// 1st assignment : feetToMile ;

function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var checkMile = feetToMile(500000);
console.log(checkMile);

// 2nd assignment : woodCalculator ;

/*  We know that:
    chair = 1;
    table = 3;
    bed = 5 ;
*/

function woodCalculator(chair, table, bed) {
    var chair = chair;
    var table = table * 3;
    var bed = bed * 5;
    var totalWoodNeeded = chair + table + bed;
    return totalWoodNeeded;
}

var woodNeeded = woodCalculator(5, 3, 4);
console.log("Wood needed for your furniture is :", woodNeeded, "Cubic feet");

// 3rd assignment : brickCalculator ;

// we know that.
// the first 10th floor are 15 feet high
// the second 10th floor are 12 feet high
// and third 10th floor are 10 feet high
// and for every feet we need 1000 piece brick

function brickCalculator(floor) {
    var totalBrickNeeded = 0;
    if (floor <= 10) {
        var brickForOneFloor = 15 * 1000;
        totalBrickNeeded = floor * brickForOneFloor;
    } else if (floor > 10 && floor <= 20) {
        var brickForOneFloor = 12 * 1000;
        totalBrickNeeded = floor * brickForOneFloor;
    } else {
        var brickForOneFloor = 10 * 1000;
        totalBrickNeeded = floor * brickForOneFloor;
    }
    return totalBrickNeeded;
}
var brickNeeded = brickCalculator(25);
console.log(brickNeeded);

// 4th assignment : tinyFriend ;

function tinyFriend(nameArray) {
    var tinyName = nameArray[0];
    for (var i = 0; i < nameArray.length; i++) {
        var name = nameArray[i];
        if (tinyName > name) {
            tinyName = name;
        }
    }
    return tinyName;
}
var friendsArray = ["rakib", "sihab", "hossain", "mahim", "akib"];
var smallerName = tinyFriend(friendsArray);
console.log(smallerName);
