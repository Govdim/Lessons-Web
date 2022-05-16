let getPrice = function(hours, isQuickly){
    let perHour = 1500;

    if(isQuickly){
        hours /= 2;
        perHour *= 2.5;
    }

    if(hours > 150){
        perHour -= 250;
    }

    return hours * perHour;
}

alert(getPrice(400, true));
