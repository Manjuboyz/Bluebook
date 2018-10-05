using Bluebook.Models;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace Bluebook.DBConnector
{
    public class DBContext
    {
        //public static MongoClient client = new MongoClient("mongodb://ASPLB-DEV-00414:27017"); //use this only if you are not adding anything in Appsetting(Web.config)
        public static MongoClient client = new MongoClient(ConfigurationManager.AppSettings["MongoConnectionString"]);

        public static MongoServer server = client.GetServer();

        public static MongoDatabase db = server.GetDatabase("Bluebook");

        public /*MongoCollection<List<CategoryMongoRoot>>*/ void GetCollection()
        {
           // MongoCollection<List<CategoryMongoRoot>> Collection;

            if (db != null)
            {

                var Collection = db.GetCollection("Category");

               
                foreach (var item in Collection.FindAll())
                {
                    
                }
            }
            //else
            //{
            //    Collection = null;
            //}
            //return Collection;
        }
    }





}