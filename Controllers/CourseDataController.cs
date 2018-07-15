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

            string[] retValues = {"Course1 from WebApi", "Course2"};

            return retValues;

        }

    }
}