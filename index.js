// Your code here

function saturdayFun(activity = "roller-skate") {
   return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

let Calculator = {
    add: function(num1, num2) {
        return (num1 + num2);
        },
    subtract: function(num3, num4) {
        return (num3 - num4)
        },
    multiply: function(num5, num6) {
        return (num5 * num6)
        },
    divide: function(num7, num8) {
        return (num7 / num8)
        }
}
 
function actionApplyer(start, array) {
    if ( array.length === 0 ) {
        return start
    } else {
        for (const elem of array) {
            start = elem(start);    
        }
    return start;
    }
}
    
    

// const wrapAdjective(flair = "*") = (
//     function(arg = "special") {

//         return `You are ${arg}`
//     }
// )


// const [answer, theBase] = (
//     function(thingToAdd) {
//       const base = 3;
//       return [
//         function() { return base + thingToAdd; },
//         function() { return base; }
//       ];
//     }
//   )(2)

// Implement a function called wrapAdjective:

// It should return a function

// This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
function wrapAdjective(flair = "*") {
    const InnerFunction = function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
    return InnerFunction;
}
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"

// Call example: const encouragingPromptFunction = wrapAdjective("!!!")
// Thus a total call should be:

// wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"



