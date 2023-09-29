let home = 0
let away = 0

const homeScore = document.getElementById('homeId')
homeScore.innerText = home

const awayScore = document.getElementById('awayId')
awayScore.innerText = away


function scoreIncreaseHome(scoreNumber) {
    home += scoreNumber
    console.log('home score', home)
    homeScore.innerText = home
    if (home >= 21) {
        alert('gamer over')
        home = 0
        away = 0
        console.log('game over')
        homeScore.innerText = home
        awayScore.innerText = away
    }
}

function scoreIncreaseAway(scoreNumber) {
    away += scoreNumber
    console.log('away score', away)
    awayScore.innerText = away
    if (away >= 21) {
        alert('gamer over')
        home = 0
        away = 0
        console.log('game over')
        homeScore.innerText = home
        awayScore.innerText = away
    }
}
// function oneHome() {
//     home += 1
//     console.log('home score', home)
//     homeScore.innerText = home
//     if (home >= 21) {
//         alert('winner')
//         away = 0
//         home = 0
//         console.log('new game')
//         awayScore.innerText = away
//         homeScore.innerText = home
//     }
// }

// function oneAway() {
//     away += 1
//     console.log('away score', away)
//     awayScore.innerText = away
//     if (away >= 21) {
//         alert('winner')
//         away = 0
//         home = 0
//         console.log('new game')
//         awayScore.innerText = away
//         homeScore.innerText = home

//     }
// }

// function threeHome() {
//     home += 3
//     console.log('home score', home)
//     homeScore.innerText = home
//     if (home >= 21) {
//         alert('winner')
//         away = 0
//         home = 0
//         console.log('new game')
//         awayScore.innerText = away
//         homeScore.innerText = home
//     }
// }

// function threeAway() {
//     away += 3
//     console.log('away score', away)
//     awayScore.innerText = away
//     if (away >= 21) {
//         alert('winner')
//         away = 0
//         home = 0
//         console.log('new game')
//         awayScore.innerText = away
//         homeScore.innerText = home
//     }
// }

function resetScore() {
    away = 0
    home = 0
    console.log('reset')
    awayScore.innerText = away
    homeScore.innerText = home
}

if (home == 21) {
    alert('winner')
}

function scoreDecreaseHome(scoreNumber) {
    home -= scoreNumber
    console.log('home lose point', home)

    if (home <= 0) {
        home = 0
        console.log('home score', home)
        homeScore.innerText = home
    }
    else {
        homeScore.innerText = home
    }
}

function scoreDecreaseAway(scoreNumber) {
    away -= scoreNumber
    console.log('away lose point', away)

    if (away <= 0) {
        away = 0
        console.log('away score', away)
        awayScore.innerText = away
    }
    else {
        awayScore.innerText = away
    }
}