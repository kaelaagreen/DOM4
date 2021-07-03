"use strict";

document.querySelector("form").addEventListener("submit", function (event){
    event.preventDefault();
    const data = new FormData(document.querySelector("form"));
    const userInput = Number(data.get("quantity"));
    console.log(userInput);
    console.log(typeof userInput);
    const dropDown = data.get("coinType");
    console.log(dropDown);
    for(let coinPopup=0; coinPopup<userInput;coinPopup++){
        if(dropDown.valueOf()=="penny"){
            document.querySelector(".coins").innerHTML += '<div class="oneCent"><p class = "penny1">Penny</p></div>';
        } else if (dropDown.valueOf()=="nickel"){
        document.querySelector(".coins").innerHTML += '<div class="fiveCent"><p class = "nickel5">Nickel</p></div>';
      }else if (dropDown.valueOf()=="dime"){
        document.querySelector(".coins").innerHTML += '<div class="tenCent"><p class = "dime10">Dime</p></div>';
      }else if (dropDown.valueOf()=="quarter"){
        document.querySelector(".coins").innerHTML += '<div class="twentyFiveCent"><p class = "quarter25">Quarter</p></div>';
      }
      var coinCounter = (document.querySelector("section").childElementCount)
      document.querySelector("span").innerText = coinCounter;
    }
});
document.querySelector(".coins").addEventListener("click",function(event){
  if(event.target.localName == "div"){
      event.target.remove();
      var coinCounter = (document.querySelector("section").childElementCount)
      document.querySelector("span").innerText = coinCounter;
  }
  });
 
//DON'T MIND THIS.//

// // <div id="oneCent"><p id = "penny1">Penny</p></div>


// const anotherPenny = document.createElement("div");

// anotherPenny.classList.add("oneCent");

// const pennyPara = document.createElement("p");

// pennyPara.innerText = "Penny"

// anotherPenny.append(pennyPara);

// document.querySelector(".coins").append(anotherPenny);


// // <div class="fiveCent"><p id = "nickel5">Nickel</p></div>

// const anotherNickel = document.createElement("div");

// anotherNickel.classList.add("fiveCent");

// const nickelPara = document.createElement("p");

// nickelPara.innerText = "Nickel"

// anotherNickel.append(nickelPara);


// document.querySelector(".coins").append(anotherNickel);

// // <div class="tenCent"><p id = "dime10">Dime</p></div>

// const anotherDime = document.createElement("div");

// anotherDime.classList.add("tenCent");

// const dimePara = document.createElement("p");

// dimePara.innerText = "Dime"

// anotherDime.append(dimePara);

// document.querySelector(".coins").append(anotherDime);

// // <div class="twentyFiveCent"><p id = "quarter25">Quarter</p></div>

// const anotherQuarter = document.createElement("div");

// anotherQuarter.classList.add("twentyFiveCent");

// const quarterPara = document.createElement("p");

// quarterPara.innerText = "Quarter"

// anotherQuarter.append(quarterPara);

// document.querySelector(".coins").append(anotherQuarter);



// function addPenny (){

// function addNickel (){
//     document.querySelector("form").addEventListener("submit", function (event){
//         event.preventDefault();
//         document.querySelector(".coins").innerHTML += '<div class="fiveCent"><p class = "nickel5">Nickel</p></div>'
//     });
// }

// function addDime (){
//     document.querySelector("form").addEventListener("submit", function (event){
//         event.preventDefault();
//         document.querySelector(".coins").innerHTML += '<div class="tenCent"><p class = "dime10">Dime</p></div>'
//     });
// }

// function addQuarter (){
//     document.querySelector("form").addEventListener("submit", function (event){
//         event.preventDefault();
//         document.querySelector(".coins").innerHTML += '<div class="twentyFiveCent"><p class = "quarter25">Quarter</p></div>'
//     });
// }



// // // let dropDown = document.querySelector("select").selectedOptions[0].innerText

// // // console.log(dropDown);


// // //gather the userInput

// //     const data = new FormData(document.querySelector("form"));
    
// //     const userInput = Number(data.get("quantity"));
// //     console.log(userInput);
// //     console.log(typeof userInput);
    
// //     const dropDown = data.get("coinType");
// //     console.log(dropDown);

// // if (dropDown=="Penny"){
// //     for(let coinPopup=0; coinPopup<userInput;coinPopup++){
// //       console.log(coinPopup);
// //     }
// // } else if (dropDown=="Nickel"){
// //     for(let i=0; i<userInput;i++){
// //         addNickel();
// //     }
// // }
// //  else if (dropDown=="Dime"){
    
// //     for(let i=0; i<userInput;i++){
// //         addDime();
// //     }
    
// // }
// // else if (dropDown=="Quarter"){
    
// //     for(let i=0; i<userInput;i++){
// //         addQuarter();
