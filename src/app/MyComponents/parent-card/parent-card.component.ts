import { Component, Input, OnInit  } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-parent-card',
  templateUrl: './parent-card.component.html',
  styleUrls: ['./parent-card.component.css']
})
export class ParentCardComponent implements OnInit {

  @Input() tasksArray: any[] = [];
  // @Input() inprogressData: any[] = [];
  // @Input() onHoldData: any[] = [];
  // @Input() completedData: any[] = [];

  
  todoData: any[] = [];
  inprogressData: any[] = [];
  onHoldData: any[] = [];
  completedData: any[] = [];  

  constructor(public dialog: MatDialog){
    // this.loadData();

  }

  ngOnInit(): void {
    const storedTodo = localStorage.getItem('dataTodo');
    const storedInprogress = localStorage.getItem('dataInprogress');
    const storedOnhold = localStorage.getItem('dataOnhold');
    const storedCompleted = localStorage.getItem('dataCompleted');

    if(storedTodo){
      this.todoData = JSON.parse(storedTodo);
    }else{
      
    localStorage.setItem('dataTodo', JSON.stringify(this.todoData));
    }
    if(storedInprogress){
      this.inprogressData = JSON.parse(storedInprogress);
    }else{
      
    localStorage.setItem('dataInprogress', JSON.stringify(this.inprogressData));
    }
    if(storedOnhold){
      this.onHoldData = JSON.parse(storedOnhold);
    }else{
      
    localStorage.setItem('dataOnhold', JSON.stringify(this.onHoldData));
    }
    if(storedCompleted){
      this.completedData = JSON.parse(storedCompleted);
    }else{
      
    localStorage.setItem('dataCompleted', JSON.stringify(this.completedData));
    }
    // this.saveToLocalStorage();
    
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.status === 'Todo'){
        this.todoData = [...this.todoData,result]
      }
      // this.dataSource = [...this.dataSource,result]
      // localStorage.setItem('formData', JSON.stringify([...this.dataSource]));
      // this.filterValues(this.dataSource);
      // this.dataLet = [...this.dataSource];
      if(result.status === 'Inprogress'){
        this.inprogressData = [...this.inprogressData,result]
      }
      if(result.status === 'Onhold'){
        this.onHoldData = [...this.onHoldData,result]
      }
      if(result.status === 'Completed'){
        this.completedData = [...this.completedData,result]
      }
      this.saveToLocalStorage();
    });
  }
  saveToLocalStorage(){
    localStorage.setItem('dataTodo', JSON.stringify(this.todoData));
    localStorage.setItem('dataInprogress', JSON.stringify(this.inprogressData));
    localStorage.setItem('dataOnhold', JSON.stringify(this.onHoldData));
    localStorage.setItem('dataCompleted', JSON.stringify(this.completedData));
  }
  deleteTodo(task: string) {
    this.todoData = this.todoData.filter((item) => item.task !== task);
    this.saveToLocalStorage();
  }
  deleteInprogress(task: string) {
    this.inprogressData = this.inprogressData.filter((item) => item.task !== task);
    this.saveToLocalStorage();
  }
  deleteOnhold(task: string) {
    this.onHoldData = this.onHoldData.filter((item) => item.task !== task);
    this.saveToLocalStorage();
  }
  deleteCompleted(task: string) {
    this.completedData = this.completedData.filter((item) => item.task !== task);
    this.saveToLocalStorage();
  }
  
  drop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.saveToLocalStorage();
    } else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
      this.saveToLocalStorage();
    }
  }

}
