import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dataService: DataService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], //componente a probar
      providers: [DataService], // el servicio
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('debe detectar la actualizacion de randomNumber con el número de el sercivio', () => {
    // numero aleatorio fijo
    const randomNum = 6;
    //ccon este metodo simulo el comportamiento de el servicio
    spyOn(dataService, 'getNumbers').and.returnValue(of(randomNum));

    // con esto se detectan los cambios
    fixture.detectChanges();

    //esto verifica que el componente se actualiza correctamente
    expect(component.randomNumber).toEqual(randomNum);
  });
});
