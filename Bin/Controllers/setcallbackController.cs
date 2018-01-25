using System.Web.Http.WebHost;
using System.Net.Http.Formatting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Web;
using System.Web.Mvc;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.Services;
using System.Net;
using System.Net.Mail;

using System.Net.Http;
using System.Web.Http;

namespace Tempo_housing.models.models.models
{
    public class setcallbackController : ApiController
    {
        [System.Web.Mvc.HttpPost]
        public string Settingcallback(callbackschedule setcallback) {

            string body = setcallback.comments + "  " + "my name is:  " + setcallback.name + "  " + " email:  " + setcallback.email + "  " + "no.:  " + setcallback.number + "  company:  " + setcallback.company;
            var smtp = new System.Net.Mail.SmtpClient();
            {
                //smtp.Host = "smtp.gmail.com";
                //smtp.Port = 587;
                //smtp.EnableSsl = true;
                //smtp.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
                //smtp.Credentials = new NetworkCredential("sugaryleonard@gmail.com", "seth2016");
                //smtp.Timeout = 10000;
            }
            smtp.Send("sugaryleonard@gmail.com", setcallback.receiptemail, "Please give me a callback", body);
            return setcallback.name;
        }
    }
}
