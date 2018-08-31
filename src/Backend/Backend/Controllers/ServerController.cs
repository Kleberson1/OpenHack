using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    public class ServerController : Controller
    {
        static Random g_random = new Random();
        Kub _kub;

        public ServerController(Kub kub)
        {
            _kub = kub;
        }

        [HttpGet("count")]
        public int GetCount()
        {
            var svcs = _kub.ListServices();
            return svcs.Items.Count;
        }

        [HttpGet("players")]
        public int GetPlayersCount()
        {
            var svcs = _kub.ListServices();

            int total = 0;
            using (var req = new HttpClient())
            {
                foreach(var item in svcs.Items)
                {
                    string ip = item.Status?.LoadBalancer?.Ingress?.FirstOrDefault()?.Ip;
                    if (ip == null)
                        continue;

                    string url = $"https://mcapi.us/server/status?ip={ip}&port=25565";

                    string result = req.GetAsync(url).Result.Content.ReadAsStringAsync().Result;
                    dynamic json = JsonConvert.DeserializeObject(result);

                    var count = (int)json.players.now;

                    total += count;
                }
            }

            return total;
        }

        [HttpGet("autoscale")]
        public string AutoScale()
        {
            var svcs = _kub.ListServices();

            int total = 0;
            int n = 0;
            using (var req = new HttpClient())
            {
                foreach (var item in svcs.Items)
                {
                    string ip = item.Status?.LoadBalancer?.Ingress?.FirstOrDefault()?.Ip;
                    if (ip == null)
                        continue;

                    string url = $"https://mcapi.us/server/status?ip={ip}&port=25565";

                    string result = req.GetAsync(url).Result.Content.ReadAsStringAsync().Result;
                    dynamic json = JsonConvert.DeserializeObject(result);

                    var count = (int)json.players.now;

                    total += count;
                    n++;
                }
            }

            int avgCount = total / n;

            return avgCount.ToString();
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
                                minecraft = (svc.Status?.LoadBalancer?.Ingress?.FirstOrDefault()?.Ip ?? localhost) + ":25565",
                                rcon = (svc.Status?.LoadBalancer?.Ingress?.FirstOrDefault()?.Ip ?? localhost) + ":25575"
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

        // GET api/server/create/id
        [Route("create")]
        public string Create()
        {
            string id = "tm" + g_random.Next(100000).ToString();
            _kub.CreatePod(id, "pod.yml");
            _kub.CreateService(id, "service.yml");

            return "Instance=" + id;
        }

        // GET api/server/create/id
        [Route("delete/{id}")]
        public void Delete(string id)
        {
            _kub.DeleteService(id);
            _kub.DeletePod(id);
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
