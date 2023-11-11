import {Snake} from './snake';

export class Food {
  pos: number;
  constructor(gridSize: number, snake?: Snake) {
    const freeCells = this.findFreeCell(gridSize, snake);
    const randomIntInRange = getIntBetweenZeroAndN(freeCells.length);
    this.pos = freeCells[randomIntInRange];
  }

  private findFreeCell (gridSize: number, snake?: Snake): number[] {
    const allCells : number[]  = Array.from(Array(gridSize).keys());
    const freeCells = allCells; // init with all cells, then remove unused.
    if (snake != null) {
      snake.tail.forEach(elt => {
        if(elt.pos){
          allCells[elt.pos] = -5;
        }

      });
    }
    return freeCells.filter(cell => cell != -5);
  }
}

const getIntBetweenZeroAndN = (n: number) => {
  const rand = Math.random() * n;
  return Math.floor(rand);
}
