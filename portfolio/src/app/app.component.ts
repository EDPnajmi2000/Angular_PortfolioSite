import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  newMemberName = "";
  members: string[] = [];

  addMember(){
    this.members.push(this.newMemberName);
    console.log(this.newMemberName);
  }

  changeNewMemberName(name:string){
    this.newMemberName = name;
  }
}
