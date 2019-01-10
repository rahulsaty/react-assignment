

 export const getFontSize = function(population) {
    var value = parseInt(population)
    var minFontSize = 15;
    if (isNaN(value)) {
      return minFontSize - 3;
    } else
      if (value >= 1000 && value <= 50000) {
        return minFontSize + 2;
      } else if (value > 50000 && value <= 1000000) {
        return minFontSize + 4;
      } else if (value > 1000000 && value <= 5000000) {
        return minFontSize + 6;
      } else if (value > 5000000 && value <= 10000000) {
        return minFontSize + 8;
      } else if (value > 10000000 && value <= 15000000) {
        return minFontSize + 10;
      } else if (value > 15000000 && value <= 30000000) {
        return minFontSize + 12;
      } else if (value > 30000000 && value <= 50000000) {
        return minFontSize + 14;
      } else if (value > 50000000 && value <= 70000000) {
        return minFontSize + 16;
      } else if (value > 70000000 && value <= 90000000) {
        return minFontSize + 18;
      } else if (value > 90000000 && value <= 110000000) {
        return minFontSize + 20;
      } else if (value > 1100000000 && value <= 1500000000) {
        return minFontSize + 22;
      } else if (value > 1500000000 && value <= 2000000000) {
        return minFontSize + 24;
      } else if (value > 2000000000 && value <= 4000000000) {
        return minFontSize + 26;
      } else if (value > 4000000000 && value <= 8000000000) {
        return minFontSize + 28;
      } else if (value > 8000000000 && value <= 16000000000) {
        return minFontSize + 30;
      } else if (value > 16000000000 && value <= 50000000000) {
        return minFontSize + 32;
      } else if (value > 50000000000 && value <= 100000000000) {
        return minFontSize + 34;
      } else if (value > 100000000000 && value <= 1500000000000) {
        return minFontSize + 36;
      } else {
        return minFontSize + 40;
      }
  } 
  export const getColor = function(population)  {
    let value = parseInt(population)
    let color = 'black';
    if (isNaN(value)) {
      return color = 'DarkRed';
    } else if (value >= 1000 && value <= 50000) {
      return 'pink';
    } else if (value > 50000 && value <= 1000000) {
      return 'lightgrey';
    } else if (value > 1000000 && value <= 5000000) {
      return 'yellow';
    } else if (value > 5000000 && value <= 10000000) {
      return 'orange';
    } else if (value > 10000000 && value <= 15000000) {
      return 'blue';
    } else if (value > 15000000 && value <= 30000000) {
      return 'grey';
    } else if (value > 30000000 && value <= 50000000) {
      return 'magenta';
    } else if (value > 50000000 && value <= 70000000) {
      return 'DarkGoldenrod';
    } else if (value > 70000000 && value <= 90000000) {
      return "red";
    } else if (value > 90000000 && value <= 110000000) {
      return 'brown';
    } else if (value > 1100000000 && value <= 1500000000) {
      return 'olive';
    } else if (value > 1500000000 && value <= 2000000000) {
      return 'cyan';
    } else if (value > 2000000000 && value <= 4000000000) {
      return 'navy';
    } else if (value > 4000000000 && value <= 8000000000) {
      return 'purple';
    } else if (value > 8000000000 && value <= 16000000000) {
      return 'Magenta';
    } else if (value > 16000000000 && value <= 50000000000) {
      return 'CadetBlue';
    } else if (value > 50000000000 && value <= 100000000000) {
      return 'ForestGreen';
    } else if (value > 100000000000 && value <= 1500000000000) {
      return 'DarkGoldenrod';
    } else {
      return 'MediumBlue'
    }
  }

