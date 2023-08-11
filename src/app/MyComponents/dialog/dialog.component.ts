import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  taskForm!: FormGroup;
  statuses = [
    { value: 'Todo', viewValue: 'Todo' },
    { value: 'Inprogress', viewValue: 'Inprogress' },
    { value: 'Onhold', viewValue: 'Onhold' },
    { value: 'Completed', viewValue: 'Completed' },
  ];
  constructor(private frm: FormBuilder, public dialogRef: MatDialogRef<any>) { }
  
  ngOnInit() {
    this.taskForm = this.frm.group({
      task: '',
      desc: '',
      status: '',
    })
  }

  onSubmit(){
    this.dialogRef.close(this.taskForm.value);
  }
}
