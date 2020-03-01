document.getElementById("plus").addEventListener("click", function() {
    let itemNo = noOfItem("item");
    itemNo = itemNo + 1;
  
    showItemandprice("item", "iphonprice", itemNo);
  });



  document.getElementById("minus").addEventListener("click", function() {
    let itemNo = noOfItem("item");
    itemNo = itemNo - 1;
  



    if (itemNo > 0) {
      showItemandprice("item", "iphonprice", itemNo);
    } else {
       showItemandprice("item", "iphonprice", 0);
    }
  });
  



  document.getElementById("casePlus").addEventListener("click", function() {
    let itemNo = noOfItem("itemc");
    itemNo = itemNo + 1;
  
    showItemandprice("itemc", "casePrice", itemNo);
  });





  document.getElementById("caseMinus").addEventListener("click", function() {
    let itemNo = noOfItem("itemc");
    itemNo = itemNo - 1;
  
    if (itemNo > 0) {
      showItemandprice("itemc", "casePrice", itemNo);
    } else {

      showItemandprice("itemc", "casePrice", 0);
    }
  });
  



  function amount() {
    let iphon = parseInt(document.getElementById("iphonprice").innerText);
    let cas = parseInt(document.getElementById("casePrice").innerText);
    let sub = iphon + cas;
    document.getElementById("subtotal").innerText = sub.toFixed(2);
    document.getElementById("tex").innerText = (sub * 0.15).toFixed(2);
    document.getElementById("total").innerText = (sub + sub * 0.15).toFixed(2);
  }
  


  document.getElementById("cphon").addEventListener("click", function() {
    document.getElementById("iphoncart").classList.add("disp");
  
    showItemandprice("item", "iphonprice", 0);
  });



  document.getElementById("ccase").addEventListener("click", function() {
    document.getElementById("ccart").classList.add("disp");
  
    showItemandprice("itemc", "casePrice", 0);
  });





  
function showItemandprice(id, productPrice, item) {
    if (productPrice == "iphonprice") {
      document.getElementById(id).value = item;
      document.getElementById(productPrice).innerText = 1219 * item;
      amount();
    } else {
      document.getElementById(id).value = item;
      document.getElementById(productPrice).innerText = 59 * item;
      amount();
    }
  }
  
  function noOfItem(id) {
    return parseInt(document.getElementById(id).value);
  }