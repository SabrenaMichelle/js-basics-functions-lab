// Code your solution in this file!
function distanceFromHqInBlocks(a){

    let blocks = a - 42;
    return Math.abs(blocks) 
}
function distanceFromHqInFeet(b) {
    let feet
    feet = distanceFromHqInBlocks(b); 
    b = feet * 264;
    return b ;
}

function distanceTravelledInFeet(c,d) {
    let dist;
    dist = Math.abs(c-d) * 264;
    return dist;
}

function calculatesFarePrice(c,d) {
    let farePrice;
    let e = Math.abs(c-d) * 264;
    if (e <= 400) {
        farePrice = 0
    }
    else if (e >= 400 && e <=2000) {
        farePrice = (e- 400) * .02
    }
    else if (e >= 2000 && e <= 2500) {
        farePrice = 25
    }
    else if (e >= 2000 && e >= 2500) {
        farePrice = "cannot travel that far"
    }
    return farePrice;
}