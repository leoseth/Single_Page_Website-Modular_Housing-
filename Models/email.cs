using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tempo_housing.models.models.models
{
    public class email
    {
        public string vname { get; set; }
        public string vemail { get; set; }
        public string vemailreference { get; set; }
        public string vphone { get; set; }
        public string vsubject { get; set; }
        public Boolean varchitect { get; set; }
        public Boolean vcontractor { get; set; }
        public Boolean vgovernment { get; set; }
        public Boolean vhospitality { get; set; }
        public Boolean vhousing_corporation { get; set; }
        public Boolean vproject_development { get; set; }
        public Boolean vsupplier { get; set; }
        public Boolean vmedia { get; set; }
        public Boolean vother { get; set; }
        public Boolean vnewsletter { get; set; }
        public string vfeild { get; set; }
        public string vnews { get; set; }
        public string vremarks { get; set; }
    }

    public class callbackschedule
    {
        public string  receiptemail { get; set; }
        public string  name         { get; set; }
        public string  company      { get; set; }
        public decimal number       { get; set; }
        public string  email        { get; set; }
        public string  comments     { get; set; }
    }
}