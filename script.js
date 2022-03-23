function myFunction() {
   let salary = document.getElementById("salary").value;
   let esi = document.getElementById("esi").value;
   let epf = document.getElementById("epf").value;
   let others = document.getElementById("others").value;
   let quantity = document.getElementById("quantity").value;
   let duration = document.getElementById("duration").value;
   let profit = document.getElementById("profitper").value;


   let totalsal = parseFloat(salary)+parseFloat(esi)+parseFloat(epf)+parseFloat(others);
   let profitper = totalsal * parseFloat(profit/100);
   let profitamount = totalsal +profitper;

   let gstper = profitamount * 0.18;
   let total  = gstper + profitamount;

   document.getElementById("total").value = (total * quantity * duration);
  }