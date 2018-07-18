using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using mvcAngular.ClientApp.Models;
using Newtonsoft.Json;

namespace mvcAngular.Controllers
{
   
    public class NameDataController : Controller
    {
        [Route("api/b/name")]
        [HttpPost]
        
        public ActionResult<string> inserName([FromBody] MyName _name){

            Console.WriteLine(" ----------> " + _name.Vorname + " " + _name.Name  );
            
            return  JsonConvert.SerializeObject("Done insert Name: " + _name.Name);

        }

    }
}