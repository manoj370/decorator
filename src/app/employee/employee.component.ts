import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Output() clickemitref=new EventEmitter();
GetEmployeeSalDetailsFromParent()
{
this.clickemitref.emit();
}
  constructor() { }

  ngOnInit() {
  }

}
