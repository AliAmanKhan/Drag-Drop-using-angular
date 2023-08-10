import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  taskForm!: FormGroup;
  statuses = [
    {value: 'Todo', viewValue: 'Todo'},
    {value: 'Inprogress', viewValue: 'Inprogress'},
    {value: 'Onhold', viewValue: 'Onhold'},
    {value: 'Completed', viewValue: 'Completed'},
  ];
  constructor (private frm: FormBuilder, public dialogRef: MatDialogRef<any>){}

  ngOnInit(){
    this.taskForm = this.frm.group({
      task: '',
      desc: '',
      status: '',
    })
  }

  // Function to set the data in localStorage on form submission
  public onFormSubmit(){
    if(this.taskForm.valid){
      console.log(this.taskForm.value);
      let formValue = this.taskForm.value;
      if(formValue.status==="Todo"){
        localStorage.setItem('dataTodo', JSON.stringify(formValue)); 
      }
      if(formValue.status==="Inprogress"){
        localStorage.setItem('dataInprogress', JSON.stringify(formValue)); 
      }
      if(formValue.status==="Onhold"){
        localStorage.setItem('dataOnhold', JSON.stringify(formValue)); 
      }
      if(formValue.status==="Completed"){
        localStorage.setItem('dataCompleted', JSON.stringify(formValue));
      }
    }
    this.dialogRef.close(this.taskForm.value);
  }


}
