using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using mvcAngular.ClientApp.Models;

namespace mvcAngular.Controllers
{
   
    public class NameDataController : Controller
    {
        [Route("api/b/name")]
        [HttpPost]
        public IdentityResult inserName([FromBody] MyName _name){

            Console.WriteLine(" ----------> " + _name.Vorname + " " + _name.Name  );
            
            return IdentityResult.Success;

        }

    }
}