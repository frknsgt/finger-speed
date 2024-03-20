import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  Math = Math

  constructor(private translateService: TranslateService) { }

  public isOpenGame: boolean = false;
  public leftTime: number = 3;
  public levels = [
    { level: 1, size: '50%', col: 6, boxCount: new Array(4).fill({}), rowCount: 2, border: 'none' },
    { level: 2, size: '33.33%', col: 4, boxCount: new Array(9).fill({}), rowCount: 3, border: 'url(../../../../assets/images/bronze-frame.png)' },
    { level: 3, size: '25%', col: 3, boxCount: new Array(16).fill({}), rowCount: 4, border: 'url(../../../../assets/images/silver-frame.png)' },
    { level: 4, size: '16.66%', col: 2, boxCount: new Array(36).fill({}), rowCount: 6, border: 'url(../../../../assets/images/gold-frame.png)' },
  ]
  public currentLevel = this.levels[0];
  public boxStatus = new Array(36).fill('none');
  public score: number = 0;
  public lastMousePosition: number = -1;
  public lastHealthPosition: number = -1;
  public lastBombPosition: number = -1;
  public wrongCount: number = 0;
  public healthCount: number = 5;
  public isWrong: boolean = false;
  public gameSpeed: number = 1500;
  public defaultGameSpeed: number = 1500;
  public gameInterval: any = null;
  public healthInterval: any = null;
  public bombInterval: any = null;
  public isEndGame: boolean = false;

  ngOnInit(): void {
    this.levels.forEach((level, levelIndex) => {
      let bgColor: string = 'white';

      level.boxCount.forEach((box, index) => {
        if (index % level.rowCount === 0) {
          bgColor = bgColor === 'black' ? 'white' : 'black';
        }

        let selectedBgColor: string = (index % 2 === 0 ? bgColor : bgColor === 'black' ? 'white' : 'black') + '';
        selectedBgColor = level.rowCount % 2 === 0 ? selectedBgColor : index % 2 === 0 ? 'black' : 'white';
        this.levels[levelIndex].boxCount[index] = Object.assign({}, { bgColor: selectedBgColor });
      })
    });
  }

  openGame() {
    this.isOpenGame = true;
    const timer = setInterval(() => {
      this.leftTime--;
      this.checkLevel();

      if (this.leftTime <= 0) {
        this.gameStart();
        clearInterval(timer);
      }

    }, 1000)
  }

  private checkLevel() {
    if (this.score >= 300 && this.score < 1500) {
      this.currentLevel = this.levels[1];
    } else if (this.score >= 1500 && this.score < 5000) {
      this.currentLevel = this.levels[2];
    } else if (this.score >= 5000) {
      this.currentLevel = this.levels[3];
    } else {
      this.currentLevel = this.levels[0];
    }
  }

  public gameStart() {
    let randomNumber: number;
    let randomHealthNumber: number;
    let randomBombNumber: number;
    this.healthInterval = setTimeout(() => {
      this.boxStatus[this.lastHealthPosition] = this.boxStatus[this.lastHealthPosition] !== 'health' ? this.boxStatus[this.lastHealthPosition] :'none';
      this.resetBox('health');
      randomHealthNumber = Math.floor(Math.random() * this.currentLevel.boxCount.length);

      if (Math.floor(Math.random() * 10) === 3) {
        this.boxStatus[randomHealthNumber] = this.boxStatus[randomHealthNumber] !== 'none' ? this.boxStatus[randomHealthNumber] : 'health';
        this.lastHealthPosition = randomHealthNumber;
      }
    }, this.gameSpeed);
    this.bombInterval = setTimeout(() => {
      this.boxStatus[this.lastBombPosition] = this.boxStatus[this.lastBombPosition] !== 'bomb' ? this.boxStatus[this.lastBombPosition] :'none';
      this.resetBox('bomb');
      randomBombNumber = Math.floor(Math.random() * this.currentLevel.boxCount.length);

      if (Math.floor(Math.random() * 7) === 5) {
        this.boxStatus[randomBombNumber] = this.boxStatus[randomBombNumber] !== 'none' ? this.boxStatus[randomBombNumber] : 'bomb';
        this.lastHealthPosition = randomBombNumber;
      }
    }, this.gameSpeed);
    this.gameInterval = setTimeout(() => {
      while (true) {
        randomNumber = Math.floor(Math.random() * this.currentLevel.boxCount.length);
        if (this.lastMousePosition !== randomNumber) {
          if (this.boxStatus[this.lastMousePosition] === 'show') {
            this.isWrong = true;
            this.closeWrongBg();
            this.wrongCount++;

            if (this.healthCount - this.wrongCount <= 0) {
              clearInterval(this.gameInterval);
            }
          }
          this.resetBox('show');
          this.lastMousePosition = randomNumber;
          break;
        }
      }
      this.boxStatus[randomNumber] = 'show';

      if (this.healthCount - this.wrongCount > 0) {
        this.gameStart();
      } else {
        this.isEndGame = true;
      }

    }, this.gameSpeed);
  }

  public resetBox(resetKey: string) {
    const selectedBox: number = this.boxStatus.findIndex((item: string) => item === resetKey);

    if (selectedBox >= 0) {
      this.boxStatus[selectedBox] = 'none';
    }
  }

  public closeWrongBg() {
    setTimeout(() => {
      this.isWrong = false;
    }, (this.gameSpeed / 5));
  }

  public onClickMouse(index: number) {
    if (this.boxStatus[index] === 'none') {
      return;
    }

    if (this.boxStatus[index] === 'health') {
      this.score += 100
      this.healthCount++;
      this.boxStatus[index] = 'none';
    }

    if (this.boxStatus[index] === 'bomb') {
      this.wrongCount++;
      this.score -= 100;
      this.boxStatus[index] = 'none';
      this.isWrong = true;
      this.closeWrongBg();

      if (this.healthCount - this.wrongCount <= 0) {
        clearInterval(this.gameInterval);
        this.isEndGame = true;
      }
    }

    if (this.boxStatus[index] === 'show') {
      this.boxStatus[index] = 'killed';
      this.score += 20;

      if (this.gameSpeed > 300) {
        this.gameSpeed = this.defaultGameSpeed - this.score / 10;
      }

      setTimeout(() => {
        this.boxStatus[index] = 'none';
      }, (this.gameSpeed / 2));
    }

    this.checkLevel();
  }

  public gameReset() {
    this.boxStatus = new Array(36).fill('none');
    this.isEndGame = false;
    this.isOpenGame = false;
    this.score = 0;
    this.healthCount = 5;
    this.wrongCount = 0;
    this.lastBombPosition = -1;
    this.lastHealthPosition = -1;
    this.lastMousePosition = -1;
    this.gameSpeed = 1500;
    this.leftTime = 3;
  }

   public changeLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
