// Store the wallet amount to your local storage with key "amount"




function addToWallet(){
    var amt = document.querySelector("#amount").value
    // console.log( typeof amt);
    var money =Number(amt);
    // console.log( typeof money);
     var sum=money;
    sum=sum+money;
    console.log(sum);
    var h1= document.querySelector("#wallet")
    h1.innerText=sum;
    console.log(h1);
     money=0;
}

