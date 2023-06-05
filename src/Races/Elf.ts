import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 80;
  private static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Elf.instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}

export default Elf;