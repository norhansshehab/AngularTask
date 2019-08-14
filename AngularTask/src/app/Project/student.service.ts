import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Student } from './student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  BaseUrl:string='http://localhost:12734/api/students';
  constructor(private http:HttpClient) { }


  GetAllStudents():Observable<Student[]>
  {
   return this.http.get<Student[]>(this.BaseUrl);
  }

  GetStudentById(Id:number):Observable<Student>
  {
    return this.http.get<Student>(this.BaseUrl +"/"+Id);
  }

  AddNewStudent(std:Student):Observable<Student>
  {
    return this.http.post<Student>(this.BaseUrl,std);
  }

  DeleteStudent(Id:number):Observable<Student>
  {
    return this.http.delete<Student>(this.BaseUrl +"/"+Id);
  }
  EditStudent(Id:number,std:Student):Observable<Student>
  {
    return this.http.put<Student>(this.BaseUrl+"/"+Id,std);
  }
}
