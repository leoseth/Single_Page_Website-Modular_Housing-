
//document.getElementById("phone").innerHTML = "UK :+44(0)77 9990 7527";
var app = angular.module('myapp', []);
app.controller('contactdetailscontroller', function ($scope, $http) {

    $scope.sendemail = function (sendmail) {

        var url = window.location.href        
        var arr = url.split("/");        
        var result = arr[0] + "//" + arr[2]

        console.log(url,"one");
        console.log(arr,"two");
        console.log(result,"three");                      

        if (count != 1) {
            var sending = { 'vname': $scope.name, 'vemail': 'voicecontact@yahoo.com', 'vemailreference': $scope.emailref, 'vphone': $scope.phone, 'vsubject': $scope.subject, 'varchitect': $scope.architect, 'vcontractor': $scope.contractor, 'vgovernment': $scope.government, 'vhospitality': $scope.hospitality, 'vhousing_corporation': $scope.housing_corporation, 'vproject_development': $scope.project_development, 'vsupplier': $scope.supplier, 'vmedia': $scope.media, 'vother': $scope.other, 'vnewsletter': $scope.newsletter, 'vremarks': $scope.remarks}
            count = 1
            $http({ url: result + '/mail/Sendemail', method: "POST", data: JSON.stringify(sending), dataType: 'json', headers: { 'Content-Type': 'application/json' } }).success(function (response) {
                alert("email sent successfully");
                count = 0;
                //window.location.href = "#contact";  
            }, function (failed) {
                alert("email failed");
            });
            return;
        }       
    }
});

app.controller('callbackController', function ($scope, $http) {

    $scope.calling = function () {
       window.location.href = "index-callback.html";  
    }  

    $scope.getcallback = function () {

        var url = window.location.href
        var arr = url.split("/");
        var result = arr[0] + "//" + arr[2];

        console.log(url, "one");
        console.log(arr, "two");
        console.log(result, "three");

        var setcallback = { 'receiptemail': "voicecontact@yahoo.com", 'name': $scope.form_name, 'company': $scope.form_company, 'number': $scope.form_number, 'email': $scope.form_email, 'comments': $scope.form_comments };

        $http({ url: result + '/setcallback/Settingcallback', method: "POST", data: JSON.stringify(setcallback), dataType: 'json', headers: { 'Content-Type': 'application/json' } }).success(function (response) {
            alert("Callback sent successfully");
            window.location.href = "#home";
        }, function (failed) {
            alert("email failed");
        });
        return;
    }
    
});

function requescallback() {
    document.getElementById("form_name").focus();
}

function sending_info() {

    //var url = window.location.href
    //var arr = url.split("/");
    //var result = arr[0] + "//" + arr[2]
   
    var sending = { 'vname': document.getElementById("name")["value"], 'vemail': 'voicecontact@yahoo.com', 'vemailreference': document.getElementById("emailref")["value"], 'vphone': document.getElementById("phone")["value"], 'vsubject': document.getElementById("subject")["value"], 'varchitect': document.getElementById("architect")["value"], 'vcontractor': document.getElementById("contractor")["value"], 'vgovernment': document.getElementById("government")["value"], 'vhospitality': document.getElementById("hospitality")["value"], 'vhousing_corporation': document.getElementById("housing_corporation")["value"], 'vproject_development': document.getElementById("project_development")["value"], 'vsupplier': document.getElementById("supplier")["value"], 'vmedia': document.getElementById("media")["value"], 'vother': document.getElementById("other")["value"], 'vnewsletter': document.getElementById("newsletter")["value"], 'vremarks': document.getElementById("remarks")["value"] }
    $.ajax({url:'mail/Sendemail',type: 'POST',data: JSON.stringify(sending), dataType: 'json',contentType: "application/json", success: function (response) {
            alert('information sent');
        }, error: function (response) {
            alert('Failed to send information');
        }
    });
    return;
}



