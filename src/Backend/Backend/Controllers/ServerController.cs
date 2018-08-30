using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    public class ServerController : Controller
    {
        Kub _kub;

        public ServerController(Kub kub)
        {
            _kub = kub;
        }

        // GET api/values
        [HttpGet]
        public object Get()
        {
            var svcs = _kub.ListServices();
            string localhost = "127.0.0.1";

            var list = (from svc in svcs.Items
                        select new
                        {
                            name = svc.Metadata.Labels["tenant"],
                            endpoints = new
                            {
                                minecraft = (svc.Spec.LoadBalancerIP ?? localhost) + ":25565",
                                rcon = (svc.Spec.LoadBalancerIP ?? localhost) + ":25575"
                            }

                        }).ToArray();

            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
