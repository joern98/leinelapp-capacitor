import { Component } from '@angular/core';
import { NetUtils } from "net-utils"

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  public async onButtonSSH(event: Event){
    event.preventDefault();

    console.log("i am here");
    const s = await NetUtils.checkUrl({url: "google.com"});
    console.log(s);
    const session = await NetUtils.ssh.connect({host: "192.168.145.23", port: 22, password: "Porto.in.Portugal-2025%", username: "joern-admin"})
  }
}
