import Race from './Race';

class Dwarf extends Race {
  maxLifePoints = 80;

  constructor(name: string, dexterity: number, maxLifePoints: number) {
    super(name, dexterity);
    this.maxLifePoints = maxLifePoints;
  }
}

export default Dwarf;