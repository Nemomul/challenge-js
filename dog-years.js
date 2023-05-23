const planet = {
    earth: 1.0 ,
    mercury: 0.2408467 ,
    venus: 0.61519726 ,
    mars: 1.8808158 ,
    jupiter: 11.862615 ,
    saturn: 29.447498 ,
    uranus: 84.016846 ,
    neptune: 164.79132 ,
}

function dogYears (seconde, key){
    const dogAge = seconde / 31557600
    const dogOnPlanet = dogAge * planet[key]
    return dogOnPlanet * 7
}

console.log(dogYears(1000000000,'earth'))