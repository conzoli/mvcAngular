using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using mvcAngular.ClientApp.Models;

namespace mvcAngular.Controllers
{

    [Route("api/auth")]
    public class AuthController : Controller
    {
        
        //GET
        [HttpPost, Route("login")]

        public IActionResult Login([FromBody] LoginModel user)
        {

            if(user == null){
                return BadRequest("Invalid client request!");
            }

            // Achtung hier ist user hard im code:
            // noch in deb auslagern 

            if(user.UserName == "admin" && user.Password == "zeus"){

                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@123"));

                var signinCredentials = new SigningCredentials(secretKey,SecurityAlgorithms.HmacSha256);
                
                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, user.UserName)
                };


                var tokeOptions = new JwtSecurityToken(
                    issuer: "https://localhost:5001",
                    audience: "https://localhost:5001",
                    //claims: new List<Claim>(),
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(10),
                    signingCredentials: signinCredentials

                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);

                return Ok( new { Token = tokenString} );

            }
            else
            {
                return Unauthorized();
            }


        }

    }
}