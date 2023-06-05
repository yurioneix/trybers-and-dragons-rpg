import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Halfling.instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}

export default Halfling;