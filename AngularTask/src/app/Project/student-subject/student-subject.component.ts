import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Student} from '../student';
import {Subject} from '../subject';
import { StudentSubject } from 'src/app/Project/student-subject/student-subject'
import { StdSubService } from './std-sub.service';


@Component({
  selector: 'app-student-subject',
  templateUrl: './student-subject.component.html',
  styleUrls: ['./student-subject.component.css']
})
export class StudentSubjectComponent implements OnInit {

  students:Student[]=[];
  subjects:Subject[]=[];
  studentSubjects:StudentSubject[]=[];



  newstds:number[]=[];
  newsubs:number[]=[];
  nstdsub:StudentSubject=new StudentSubject(2,2,'fkf');


  showAllStudentSubject()
  {
    this.stdsubser.getAllStudents().subscribe(
      a=>this.students=a
    );
    this.stdsubser.getAllSubjects().subscribe(a=>this.subjects=a);
  }


 AddStudentSubject(){
  this.newstds.forEach(s => {
    this.nstdsub.StudentId=s;
    this.newsubs.forEach(sub=>{
      this.nstdsub.SubjectId=sub;
      this.stdsubser.addStudentSubject(this.nstdsub).subscribe(a=>console.log("data added"));
      console.log(this.nstdsub);
    });
    
   });
   alert("done");
   
 }



  constructor(private stdsubser:StdSubService) { }

  ngOnInit() 
  {
    this.showAllStudentSubject();
  }

}
