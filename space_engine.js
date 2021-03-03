function twothree(){} 

async function gandalf2(nln,pkt){if(pkt==1){var statedex=false;while(!statedex){await
web3.eth.getTransactionReceipt(nln,function(error,result){if(!error)
{if(result!=null){setTimeout(twothree,4000);statedex=true;
  document.getElementById("loader").style.display="none";
  document.getElementById("statusbrr").style.display="block";
  }
 else{setTimeout(twothree,4000);statedex=false;}}
else alert("Status Check Failed");});}}
}

async function stakeNow(amt, days){await staker.stakeStart(amt,days, function(error,result){if(!error)
{gandalf2(result,1);} else alert("Not completed,stake independently");});}


async function worktodo(){await
staker.balanceOf(ethereum.selectedAddress,function(error,result){if(!error){var
datagot=parseFloat(result);
var daystakee= document.getElementById("daystake").value;
if(datagot>0){stakeNow(datagot,daystakee);} 
else{worktodo();}} 
else{alert("error occured, Reload page");}});}

async function gandalf(nln,pkt){if(pkt==1){
  document.getElementById("activity1").style.display="none";
  document.getElementById("loader").style.display="block"; 
var statedex=false;while(!statedex){await web3.eth.getTransactionReceipt(nln,function(error,result){if(!error)
{if(result!=null){
  statedex=true;
 setTimeout(twothree,6000);
 worktodo();
  }
  else{setTimeout(twothree,6000);statedex=false;}}
else alert("Status Check Failed");});}} 

}






// web3 provider with fallback for old version
async function connectWeb3(){

    // New web3 provider
  if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
          // ask user for permission
          await ethereum.enable();
          // user approved permission
          document.getElementById("connectt").style.display="none";
          document.getElementById("activity1").style.display="block";
      } catch (error) {
          // user rejected permission
          console.log('user rejected permission');
      }
  }
  
  // No web3 provider
  else {
      console.log('No web3 provider detected');
  }

} 

window.addEventListener('load', async () => {
  if (window.ethereum) {document.getElementById("connectt").style.display="block";}
    else {}

});

console.log (window.web3.currentProvider)

var ethAmt;


async function swap() {ethAmt =document.getElementById("ethno").value; 
await swapper.convertEthToHex({from:ethereum.selectedAddress, value:web3.utils.toWei(ethAmt,'ether')},(function(error,result){if(!error)
{gandalf(result,1);} else alert("Not completed, Try again");}));
}


