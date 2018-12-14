import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'catalogo',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem vindo ao Catalogo App!'

  constructor() { }

  ngOnInit() {
  }

}
