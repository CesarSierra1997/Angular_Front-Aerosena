import { Component, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin() {
    // Aquí puedes realizar la lógica de autenticación, como enviar los datos al servidor
    // y verificar las credenciales. Por ahora, simplemente muestra los datos en la consola.
    alert('Usuario:'+this.username+'\nContraseña:'+ this.password);
  }

}
