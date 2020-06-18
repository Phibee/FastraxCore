using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FastraxCore.API.GraphQL.DTOs
{
    public class CreateDepartment
    {
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
