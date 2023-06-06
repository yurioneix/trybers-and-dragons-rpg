import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private char1: Fighter, private char2: Fighter) {
    super(char1);
  }

  fight(): number {
    while (this.char1.lifePoints !== -1 && this.char2.lifePoints !== -1) {
      this.char1.attack(this.char2);
      this.char2.attack(this.char1);
    }
    return super.fight();
  }
}

export default PVP;