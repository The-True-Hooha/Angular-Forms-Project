import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ShareComponent } from './share/share.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-forms-project';

  constructor(private dialog : MatDialog){}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '40%',
      //height: '40%'
    });
  }

  openShare(){
    this.dialog.open(ShareComponent, {
      width: '40%',
      //height: '40%'
    })
  }

  
}
