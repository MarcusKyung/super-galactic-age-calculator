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
  if (this.userAge > this.userAgePast) {
    return this.userAge - this.userAgePast;
  } else {
    return "You can't do this with a larger age in the past";
  }
}
}