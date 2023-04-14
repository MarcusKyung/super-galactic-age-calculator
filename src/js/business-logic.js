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
      yearsSinceArray.push(earthYearsSince + " Earth years have passed");
      yearsSinceArray.push(mercuryYearsSince + " Mercury years have passed");
      yearsSinceArray.push(venusYearsSince + " Venus years have passed");
      yearsSinceArray.push(marsYearsSince + " Mars years have passed");
      yearsSinceArray.push(jupiterYearsSince + " Jupiter years have passed");
      return yearsSinceArray;
    } else {
      return "Please enter a birthday in the past";
    }
  }

  calculateYearsUntil(){
    let yearsUntilArray = [];
    if (this.userAge < this.userAgeFuture) {
      let yearsDelta = this.userAgeFuture - this.userAge;
      let earthYearsUntil = yearsDelta;
      let mercuryYearsUntil = parseFloat((yearsDelta / .24).toFixed(2));
      let venusYearsUntil = parseFloat((yearsDelta / .62).toFixed(2));
      let marsYearsUntil = parseFloat((yearsDelta / 1.88).toFixed(2));
      let jupiterYearsUntil = parseFloat((yearsDelta / 11.86).toFixed(2));
      yearsUntilArray.push(earthYearsUntil + " Earth years have yet to pass");
      yearsUntilArray.push(mercuryYearsUntil + " Mercury years have yet to pass");
      yearsUntilArray.push(venusYearsUntil + " Venus years have yet to pass");
      yearsUntilArray.push(marsYearsUntil + " Mars years have yet to pass");
      yearsUntilArray.push(jupiterYearsUntil + " Jupiter years have yet to pass");
      return yearsUntilArray;
    } else {
      return "Please enter a birthday in the future";
    }
  }
}