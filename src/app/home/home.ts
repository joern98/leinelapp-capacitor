import { Component, computed, linkedSignal, signal } from '@angular/core';
import { SSH, SSHConnectOptions } from 'capacitor-ssh';
import ansiRegex from 'ansi-regex';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-home',
  imports: [FormField],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  inputModel = signal({
    text: "",
    privateKey: "",
  });
  inputForm = form(this.inputModel);

  private sessionId = ""

  shellOutput = signal("");


  public async onButtonSSH(event: Event){
    event.preventDefault();
    
    console.log("try ssh");
    const sshConnectOptions: SSHConnectOptions = {
      host: "localhost",
      port: 2222,
      username: "joern",
      // replace whitespaces in OpenSSH Key
      privateKey: this.inputForm.privateKey().value(),
      hostKeyVerification: "skip",
    };
    console.log(sshConnectOptions)
    const {sessionId} = await SSH.connect({connection: sshConnectOptions});
    console.log(`got session id ${sessionId} from plugin`);
    this.sessionId = sessionId
    await SSH.startShell({sessionId});
    console.log(`started shell on session ${sessionId}`);

    SSH.addListener("shellData", (event: any) => {
      const data = event.data.replaceAll(ansiRegex(), "");
      console.log(data);
      this.shellOutput.update((current: string) => current + data + "\n");
    })
  }

  public async onButtonWriteToShell(event: Event) {
    event.preventDefault();

    await SSH.write({sessionId: this.sessionId, data: this.inputForm.text().value()});
  }
}



