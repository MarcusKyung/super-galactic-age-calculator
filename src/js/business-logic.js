export class Age{
  
  constructor(userAge) {
    this.userAge = userAge;
  }

  calculateMercury() {
    this.mercury = parseFloat((this.userAge / .24).toFixed(2))
    return this.mercury 
  }

  calculateVenus() {
    this.venus = parseFloat((this.userAge / .62).toFixed(2))
    return this.venus
  }
}