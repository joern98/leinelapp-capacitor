import { Component } from '@angular/core';
import { SSH, SSHConnectOptions } from 'capacitor-ssh';
import ansiRegex from 'ansi-regex';

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
      host: "192.168.145.23",
      username: "joern-admin",
      password: "Porto.in.Portugal-2025%",
    }
    const {sessionId} = await SSH.connect({connection: sshConnectOptions});
    console.log(`got session id ${sessionId} from plugin`);

    const {shellId} = await SSH.startShell({sessionId});
    console.log(`started shell on session ${sessionId} with id ${shellId}`);

    SSH.addListener("shellData", (event) => {
      console.log(event.data.replaceAll(ansiRegex(), ""));
    })



  }
}



