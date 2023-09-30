
console.log("Tern 1: ")
let a = Math.floor(Math.random() * 100);
console.log(`a = ${a}`)
let b =  (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7)
console.log("Исходное:  " +  b)

function myif(a) {
    function func(result) {
        if (result > 5) {
            result = 2 * a + 1
        } else {
            if (a < 3) {
                result = 1
            }
            else  {
                result = 2 * (a - 2)
            }
            if (result > 4) {
                result = 5
            } else {
                if (a % 2 == 0) {
                    result = 6
                }
                else {
                    result = 7
                }
            }
        }
        return result
    }  

    if (a > 10) {
        return func(a)
    } else {
        return func(a * 2)
    } 
}

function myswitch(a) {
    function func(result) {
      switch (true) {
        case result > 5:
          result = 2 * a + 1;
          break;
        default:
        switch (true) {
            case a < 3:
                result = 1;
                break;
            default:
                result = 2 * (a - 2);
            }
          switch (true) {
            case result > 4:
              result = 5;
              break;
            default:
            switch (true) {
                case a % 2 == 0:
                    result = 6;
                    break;
                default:
                    result = 7;
                }
          }
      }
      return result;
    }
  
    switch (true) {
      case a > 10:
        return func(a);
      default:
        return func(a * 2);
    }
  }

console.log("if...else: " + myif(a))
console.log("switch:    " + myswitch(a))

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()