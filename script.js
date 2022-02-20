function numberWithCommasold(x) {
    return (x).toLocaleString('en-US');
}

function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

function compute()
{
    principal_ = document.getElementById("principal").value;
    rate_ = document.getElementById("rate").value;
    years_ = document.getElementById("years").value;
    interest = (principal_ * rate_ * years_)/100
    endyear = (new Date().getFullYear() + parseInt(years_))

    document.getElementById("result").innerHTML = "If you deposit " + "<span class='highlight'>" + numberWithCommas(principal_) + "</span>" +",<br/>at an interest of "+"<span class='highlight'>" + rate_+ "%" +"</span>" +".<br/>You will recieve an amount of "+ "<span class='highlight'>"  + numberWithCommas(interest)+ "</span>" + ",<br/>in the year "+ "<span class='highlight'>" + endyear+"." +"</span>"

    //alert(numberWithCommas(interest))
    
}

function checkdata()
{
      //Create references to the input elements we wish to validate
      principal_ = document.getElementById("principal");
      rate_ = document.getElementById("rate");
      years_ = document.getElementById("years");

      //Check if Principal field is empty
      if((principal_.value == "") || (principal_.value <= 0)){
              alert("Please enter a valid Principal amount");
              principal_.focus();
              return false;
      }
      //Check if rate field is empty
      if(rate_.value == ""){
              alert("Please enter the Interest Rate");
              rate_.focus();
              return false;
      }
        //Check if years field is empty
        if(years_.value == ""){
                alert("Please enter the Years");
                years_.focus();
                return false;
        }

      //If all is well return true.
      return compute();

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=parseFloat(rateval).toFixed(2) +"%";
}