using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace mvcAngular.Controllers
{

    [Route("api/a")]
    [Authorize]
    public class CourseDataController : Controller
    {

        [HttpGet("[action]")]
        public string[] GetCourses(){


            string userId = User.Identity.Name;


            Console.WriteLine("User : " + userId + " hat die Course angeforder.");

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