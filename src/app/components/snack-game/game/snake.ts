import {Direction} from "./direction";
import {lowerNeighbor, upperNeighbor} from "./neighbor";

export class Snake {
  public cells: SnakeCell[] = [{
    pos: 3,
    prevPos: 2
  }, {
    pos: 2,
    prevPos: 1
  },{
    pos: 1,
    prevPos: 0
  }];



  public dir : Direction = Direction.DOWN;


  get head() {
    return this.cells[0];
  }

  get tail() {
    const [_, ...tail] = this.cells;
    return tail
  }



  grow() {
    this.cells.push({
      pos: this.cells[this.cells.length - 1].pos
    })
  }

  isSnakeCell(cell: number) {
    return this.cells.filter(elt => elt.pos === cell).length > 0;
  }

  updateTail() {
    this.tail.forEach((elt, idx) => {
      elt.prevPos = elt.pos;
      elt.pos = this.cells[idx].prevPos;
    })
  }

  checkDead(size:number) {
    if (
        this.head.pos &&
        (this.head.pos % size === 0 ||               // Touche le mur de droite
            this.head.pos % size === size - 1 ||              // Touche le mur de gauche
            this.head.pos < size ||                     // Touche le mur du haut
            this.head.pos >= size * (size - 1))           // Touche le mur du bas
    ) {
      return true;
    }
    return this.tail.filter(elt => elt.pos === this.head.pos).length > 0;
  }



  setNextPos(newPos: number) {
    this.head.prevPos = this.head.pos;
    this.head.pos = newPos;
    this.updateTail();
  }

  goStep(size: number) {
    const cell = this.head.pos;
    const latticeSize = size;
    if (this.dir === Direction.LEFT) {
      this.setNextPos(lowerNeighbor(cell, 1, latticeSize));
    } else if (this.dir === Direction.RIGHT) {
      this.setNextPos(upperNeighbor(cell, 1, latticeSize));
    } else if (this.dir === Direction.UP) {
      this.setNextPos(lowerNeighbor(cell, 2, latticeSize));
    } else if (this.dir === Direction.DOWN) {
      this.setNextPos(upperNeighbor(cell, 2, latticeSize));
    } else {
      throw new Error('Unknown direction');
    }
  }

}

interface SnakeCell {
  prevPos?: number;
  pos?: number;
}
