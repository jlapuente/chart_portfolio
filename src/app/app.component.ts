import { Component, OnInit } from '@angular/core';
import chars from '../assets/json/chars.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chart_portfolio';

  isOpen: boolean = false;

  selectedChar: any = chars[0];

  ngOnInit(): void {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      //You have yout key code here
      if (e.keyCode == 32 && !this.isOpen) {
        console.log(e);
        console.log(e.keyCode);
        this.isOpen = !this.isOpen;
        console.log("llamo changeMenu ")
        this.changeMenu();
      }
    });

  }

  changeId(id: number) {
    this.selectedChar = chars[id];
  }

  changeMenu() {
    const element = document.querySelector('.container');
    if (element != null) {
      element.classList.add('animate__animated', 'animate__backOutUp');
      element.addEventListener('animationend', function change() {
        element.classList.add('hidden');
        console.log("animacion acabada")
        const charDescription = document.querySelector('.char-description');
        if (charDescription != null) {
          charDescription.classList.remove('hidden');
          charDescription.classList.remove('animate__animated', 'animate__backOutUp');
        }
      });
    }
  }

  back() {
    this.isOpen = !this.isOpen;
    const charDescription = document.querySelector('.char-description');
    if (charDescription != null) {
      charDescription.classList.add('animate__animated', 'animate__backOutUp');
      charDescription.addEventListener('animationend', function changeBack() {
        charDescription.classList.add('hidden');
        const element = document.querySelector('.container');
        if (element != null) {
          element.classList.remove('hidden');
          element.classList.remove('animate__animated', 'animate__backOutUp');
          console.log("animacion acabada");
        }
      })
    }
  }

}
