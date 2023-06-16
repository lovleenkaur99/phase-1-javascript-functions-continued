// code your solution here
function saturdayFun(target="roller-skate"){ 
    return(`This Saturday, I want to ${target}!`)
}

const mondayWork= function mondayWork(target="go to the office") {
    return(`This Monday, I will ${target}.`)
}

let wrapAdjective = function wrapAdjective (target = "*") { 
    return function (special= "a hard worker") { 
        return(`You are ${target}${special}${target}!`)
    }
}

