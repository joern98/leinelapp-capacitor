import { Component } from '@angular/core';
import { SSH, SSHConnectOptions } from 'capacitor-ssh';

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
    const sshConnectOptions: SSHConnectOptions = {
      host: "",
      username: "",
    }
    const {sessionId} = await SSH.connect({connection: sshConnectOptions});
    console.log(`got session id ${sessionId} from plugin`);

  }
}



