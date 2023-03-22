import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild';
  @ViewChild ('calendarDateInput') date!: ElementRef;
  @ViewChild('vikramSamvatInput') vsDate!: ElementRef;
  @ViewChild (ChildComponentComponent, {static:true}) childCompProperty!:ChildComponentComponent;

  calculateVSYear(){ 
    let currentYear = new Date(this.date.nativeElement.value).getFullYear();
   let  vikramSamvatYear = currentYear +57;
    this.vsDate.nativeElement.value = vikramSamvatYear;
  }
}
