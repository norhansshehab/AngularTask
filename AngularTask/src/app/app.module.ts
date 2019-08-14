import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{StudentComponent}from './Project/student/student.component'
import{SubjectComponent}from './Project/Subject/Subject.component'
import {FormsModule} from '@angular/forms'
import { StudentService } from './Project/student.service';
import { SubjectService } from './Project/subject.service';
import { StudentSubjectComponent } from './Project/student-subject/student-subject.component';
import { AddDataComponent } from './Project/add-data/add-data.component';
import { ErrorComponent } from './Project/error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentGradeComponent } from './Project/student-grade/student-grade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatCardModule, MatMenuModule, MatTableModule, MatSelectModule} from '@angular/material';
import { CustomFormsModule } from 'ng2-validation'


const appRoutes : Routes =[
{ path:'', component: StudentComponent },
{ path:'student', component: StudentComponent },
{ path:'subject', component: SubjectComponent },
{ path:'AddData', component: AddDataComponent },
{ path:'StudentSubject', component: StudentSubjectComponent },
{ path:'StudentGrade', component: StudentGradeComponent },
{ path:'**', component: ErrorComponent }
]

@NgModule({
  declarations: 
  [
    AppComponent,
    SubjectComponent,
    StudentComponent,
    StudentSubjectComponent,
    AddDataComponent,
    ErrorComponent,
    StudentGradeComponent
 
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [StudentService,SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
