import { Student } from 'src/app/Project/student';
import { Subject } from 'src/app/Project/subject';

export class StudentSubject {
    constructor(
        public StudentId:number, 
        public SubjectId:number,
        public Grade?:string, 
        public student?: Student,
        public subject? : Subject
        ){}
}
