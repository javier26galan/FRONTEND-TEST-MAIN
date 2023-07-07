import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('debe mostrar el mensage de error para nombre de producto invalido', () => {
    const productNameImput = component.form.controls['productName']; // seleccion de el input
    productNameImput.setValue('qwer'); //valor inválido para pasarle
    productNameImput.markAllAsTouched();
    fixture.detectChanges();
    const errorMessage = fixture.nativeElement.querySelector('.errorLength');
    //espera que el mensage sea contenga la siguiente cadena de texto
    expect(errorMessage.textContent).toContain('The name of the product must be between 5 and 20 characters');
  });

  it('mostrar mensage de error cuando el precio es invalido', () => {
    //seleccion de el input y asignarle un valor invalidp
    const priceInput = component.form.controls['productPrice'];
    priceInput.setValue(3);
    priceInput.markAllAsTouched();
    fixture.detectChanges();
    const errorMessage = fixture.nativeElement.querySelector('.errorPrice');
    //espera que el mensage sea contenga la siguiente cadena de texto
    expect(errorMessage.textContent).toContain('The Price of the product must be a number between 5 and 20 characters');
  });

  it('montrar succes mensage cuando el formulario es válido', () => {
    //selecion de los inputs y asignarles valores correctos
    const productNameImput = component.form.controls['productName'];
    productNameImput.setValue('Producto');
    const priceInput = component.form.controls['productPrice'];
    priceInput.setValue(10);

    //activar formulario
    const submitButton = fixture.nativeElement.querySelector('button');
    submitButton.click();
    fixture.detectChanges();

    const successMessage = component.successMessage;
    // mensage esperado cuando el formulario es válido
    expect(successMessage).toContain(`Formulario correcto, Nombre producto: ${productNameImput.value}, precio:${priceInput.value}`);
  });

  it('resetear el formulario y limpiar los mensages', () => {
    //seleccion de las variables de los mesajes
    component.successMessage = 'Formulario incorrecto';
    component.errorMessage = 'Formulario correcto';
    //activar el metodo formReset que resetea el formulario
    component.formReset();
    fixture.detectChanges();
    //esperar el tiempo que tarda en resetear los cambios para ver si estan vacias
    setTimeout(() => {
      expect(component.errorMessage).toBe('');
      expect(component.successMessage).toBe('');
    }, 2000);
  });
});
