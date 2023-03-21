// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    let headQuarter = 42;
    let numberOfBlocks = pickUpLocation - headQuarter;
    return Math.abs(numberOfBlocks);
}
distanceFromHqInBlocks(43);


function distanceFromHqInFeet(blockNumber){
    let distanceInFeet =distanceFromHqInBlocks(blockNumber)*264;
    return distanceInFeet;
}
distanceFromHqInFeet(43);


function distanceTravelledInFeet(startingBlock,endingBolck) {
    let distanceBetweenStartandEnd=Math.abs(startingBlock-endingBolck)*264;
    return distanceBetweenStartandEnd;
}
distanceTravelledInFeet(34,28);


function calculatesFarePrice(startingBlock,endingBolck) {
    let distance;
    let farePrice;
    distance = distanceTravelledInFeet(startingBlock,endingBolck);
    if (distance<=400){
        farePrice=0;
    }

    else if(distance>400 && distance<=2000)
        farePrice=0.02*(distance-400);

    else if(distance>2000 && distance<=2500)
        farePrice= 25;

    else farePrice= "cannot travel that far"

    return farePrice;
}
