
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


namespace Tempo_housing.models.models
{
    public class mailController : ApiController
    {          
        [System.Web.Mvc.HttpPost]
        public string Sendemail(email sending)
        {
                if (sending.varchitect == true)
                {
                    sending.vfeild = "Architect";

                }
                else if (sending.vcontractor == true)
                {
                    sending.vfeild = "Contractor";
                }
                else if (sending.vgovernment == true)
                {
                    sending.vfeild = "Contractor";
                }
                else if (sending.vhospitality == true)
                {
                    sending.vfeild = "Hospitality";
                }
                else if (sending.vhousing_corporation == true)
                {
                    sending.vfeild = "Housing corporation";
                }
                else if (sending.vproject_development == true)
                {
                    sending.vfeild = "Project Development";
                }
                else if (sending.vsupplier == true)
                {
                    sending.vfeild = "Supplier";
                }
                else if (sending.vmedia == true)
                {
                    sending.vfeild = "Media";
                }
                else if (sending.vother == true)
                {
                    sending.vfeild = "Other";
                }

                if (sending.vnewsletter == true)
                {
                    sending.vnews = "Please send me a newsletter";
                }
                else
                {
                    sending.vnews = "I don't want a newsletter";
                }

                string body = sending.vremarks + "   " + "my name is:  " + sending.vname + "  " + " email:  " + sending.vemailreference + "  " + "no.:  " + sending.vphone + "  feild:  " + sending.vfeild + "   " + sending.vnews;

                var smtp = new System.Net.Mail.SmtpClient();
                {
                //smtp.Host = "smtp.gmail.com";
                //smtp.Port = 587;
                //smtp.EnableSsl = true;
                //smtp.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
                //smtp.Credentials = new NetworkCredential("sugaryleonard@gmail.com", "seth2016");
                //smtp.Timeout = 10000;
                }
                MailMessage mailMsg = new MailMessage("sugaryleonard@gmail.com", sending.vemail, sending.vsubject, body);
                mailMsg.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;
                smtp.Send(mailMsg);               

                //smtp.Send("sugaryleonard@gmail.com", sending.vemail, sending.vsubject, body);

                return sending.vname;
        }
    }
}