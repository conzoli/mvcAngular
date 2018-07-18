using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace mvcAngular.Controllers
{

    [Route("api/a")]
    public class CourseDataController : Controller
    {
        
        [HttpGet("[action]")]
        public string[] GetCourses(){


            Console.WriteLine("Hiiiiiieeeeeerrrr");

            string[] Course = {"Course1 from WebApi", "Course2"};

            List<string> ListCourse = new List<string>();

            foreach(var c in Course){
                ListCourse.Add(c);
            }

            for(int i = 1; i <= 100; i++){
                ListCourse.Add($"Course{i}");
            }

            return ListCourse.ToArray();

        }

    }
}