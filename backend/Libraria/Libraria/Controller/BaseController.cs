using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace Libraria.Controller
{
    [Route("api/[controller]")]
    public class BaseController : ControllerBase
    {
       
        // GET api/values/5
        [HttpGet("test-method")]
        public string TestPing(int id)
        {
            return "value";
        }

       
    }
}
