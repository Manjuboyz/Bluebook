using Bluebook.DataService;
using Bluebook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Bluebook.DBConnector;
using MongoDB.Driver;

namespace Bluebook.CategoryList
{
    public class CategoryController : ApiController
    {

        private CatRepo categoryRepo;
        private DBContext dbContext;
      //  private ICategory getAllCategory;

        /// <summary>
        /// Initialize the constructor
        /// </summary>
        public CategoryController()
        {
            this.categoryRepo = new CatRepo();
            
        }

        //public string Get()
        //public CategoryModel[] Get()
        //{
        //    // return getAllCategory.GetAllCategory();
        //      return categoryRepo.GetAllCategory();

        //}

        public /*MongoCollection<List<CategoryMongoRoot>>*/ void Get()
        {
            // return getAllCategory.GetAllCategory();
            //           return categoryRepo.GetAllCategory();

            DBContext db = new DBContext();
            db.GetCollection();

        }

       



    }
}
