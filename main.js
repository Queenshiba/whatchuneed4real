// "use strict";

// fetch("./cravingdata.json")
//     .then(function (resp) {
//         return resp.json();
//     })
//     .then(function (cravingdata) {
// //         const data = cravingdata;
// //         console.log(data)
// //         const cravings = data.cravingdata[2];

//         let newArr = [];

// //         for (let i = 0; i < 34; i++) {
// //             const cravingitem = data.cravingdata[i].craving

// //             const cravingitemLower = cravingitem.toLowerCase()

// //             const reasonitem = data.cravingdata[i].reason
// //             const solutionitem = data.cravingdata[i].solution


// //             if (!newArr.includes(cravingitem)) {
// //                 newArr.push(cravingitem);
// //             }

// //             const li = document.getElementsByTagName('li');
// //             const reasonText = document.getElementById("reason-text");
// //             // console.log(reasonText)
// //             const solutionText = document.getElementById("solution");
// //             // console.log(solutionText)

// //             // li.addEventListener("click", (event) => {
// //             //     reasonText.textContent = reasonitem;
// //             //     solutionText.textContent = "yo";
// //             // });





// //         }

// //         for (let j = 0; j < 18; j++) {
// //         // CREATE  <li> of CravingItem

// //         // decleare createLiTags as create <li> tag
// //         var createLi = document.createElement("li");
// //         // Create a text node 
// //         var textnode = document.createTextNode(newArr[j]);
// //         // Append the text to <li>
// //         createLi.appendChild(textnode);
// //         // Append <li> to <ul> with id="list"
// //         var allLi = document.getElementById("myList").appendChild(createLi)
// //         allLi.classList.add("list");

// //         }

// //     })



// // function searchFun() {
// //     // Declare variables
// //     var input, filter, ul, li, a, i, txtValue;
// //     input = document.getElementById("myInput");
// //     filter = input.value.toLowerCase();
// //     ul = document.getElementById("myList");
// //     li = ul.getElementsByTagName('li');


// //     // Loop through all list items, and hide those who don't match the search query
// //     for (i = 0; i < li.length; i++) {
// //         a = li[i].getElementsByTagName("a")[0];
// //         txtValue = a.textContent || a.innerText;
// //         if (txtValue.toLowerCase().indexOf(filter) > -1) {
// //             li[i].style.display = "";
// //         } else {
// //             li[i].style.display = "none";
// //         }
// //     }
// }



"use strict";

fetch("./cravingdata.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const cravingdata = data.cravingdata;

        let cravings = [];

        for (let i = 0; i < cravingdata.length; i++) {
            const cravingitem = cravingdata[i].craving;
            if (!cravings.includes(cravingitem)) {
                cravings.push(cravingitem);
            }

        }

        console.log(cravings)

        for (let j = 0; j < cravings.length; j++) {
            // CREATE  <li> of CravingItem

            // decleare createLiTags as create <li> tag
            const createLi = document.createElement("li");
            // Create a text node 
            const textnode = document.createTextNode(cravings[j]);
            // Append the text to <li>
            createLi.appendChild(textnode);
            // Append <li> to <ul> with id="list"
            const ul = document.getElementById("myList")
            ul.appendChild(createLi)
            createLi.classList.add("list");


            // Add eventListener to <li> tags

            createLi.addEventListener("click", (event) => {
                // reasonText.textContent = reasonitem;
                // solutionText.textContent = "yo";
                getReasonAndSolution(cravings[j])
            });
        }
        function getReasonAndSolution(craving) {
            const filteredCravings = cravingdata.filter((item) => {
               return (item.craving === craving)
            })
            console.log(filteredCravings);
        }
        

        // const sample = [{fruit: "🍐"},{fruit: "🍎"}];

        // const test = sample.filter((item)=> {
        //     return (item.fruit === "🍐");
        // });
        // console.log(test)
    })