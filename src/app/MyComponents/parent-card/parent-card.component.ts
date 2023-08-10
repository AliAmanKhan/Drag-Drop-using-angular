import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-parent-card',
  templateUrl: './parent-card.component.html',
  styleUrls: ['./parent-card.component.css']
})
export class ParentCardComponent {
  task!: string;
  desc!: string;

  todo = JSON.parse(JSON.stringify(localStorage.getItem('dataTodo')));
  inProgress = JSON.parse(JSON.stringify(localStorage.getItem('dataInprogress')));
  onHold = JSON.parse(JSON.stringify(localStorage.getItem('dataOnhold')));
  completed = JSON.parse(JSON.stringify(localStorage.getItem('dataCompleted')));

  constructor(public dialog: MatDialog){
    console.log(this.todo);
  }
  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent, {
    });
  }
}
