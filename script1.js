function validate()
{
var name = document.forms["RegForm"]["Name"];
var password = document.forms["RegForm"]["Password"];
var email = document.forms["RegForm"]["EMail"];
var district = document.forms["RegForm"]["district"];
var state = document.forms["RegForm"]["state"];
var cpass = document.forms["RegForm"]["cpass"];
var date = document.forms["RegForm"]["date"];
var time = document.forms["RegForm"]["time"];
var pay= document.forms["RegForm"]["pay"];

if (name.value == "") {
            window.alert("Please enter your name.");
            name.focus();
            return false;
        }

if (email.value == "") {
            window.alert(
              "Please enter a valid e-mail address.");
            email.focus();
            return false;
        }
if (district.value == "") {
            window.alert(
              "Please enter your District");
            district.focus();
            return false;
        }
if (state.value == "") {
            window.alert(
              "Please enter your State");
            state.focus();
            return false;
        }
if (password.value == "") {
            window.alert("Please enter your password");
            password.focus();
            return false;
        }
if (cpass.value == "") {
            window.alert(
              "Please confirm password");
            cpass.focus();
            return false;
        }
if (date.value == "") {
            window.alert(
              "Please Select Date");
            date.focus();
            return false;
        }
if (time.value == "") {
            window.alert(
              "Please enter time");
            time.focus();
            return false;
        }
if (pay.value == "") {
            window.alert(
              "Please enter payment Details");
            pay.focus();
            return false;
        }

   window.alert("Booking Successfull..Will get back to you soon..!!");
}
