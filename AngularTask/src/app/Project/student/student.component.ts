import { Component, OnInit } from '@angular/core';
import {StudentService}from '../student.service'
import {Student} from '../Student'
import { StdSubService } from 'src/app/Project/student-subject/std-sub.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  students:Student[];
  displayedColumns: string[] = ['Id','Name', 'Age', 'Operations'];
  
  
  std:Student=new Student(0,"",0);

  flag : boolean;
  constructor(private stdServ:StudentService, private std_sub : StdSubService) { }
  
addstudent()
{
  this.stdServ.AddNewStudent(this.std).subscribe(a=>this.GetAllStudent());
}
DetailsStudent(Id:number)
{
  this.flag = true;
   this.stdServ.GetStudentById(Id).subscribe(a=>this.std=a)
}

Editstudent()
{
  this.stdServ.EditStudent(this.std.Id,this.std).subscribe(a=>this.GetAllStudent())
}

DeleteStudent(Id:number)
{
  this.stdServ.DeleteStudent(Id).subscribe(a=>{
    this.std_sub.DeleteStdSub(Id);
    this.GetAllStudent();
  });

}
GetAllStudent()
{
  this.stdServ.GetAllStudents().subscribe(a=>this.students=a);
}


  ngOnInit() {
  this.stdServ.GetAllStudents().subscribe(a=>this.students=a);

  }

}
