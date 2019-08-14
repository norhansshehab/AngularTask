import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student} from '../student';
import {Subject} from '../subject';
import { StudentSubject } from './student-subject';

@Injectable({
  providedIn: 'root'
})
export class StdSubService {

  STDbaseurl:string="http://localhost:12734/api/students/";
  SUBbaseurl:string="http://localhost:12734/api/subjects/";
  StdSubbaseurl:string="http://localhost:12734/api/StudentSubjects";
  StudentSubjectData:string="http://localhost:12734/api/stdsub/"

  constructor(private http:HttpClient) { }
  

  getAllStudentsBySubjectId(Id:number){
    return this.http.get<Student[]>(this.StudentSubjectData+Id);
  }

  getAllStudents(){
    return this.http.get<Student[]>(this.STDbaseurl);
  }

  getAllSubjects(){
    return this.http.get<Subject[]>(this.SUBbaseurl);
  }
  getAllStudentSubjects(){
    return this.http.get<StudentSubject[]>(this.StdSubbaseurl);
  }

  addStudentSubject(stdsub:StudentSubject){
    return this.http.post<StudentSubject>(this.StdSubbaseurl,stdsub);
  }

 
  DeleteStdSub(id:number){
    return this.http.delete<StudentSubject>(this.StdSubbaseurl + "/" + id);
  }

  EditGrade(stdID:number, std_sub:StudentSubject)
  {
    return this.http.put<StudentSubject>(this.StdSubbaseurl + "/" + stdID, std_sub);
    
  }


}
