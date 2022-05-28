let balance= 0;  




function total() {
  const totalIncome = Number(document.getElementById("total_income").value);


  
 

  const foodPrice =Number(document.getElementById("food_price").value);
  const rentPrice= Number(document.getElementById("rent_price").value);
  const clothesPrice = Number(document.getElementById("clothes_price").value);
  const totalPrice = (foodPrice + rentPrice + clothesPrice);
  balance = (totalIncome-totalPrice);

  document.getElementById("totalExpenses").innerHTML= Number(totalPrice);
  document.getElementById("balance").innerHTML = Number(balance);

 

 if(totalIncome<0 || foodPrice<0||clothesPrice<0||rentPrice<0)
 {
   document.getElementById("errorText").innerHTML= "Please give positive number";

 }
 
else
{ 

}
//  return saving();
}

function saving()
{
const totalIncome = Number(document.getElementById("total_income").value);


const save = Number(document.getElementById("save").value);
const totalSavingAmount = ((totalIncome*save)/100 );
total();
const totalRemainingBalance = (balance -totalSavingAmount);

document.getElementById("savingAmount").innerHTML= Number(totalSavingAmount);

document.getElementById("remainingBalance").innerHTML= Number(totalRemainingBalance);




if(save<0 )
{
  document.getElementById("errorText1").innerHTML= "Please give positive number";

}

else
{

}



}
