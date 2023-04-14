export class Age{
  
  constructor(userAge) {
    this.userAge = userAge;
  }

  calculateMercury() {
    this.mercury = this.userAge / .24
    return this.mercury 
  }
}