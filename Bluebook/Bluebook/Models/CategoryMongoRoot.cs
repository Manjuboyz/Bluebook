using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bluebook.Models
{
    public class CategoryMongoRoot
    {

        public ObjectId _id { get; set; }
        public DateTime Enqueued { get; set; }
        public Category _category { get; set; }





    }

    public class Category
    {
        public string CategoryId { get; set; }
        public string Description { get; set; }
        public string IsActive { get; set; }
    }


    //public class Input
    //{
    //    public List<Category> Category { get; set; }
    //}
}