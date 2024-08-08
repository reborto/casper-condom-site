/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsive() {
  console.log(' responsive')

    var x = document.getElementById("menuTopNav");
    if (x.className === "topnav") {
      console.log('enable responsive')
      x.className += " responsive";
    } else {
      x.className = "topnav";
      console.log('disable responsive')

    }
  }