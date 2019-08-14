import { Component, OnInit } from '@angular/core';
import {Subject} from '../Subject';
import {SubjectService} from '../subject.service'


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects : Subject[]= [];
  newSubj:Subject = new Subject(0, "");
  displayedColumns: string[] = ['Id','Name', 'Operations'];
  flag : boolean;
  

  constructor(private subServiceObj : SubjectService) { }

  ngOnInit() {
    this.GetAll();
  }

  GetAll(){
    this.subServiceObj.GetAllSubjects().subscribe(a=>this.subjects=a, err=>console.log(err))
  }



  DeleteSubject(id:number){
    this.subServiceObj.DeleteSubject(id).subscribe(a => this.GetAll())
  }

  GetSubjectData(id:number){
    this.flag = true;
    
    this.subServiceObj.GetSubByID(id).subscribe(a => this.newSubj = a)
  }

  addNewSubject(){
    this.subServiceObj.AddSubj(this.newSubj).subscribe(a => this.subjects.push(a))
  }

  EditSubject(){
    this.subServiceObj.EditSubject(this.newSubj.Id, this.newSubj).subscribe(a => this.GetAll())    
  }

}
