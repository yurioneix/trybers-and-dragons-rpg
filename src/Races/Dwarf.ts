import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Dwarf.instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}

export default Dwarf;