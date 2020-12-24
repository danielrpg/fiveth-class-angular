import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Interaccion entre componentes';
  imgUrl = 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat-768x384.png';
  count: number = 0;
  name: string;
  userName: string;
  private _customerName: string;

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if(value === 'pablo') {
      alert('pablito clavo un clavito en la calva de un calvito');
    }
  }
  
  increment() {
    this.count += 1;
  }

  validateUserName(userName) {
    this.userName = userName;
    if(userName === 'gatito') {
      alert('Miu Miu!!');
    }
  }
}
