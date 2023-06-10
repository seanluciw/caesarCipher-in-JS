function caesarCipher(inputStr, rotation) {
  inputStr = inputStr.toUpperCase();
  console.log('before:', inputStr);
  let decodedStr = '';
  let alphaStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// create rotated alphabet
// allow negative rotation input
  if (rotation < 0) {
    rotation = rotation + 26;
  }
  let rotatedAlphaArr = alphaStr.split('');
  for (let i = 0; i < rotation; i++) {
    rotatedAlphaArr.push(rotatedAlphaArr.shift());
  }
  let rotatedAlphaStr = rotatedAlphaArr.join('');
  console.log(rotatedAlphaStr);
  console.log(alphaStr);
// implement the rotation
  for (let i = 0; i < inputStr.length; i++) {
    let indexThisChar = rotatedAlphaStr.indexOf(inputStr[i]);
    let decodedChar = inputStr[i];
// leave non-alphabet characters unchanged
    if (indexThisChar != -1) {     
      decodedChar = alphaStr[indexThisChar];
    }
    decodedStr = decodedStr.concat(decodedChar);
  }
  console.log('after:', decodedStr);
  console.log();
  return decodedStr;
}

// rot 13 function call example

function rot13(str) {
  return caesarCipher(str, 13);
}

// non-13 example

caesarCipher("sean", 9);
caesarCipher("JVRE", -9);

rot13("CVMMN!"); // PIZZA!
