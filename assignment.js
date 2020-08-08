// 1st assignment : feetToMile ;

function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var checkMile = feetToMile(500000);
console.log(checkMile);

// 2st assignment : woodCalculator ;

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
console.log("Wood needed for your furniture is:", woodNeeded, "Cubic feet");
