using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using k8s;
using k8s.Models;

namespace Backend
{
    public class Kub
    {
        public static void Teste()
        {
            var yml = Yaml.LoadFromFileAsync<V1Pod>("nginx.yml").Result;

            var config = KubernetesClientConfiguration.BuildConfigFromConfigFile();
            if( config.AccessToken == null )
            {
                config = new KubernetesClientConfiguration { Host = "http://127.0.0.1:8001" };
            }

            var client = new Kubernetes(config);

            bool hasNginx = false;

            var list = client.ListNamespacedPod("default");
            foreach (var item in list.Items)
            {
                Console.WriteLine(item.Metadata.Name);

                if (item.Metadata.Name == "nginx")
                {
                    hasNginx = true;
                }
            }

            if(!hasNginx)
            {
                client.CreateNamespacedPod(yml, "default");
            }
        }
    }
}
