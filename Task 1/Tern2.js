
console.log("Tern 2: " )

function manyChecks(a) {
  console.log(`a = ${a}`);
  return (
    a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? ' but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
}

function myif(a) {
  let result;
  if (a > 10) {
    result = 'a is bigger than 10 '
    if (a === 15) {
      result = result +  'but a is not 15'      
    } 
    result = result +  'and a is greater than 5'
  } else {
    result = 'a is less than or equal to 10 '
    if (a === 5) {
      result = result +  'an example of a special case'
    } 
    if (a > 5) {
      result = result +  'and a is greater than 5'
      
    } else {
      result = result +  'and a is less than or equal to 5 '
    }
  }
  if (a % 2) {
    result = result + ' and a is odd'
  } else {
    result = result + ' and a is even '
  }
  return result

}


function myswitch(a) {
  let result;
  switch (true) {
    case a > 10:
      result = 'a is bigger than 10 ';
      
      switch (true) {
        case a === 15:
          result = result + 'but a is not 15';
          break;
      }
      result = result + 'and a is greater than 5';
      break;
    default:
      result = 'a is less than or equal to 10 ';
      switch (true) {
        case a === 5:
          result = result + 'an example of a special case';;
          break;
      }
      switch (true) {
        case a > 5:
          result = result + 'and a is greater than 5';
          break;
        default:
          result = result + 'and a is less than or equal to 5 ';
      }
  }
  switch (a % 2) {
    case 1:
      result = result + ' and a is odd';
      break;
    default:
      result = result + ' and a is even ';
  }
  return result

}
let c = Math.floor(Math.random() * 20) + 1;
console.log("Исходное:  " + manyChecks(c))
console.log("if...else: " + myif(c))
console.log("switch:    " + myswitch(c))

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()