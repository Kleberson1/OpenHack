using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using k8s;
using k8s.Models;
using Microsoft.AspNetCore.JsonPatch;

namespace Backend
{
    public class Kub
    {
        Kubernetes _client;

        public Kub()
        {
            KubernetesClientConfiguration config = null;
            try
            {
                config = KubernetesClientConfiguration.InClusterConfig();
            }
            catch { }
            
            if (config == null)
            {
                config = new KubernetesClientConfiguration { Host = "http://127.0.0.1:8001" };
            }

            _client = new Kubernetes(config);            
        }

        public V1PodList ListPods()
        {
            return _client.ListNamespacedPod("default", labelSelector: "tenant");
        }

        public V1ServiceList ListServices()
        {
            return _client.ListNamespacedService("default", labelSelector: "tenant");
        }

        public string CreatePod(string tenant, string filename)
        {
            var yml = Yaml.LoadFromFileAsync<V1Pod>(filename).Result;
            yml.Metadata.Labels.Add("tenant", tenant);
            var pod = _client.CreateNamespacedPod(yml, "default");

            return pod.Metadata.Name;
        }

        public string CreateService(string tenant, string filename)
        {
            var yml = Yaml.LoadFromFileAsync<V1Service>(filename).Result;
            yml.Metadata.Labels.Add("tenant", tenant);
            yml.Spec.Selector.Add("tenant", tenant);
            var svc = _client.CreateNamespacedService(yml, "default");
            return svc.Metadata.Name;
        }

        public void DeletePod(string tenant)
        {
            var pods = _client.ListNamespacedPod("default", labelSelector: "tenant=" + tenant);

            foreach(var pod in pods.Items)
            {
                //_client.DeleteNamespacedPod();
            }
        }

        public void DeleteService(string tenant)
        {

        }

        public static void Teste()
        {
            var kub = new Kub();

            bool hasNginx = false;

            var list = kub.ListServices();

            foreach (var item in list.Items)
            {
                Console.WriteLine(item.Metadata.Name);

                if (item.Metadata.Name == "nginx")
                {
                    hasNginx = true;
                }
            }

            //kub.CreatePod("t1", "pod.yml");
            //kub.CreateService("t1", "service.yml");
        }


    }
}
