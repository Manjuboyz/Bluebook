using Bluebook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bluebook.DataService
{
    interface ICategory
    {
        CategoryModel[] GetAllCategory();
    }


    
}
