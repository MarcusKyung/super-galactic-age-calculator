export class Age{
  
  constructor(userAge, userAgePast, userAgeFuture) {
    this.userAge = userAge;
    this.userAgePast = userAgePast;
    this.userAgeFuture = userAgeFuture;
  }

  calculateMercury() {
    this.mercury = parseFloat((this.userAge / .24).toFixed(2));
    return this.mercury;
  }

  calculateVenus() {
    this.venus = parseFloat((this.userAge / .62).toFixed(2));
    return this.venus;
  }

  calculateMars() {
    this.mars = parseFloat((this.userAge / 1.88).toFixed(2));
    return this.mars;
  }

  calculateJupiter() {
    this.jupiter = parseFloat((this.userAge / 11.86).toFixed(2));
    return this.jupiter;
  }

  calculateYearsSince(){
    let yearsSinceArray = [];
  if (this.userAge > this.userAgePast) {
    let yearsDelta = this.userAge - this.userAgePast;
    let earthYearsSince = yearsDelta;
    let mercuryYearsSince = parseFloat((yearsDelta / .24).toFixed(2));
    let venusYearsSince = parseFloat((yearsDelta / .62).toFixed(2));
    let marsYearsSince = parseFloat((yearsDelta / 1.88).toFixed(2));
    let jupiterYearsSince = parseFloat((yearsDelta / 11.86).toFixed(2));
    yearsSinceArray.push(earthYearsSince);
    yearsSinceArray.push(mercuryYearsSince);
    yearsSinceArray.push(venusYearsSince);
    yearsSinceArray.push(marsYearsSince);
    yearsSinceArray.push(jupiterYearsSince);
    return yearsSinceArray;
  } else {
    return "Please enter a birthday in the past";
  }
}
}