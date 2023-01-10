let countEl = document.getElementById("count-el") 
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
	count += 1
	countEl.textContent = count
}

function save() {
	let countStr = count + " - "
	saveEl.textContent += countStr
	console.log(count)
	count = 0
	countEl.textContent = count
}






































//let username = "Jordi"
//let greeting = "Hi, my name is "
//let message = "You have three new notifications"
//let messageToUser = message + ", " + username + "!"
//let myGreeting = greeting + username + "."
//console.log(messageToUser)
//console.log(myGreeting)


























//let lapsCompleted = 0

//function incrementLap() {
//	lapsCompleted = lapsCompleted + 1
//}
//incrementLap()
//incrementLap()
//incrementLap()
//console.log(lapsCompleted)

//let lap1 = 34
//let lap2 = 33
//let lap3 = 36

//function logLapTime() {
    //let totalTime = lap1 + lap2 + lap3
    //console.log(totalTime)
//}

//logLapTime()

//function myLogger() {
	//console.log(42)
//}
//myLogger()

// My age in dog years!
//var myAge = 34
//var humanDogRatio = 7
//let myDogAge = myAge * humanDogRatio

// Show values in the console
//console.log(count)
//console.log(bonusPoints)
//console.log(myDogAge)
//console.log(myAge)
