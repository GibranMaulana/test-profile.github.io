

document.getElementById("ContactMe").addEventListener("click", 
   function () {
      var contactSidebar = document.getElementById("contactSidebar");

      if (contactSidebar.style.height === "150px") {
         contactSidebar.style.height = "0";
      } else {
         contactSidebar.style.height = "150px"
      }
   })

   document.getElementById("header-menu").addEventListener("click", function () {
      var sidebar = document.getElementById("sidebar");
      var main = document.getElementById("main");
  
      if (window.innerWidth <= 768) {
          sidebar.style.width = sidebar.style.width === "100%" ? "0" : "100%";
          main.style.paddingLeft = "0px";
      } else {
          sidebar.style.width = sidebar.style.width === "200px" ? "0" : "200px";
          main.style.paddingLeft = sidebar.style.width === "200px" ? "220px" : "0px";
      }
  });