using Bluebook.DataService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Bluebook.DBConnector;
using MongoDB.Driver;

namespace Bluebook.Models
{
    public class CategoryModel
    {

        public int CatID { get; set; }
        public string CategoryName { get; set; }

        public bool IsActive { get; set; }

        //   GetCategoryData();
    }

    public class CatRepo
    {
        public CategoryModel[] GetAllCategory()
        {
            return new CategoryModel[]
            {
               new CategoryModel
               {
                   CatID =1,
                   CategoryName = "Food",
                   IsActive = true
               },
               new CategoryModel
               {
                   CatID =2,
                   CategoryName = "Sports",
                    IsActive = true
               },
               new CategoryModel
               {
                   CatID =3,
                   CategoryName = "Travel",
                    IsActive = true
               },
               new CategoryModel
               {
                   CatID =4,
                   CategoryName = "LOL",
                    IsActive = true
               },
               new CategoryModel
               {
                   CatID =5,
                   CategoryName = "Party",
                    IsActive = true
               },
                new CategoryModel
               {
                   CatID =6,
                   CategoryName = "Dummy",
                    IsActive = false
               },
            };

        }
    }
}