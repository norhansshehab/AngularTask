import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { Student } from '../student';
import { StudentSubject } from '../student-subject/student-subject';
import { StdSubService } from '../student-subject/std-sub.service';
import { StudentService } from '../student.service';
import { SubjectService } from 'src/app/Project/subject.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
 
  subjects:Subject[]=[];
  students:Student[]=[];
  selectedID : number;
  arrStdSub : StudentSubject[] = [];

  nstdsub:StudentSubject=new StudentSubject(0,0,'');

  // Grade:number;
  constructor(private stdSubjServ:StdSubService,private stdServ:StudentService, private subService: SubjectService) { }
  
    ngOnInit()
    {
      //this.showAllStudentSubject();
      this.subService.GetAllSubjects().subscribe(a => this.subjects = a);
    }
  
    getID(std){
      this.nstdsub=std;
      // this.nstdsub.Grade=this.Grade.toString();
    }
  showAllStudentSubject()
  {
    this.stdSubjServ.getAllStudents().subscribe(
      a=>this.students=a
    );
    this.stdSubjServ.getAllSubjects().subscribe(a=>this.subjects=a);
  }


  GetAllStudentBySubjectId()
{
  //this.stdSubjServ.getAllStudentsBySubjectId(Id).subscribe(a=>this.students=a);
  // this.stdSubjServ.getAllStudentSubjects().subscribe(a=> this.arrStdSub= a.filter(x=>x.SubjectID == Id))

  this.stdSubjServ.getAllStudentSubjects().subscribe(
    data => 
    {
this.arrStdSub=[];
      data.forEach(element => {
        if(element.SubjectId == this.selectedID){
          console.log("inside if");
          
          this.arrStdSub.push(element);
          console.log(this.arrStdSub);
          
        }
        
      });
    }
  )
  
} 

UpdateDegree(){
  // this.nstdsub.Grade=this.Grade.toString();
  console.log(this.nstdsub.Grade)
  this.stdSubjServ.EditGrade(this.nstdsub.StudentId,this.nstdsub).subscribe(
    a=> console.log("done"+a),
    err=>console.log(err)
  )
  // this.arrStdSub=null;
  // this.GetAllStudentBySubjectId();
  alert("done");
  
}


}
