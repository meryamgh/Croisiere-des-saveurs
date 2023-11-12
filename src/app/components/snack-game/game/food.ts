import {Snake} from './snake';

export class Food {
  public pos: number;

  constructor(gridSize: number) {
    console.log("grid" + gridSize);
    const forbiddenValues: Set<number> = this.getForbiddenValues(gridSize);
    this.pos = getIntBetweenZeroAndN(gridSize, forbiddenValues);
    console.log(this.pos);
  }

  private getForbiddenValues(gridSize: number): Set<number> {
    const forbiddenValues: Set<number> = new Set();


    for (let row = 0; row < 20; row++) {

      forbiddenValues.add(row);

    }


    for (let row = 380; row < gridSize; row++) {
      forbiddenValues.add(row);

    }


    for (let col = 0; col < gridSize; col += 20) {

      forbiddenValues.add(col);

    }

    for (let col = 19; col < gridSize; col += 20) {

      forbiddenValues.add(col);

    }

    return forbiddenValues;
  }
}

const getIntBetweenZeroAndN = (n: number, forbiddenValues: Set<number>): number => {
  let rand: number;
  do {
    rand = Math.floor(Math.random() * n);
  } while (forbiddenValues.has(rand));
  return rand;
};

