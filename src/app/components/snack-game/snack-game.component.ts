import {Component, HostListener} from '@angular/core';
import {Direction} from "./game/direction";
import {Food} from "./game/food";
import {Snake} from "./game/snake";
import {User} from "../../models/user.model";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-snack-game',
  templateUrl: './snack-game.component.html',
  styleUrls: ['./snack-game.component.scss']
})
export class SnackGameComponent {
  size:number = 20;
  cells:number[] = new Array(this.size * this.size);
  timestep:number = 100;
  snake: Snake = new Snake();
  gameStarted: boolean = false;
  bestUserScore !: User;
  dead:boolean = false;
  time:number = 0;

  private gridSize  : number= this.size * this.size;
  private food : Food = new Food(this.gridSize, this.snake);
   currentUser!: User;
  scrollIng: string= "allow";

  constructor(private userService:UserService) {
  }

  startGame() {
    this.gameStarted = true;
    this.playGame();
    const storedUser:string|null = sessionStorage.getItem("userLogged");
    if(storedUser) {
      this.currentUser = JSON.parse(storedUser) as User;
    }
   this.userService.getUserWithHighestScore().subscribe((data =>{
     this.bestUserScore = data;
   }));
  this.scrollIng = "no-scroll";
  }

  restartGame() {

    this.snake = new Snake();
    this.dead = false;
    this.time = 0;
    this.food = new Food(this.gridSize, this.snake);
    this.playGame();
  }

  isFood(idx: number) {
    return idx === this.food.pos;

  }

  playGame() {
    const runTime = () => {
      setTimeout(() => {
        this.goStep();
        this.dead = this.snake.checkDead(this.size);
        this.time++;
        if (!this.dead) {
          runTime();
        }else{
          this.checkHighScore();
        }
      }, this.timestep)
    }
    runTime();
  }

  public checkHighScore() {
    alert("ici");
    console.log("checkscore"+this.snake.tail.length+1);
    if(this.snake.tail.length+1>this.currentUser.highScore){
      alert("nouveau meilleur score");
      this.currentUser.highScore = this.snake.tail.length+1;
      this.userService.updateUser(this.currentUser).subscribe();
      if(this.snake.tail.length+1>this.bestUserScore.highScore){
        this.bestUserScore = this.currentUser;

      }
    }

  }

  @HostListener('window:keydown', ['$event'])
  onKeypress(e: KeyboardEvent) {
    if (!this.dead) {
      switch (e.key) {
        case 'ArrowRight':
          this.changeDirAndGoStep(Direction.RIGHT);
          break;
        case 'ArrowLeft':
          this.changeDirAndGoStep(Direction.LEFT);
          break;
        case 'ArrowUp':
          this.changeDirAndGoStep(Direction.UP);
          break;
        case 'ArrowDown':
          this.changeDirAndGoStep(Direction.DOWN);
          break;
      }

    }
  }

  goStep() {
    this.snake.goStep(this.size);
    this.eatFood();
  }



  eatFood() {
    if(this.snake.head.pos){
      const pos = this.snake.head.pos;
      if (this.isFood(pos)) {
        this.doSpawnFood();
        this.snake.grow();
      }

    }

  }

  changeDirAndGoStep(dir:Direction) {
    if (dir) {
      const canChangeDir = this.getCanChangeDir(dir, this.snake.dir);
      if (canChangeDir) {
        this.snake.dir = dir;
        this.goStep();
      }
    }
  }

  getCanChangeDir(d1: Direction, d2: Direction) {
    const dirs = [d1, d2];
    const filteredUpDown = dirs.filter(dir => dir === Direction.UP || dir === Direction.DOWN).length;
    const onlyOneDir = filteredUpDown === 2 || filteredUpDown === 0;
    return !onlyOneDir;
  }

  doSpawnFood() {
    this.food = new Food(this.gridSize, this.snake);
  }
}
