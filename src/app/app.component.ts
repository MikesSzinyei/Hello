import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alma és körte';
  name= "Nagy Ádám";

  employee = {
    name: 'Erős István',
    city: 'Szeged',
    salary:'384'
  }

  employees = [
    {name: 'Brancs Ádám', city: 'Szolnok', salary:397},
    {name: 'Fank Ferenc', city: 'Miskolc', salary:383},
    {name: 'Prima Erik', city: 'Bidapest', salary:391},
    {name: 'Lent Árpád', city: 'Szolnok', salary:367},
    {name: 'Hisz Laura', city: 'Szeged', salary:374}
  ]

  constructor() {
    this.kiir('valami')
  }
  kiir(msg:string):void {
    console.log(msg)
    console.log(this.employee.name)
  }
}
