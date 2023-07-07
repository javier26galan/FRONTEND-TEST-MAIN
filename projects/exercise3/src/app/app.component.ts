import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // - Implement unit tests for the service
  // - Implement unit tests for the component
  randomNumber?: number;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // al iniciar el componente me subscribo al servicio que retorna el random number
    this.dataService.getNumbers().subscribe((number) => {
      //y se lo asigno a la vatiariable para que se vea en el html
      this.randomNumber = number;
    });
  }
}
