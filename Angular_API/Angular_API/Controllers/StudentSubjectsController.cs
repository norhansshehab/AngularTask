using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Angular_API.Models;

namespace Angular_API.Controllers
{
    public class StudentSubjectsController : ApiController
    {
        private proj db = new proj();

        

        // GET: api/StudentSubjects
        public IQueryable<StudentSubject> Getstudentssubjects()
        {
            return db.studentssubjects.Include(a=>a.student).Include(b=>b.subject);
        }

        // GET: api/StudentSubjects/5
        [ResponseType(typeof(StudentSubject))]
        public IHttpActionResult GetStudentSubject(int id)
        {
            StudentSubject studentSubject = db.studentssubjects.Find(id);
            if (studentSubject == null)
            {
                return NotFound();
            }

            return Ok(studentSubject);
        }


        //[HttpGet]
        //[Route("api/{stssub}/{id}")]
        //public IHttpActionResult GetStudentsBySubjectId(int id)
        //{
        //    List<DataViewModel> ss = new List<DataViewModel>();

        //    List<StudentSubject> studentSubject = db.studentssubjects.Where(x => x.SubjectId == id).ToList();

        //    foreach (var item in studentSubject)
        //    {
        //        string name = db.students.Single(x => x.Id == item.student.Id).Name;
        //        ss.Add(new DataViewModel() { Id = item.StudentId, Grade = item.Grade, Name = name });
        //    }

        //    if (ss == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(ss);
        //}

        // PUT: api/StudentSubjects/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStudentSubject(int id, StudentSubject studentSubject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != studentSubject.StudentId)
            {
                return BadRequest();
            }

            db.Entry(studentSubject).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentSubjectExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/StudentSubjects
        [ResponseType(typeof(StudentSubject))]
        public IHttpActionResult PostStudentSubject(StudentSubject studentSubject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.studentssubjects.Add(studentSubject);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (StudentSubjectExists(studentSubject.StudentId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = studentSubject.StudentId }, studentSubject);
        }

        // DELETE: api/StudentSubjects/5
        [ResponseType(typeof(StudentSubject))]
        public IHttpActionResult DeleteStudentSubject(int id)
        {
            StudentSubject studentSubject = db.studentssubjects.Find(id);
            if (studentSubject == null)
            {
                return NotFound();
            }

            db.studentssubjects.Remove(studentSubject);
            db.SaveChanges();

            return Ok(studentSubject);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StudentSubjectExists(int id)
        {
            return db.studentssubjects.Count(e => e.StudentId == id) > 0;
        }
    }
}