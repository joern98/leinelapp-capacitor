import { Component } from '@angular/core';
import { SSH } from 'capacitor-ssh';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  public async onButtonSSH(event: Event){
    event.preventDefault();
    
    console.log("try ssh");
    const response = await SSH.echo({value: "Hello capacitor-ssh"});
    console.log(response.value);
  }
}



