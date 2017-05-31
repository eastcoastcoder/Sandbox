function truncate(number, places) {
  var shift = Math.pow(10, places);
  return ((number * shift) | 0) / shift;
};

function pad(value) {
    return (value < 10) ? '0' + value : value;
}

function validateForm() {    
    var initialFeet = parseInt(document.getElementById("initialFeet").value);
    var initialInches = parseInt(document.getElementById("initialInches").value);
    var initialHour = parseInt(document.getElementById("initialHour").value);
    var initialMin = parseInt(document.getElementById("initialMin").value);
    var initialAMPM = document.getElementById("initialAMPM").value;
    var initialMilHour = (initialAMPM === 'PM') ? 12+initialHour : initialHour;
    
    var finalFeet = parseInt(document.getElementById("finalFeet").value);
    var finalInches = parseInt(document.getElementById("finalInches").value);
    var finalHour = parseInt(document.getElementById("finalHour").value);
    var finalMin = parseInt(document.getElementById("finalMin").value);
    var finalAMPM = document.getElementById("finalAMPM").value;
    var finalMilHour = (finalAMPM === 'PM') ? 12+finalHour : finalHour;
    
    var timeHourDifference = finalMilHour-initialMilHour;
    var timeMinDifference = finalMin-initialMin;
    var heightDifference = ((finalFeet*12)+finalInches)-((initialFeet*12)+initialInches);

    document.getElementById("initialTimeDisplay").innerHTML='Starting at: ' + initialHour + ':' + pad(initialMin);

    document.getElementById("finalTimeDisplay").innerHTML='Ending at: ' + finalHour + ':' + pad(finalMin) + ' (next day)';

    var nextDayHour = 24 + timeHourDifference;
    document.getElementById("timeDiff").innerHTML='Difference of ' + nextDayHour + ':' + pad(timeMinDifference) + ' hrs';
    var timeDifferenceInDecimal = (nextDayHour*60+timeMinDifference)/60;

    var totalValue = (heightDifference*1.17)/24*timeDifferenceInDecimal;
    
    document.getElementById("work").innerHTML=heightDifference +'" x 1.17 / (24 + ' + nextDayHour + 'hrs)';
    document.getElementById("total").innerHTML=truncate(totalValue, 2);
}
