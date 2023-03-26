import { dbank } from "../../declarations/dbank";

window.addEventListener("load",async function(){
  update();
  // const curValue=Math.round(await dbank.getBalance()*100)/100;
  // this.document.getElementById("value").innerHTML=curValue;
});

document.querySelector("form").addEventListener("submit",async function(event){
  event.preventDefault();
  const inputAmount=document.getElementById("input-amount").value;
  const outputAmount=document.getElementById("withdrawal-amount").value;

  document.querySelector("#submit-btn").setAttribute("disabled",true);

  if((inputAmount)!=='')
  await dbank.topUp(parseFloat(inputAmount));

  if(outputAmount!==''){
    await dbank.debit(parseFloat(outputAmount));
  }

  await dbank.compund();

  update();

  // const curValue=Math.round(await dbank.getBalance()*100)/100;
  // document.getElementById("value").innerHTML=curValue;

    
  document.querySelector("#submit-btn").removeAttribute("disabled");

  document.getElementById("input-amount").value='';
  document.getElementById("withdrawal-amount").value='';
});

async function update(){
  const curValue=Math.round(await dbank.getBalance()*100)/100;
  document.getElementById("value").innerHTML=curValue;
}