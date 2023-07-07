import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor() {}

  ngOnInit(): void {
    //se crea el formulario al iniciar el componente
    this.createForm();
  }

  createForm() {
    // configuracion de el formulario y sus Formcontrols
    this.form = new FormGroup({
      productName: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
      }),
      productPrice: new FormControl(null, {
        validators: [Validators.required, Validators.min(5), Validators.max(20)],
      }),
    });
  }

  onSubmit() {
    //checkea si el formulario es valido y asigna los valores a los mensages
    if (this.form.invalid) {
      this.errorMessage = 'Formulario incorrecto';
      this.successMessage = '';
    } else {
      this.successMessage = `Formulario correcto, Nombre producto: ${this.form.value.productName}, precio:${this.form.value.productPrice}`;
      this.errorMessage = '';
    }
    this.formReset();
  }

  formReset() {
    //resetea el formulario y después vacia los mensajes de error
    setTimeout(() => {
      this.form.reset();
      this.errorMessage = '';
      this.successMessage = '';
      console.log('error', this.errorMessage);
      console.log('succes', this.successMessage);
    }, 2000);
  }
}
