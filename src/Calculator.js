function Calculator(){}

Calculator.prototype.seq = function(numF, numS, type){
  if (numF > 2147483647 || numF < 0 || numS > 2147483647 || numS < 0) {
    return 'not find';
  } else {
    if (type === 'plus') {
      return numF + numS
    } else if (type === 'subtract') {
      if (numF - numS < 0) {
        return '数据超限'
      } else {
        return numF - numS
      }
      // (numF - numS < 0) ? '数据超限' : (numF - numS)
      // return numF - numS
    } else if (type === 'multiply') {
      if (numF * numS > 2147483647) {
        return 'baby in car'
      } else {
        return numF * numS
      }
      // numF * numS > 2147483647 ? 'baby in car' : numF * numS
    } else if (type === 'divide') {
      if (numS < 0) {
        return '除数应该大于0'
      } else {
        var baseNum1 = 0, baseNum2 = 0;
        var baseNum3, baseNum4;
        try {
            baseNum1 = numF.toString().split(".")[1].length;
        } catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = numS.toString().split(".")[1].length;
        } catch (e) {
            baseNum2 = 0;
        }
        with (Math) {
            baseNum3 = Number(numF.toString().replace(".", ""));
            baseNum4 = Number(numS.toString().replace(".", ""));
            return (baseNum3 / baseNum4) * pow(10, baseNum2 - baseNum1);
        }
      }
    }

  }
}