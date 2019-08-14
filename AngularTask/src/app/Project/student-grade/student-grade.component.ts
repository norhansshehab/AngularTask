import { Component, OnInit } from '@angular/core';
import { StudentSubject } from 'src/app/Project/student-subject/student-subject';
import { StdSubService } from 'src/app/Project/student-subject/std-sub.service';
import { Subject } from 'src/app/Project/subject';
import { SubjectService } from 'src/app/Project/subject.service';
import { StudentService } from 'src/app/Project/student.service';
import { Student } from 'src/app/Project/student';

@Component({
  selector: 'app-student-grade',
  templateUrl: './student-grade.component.html',
  styleUrls: ['./student-grade.component.css']
})
export class StudentGradeComponent implements OnInit {

  selectedID: number = 0;
  arrStdSub: StudentSubject[] = [];

  students: Student[] = [];

  displayedColumns: string[] = ['Name', 'Age', 'Subject', 'Grade'];
  
  constructor(private stdSubService: StdSubService, private stdService: StudentService) { }

  ngOnInit() {
    this.stdService.GetAllStudents().subscribe(a => this.students = a)
  }

  GetStudentData() {
    this.stdSubService.getAllStudentSubjects().subscribe(data => 
      {
        console.log(data);
        console.log(this.selectedID);

        data.forEach(element => {
          if(element.StudentId == this.selectedID){
            console.log("inside if");
            
            this.arrStdSub.push(element);
            console.log(this.arrStdSub);
            
          }
        });
        
        
      }
    );
  }

}
