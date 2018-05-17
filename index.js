var katzDeliLine= [];

var number = 1

function takeANumber(katzDeliLine) {
  number += 1
  var time = Date.now()
  
  katzDeliLine.push({number:time});
  return `Welcome, you are number ${katzDeliLine.length - 1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently: ";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (let x = 1; x < katzDeliLine.length; x++) {
      line = line + `${x}. ${katzDeliLine[x - 1]}, `;
    }
    line = line + `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`;
  }
  return line;
}