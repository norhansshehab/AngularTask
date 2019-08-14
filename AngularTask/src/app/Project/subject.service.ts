import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'src/app/Project/subject';
import { Student } from 'src/app/Project/student';


@Injectable()
export class SubjectService {
  baseUrl_subj : string="http://localhost:12734/api/subjects";
  StudentSubjectData:string="http://localhost:12734/api/stdsub/"
  

  constructor(private http : HttpClient) { }


  GetAllSubjects(){
    return this.http.get<Subject[]>(this.baseUrl_subj);
  }

  GetSubByID(id:number){
    return this.http.get<Subject>(this.baseUrl_subj + "/" + id);
  }

  AddSubj(sub:Subject){
    return this.http.post<Subject>(this.baseUrl_subj, sub)
  }

  DeleteSubject(id:number){
    return this.http.delete<Subject>(this.baseUrl_subj + "/" + id);
  }

  EditSubject(id:number, sub:Subject)
  {
    return this.http.put<Subject>(this.baseUrl_subj + "/" + id, sub);
    
  }

  getAllStudentsBySubjectId(Id:number){
    return this.http.get<Student[]>(this.StudentSubjectData+Id);
  }
  
}
