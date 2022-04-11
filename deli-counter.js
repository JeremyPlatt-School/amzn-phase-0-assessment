// 1. Write your functions here
function line(lineArr){
    let lineStr = "";
    let num = 0;
    if (lineArr.length === 0){
        return lineStr = "The line is currently empty."
    } else{
        let newLineArr = lineArr.map(function addNum() { num ++; return num + ". " + lineArr[num - 1] + " ";}); 
        lineStr = "The line is currently: " + newLineArr.join(" ");
        console.log(lineStr);
        return lineStr;
    }
}


function takeANumber(arr, nameStr){
    let n = 1 + arr.length;
    console.log('Welcome, ' + nameStr + '. You are number ' + n + ' in line.');
    n = 0;
    return arr.push(nameStr);
}

function nowServing(arr){
    console.log("Now serving, " + arr[0] + ".");
    return arr.shift();
}

//2. Example Usage

const katzDeli = []

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"