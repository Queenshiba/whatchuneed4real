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


        // check deplicate craving items and push only unique items to cravings brakets
        let cravings = [];
        for (let i = 0; i < cravingdata.length; i++) {
            const cravingitem = cravingdata[i].craving;
            if (!cravings.includes(cravingitem)) {
                cravings.push(cravingitem);
            }
        }
        // console.log(cravings)

        // CREATE <li> of cravings above
        for (let j = 0; j < cravings.length; j++) {

            // create <li> tag
            const createLi = document.createElement("li");
            // Create a text node 
            const textnode = document.createTextNode(cravings[j]);
            // Append the text to <li>
            createLi.appendChild(textnode);
            // Append <li> to <ul> of id="list"
            const ul = document.getElementById("myList")
            // Append <li> tags that are created to <ul>
            ul.appendChild(createLi)
            // Add className "list" to <li> tags
            createLi.classList.add("list");


            // Add eventListener to <li> tags
            createLi.addEventListener("click", (event) => {
                getReasonAndSolution(cravings[j])
            });

        }


        // function that get items of reasons and solution by filtering
        function getReasonAndSolution(craving) {
            const filteredCravings = cravingdata.filter((item) => {
                return (item.craving === craving)
            })


            for (let x = 0; x < filteredCravings.length; x++) {


                const reasons = filteredCravings[x].reason;
                const createDivForReason = document.createElement('div');
                createDivForReason.classList.add("li-reason");
                const reasonTextnode = document.createTextNode(reasons)
                createDivForReason.appendChild(reasonTextnode)
                const resultContainer = document.getElementById('result-container')
                resultContainer.appendChild(createDivForReason)


                const solutions = filteredCravings[x].solution;
                const solutionText = document.createElement('p');
                const solutionTextnode = document.createTextNode(solutions)
                solutionText.appendChild(solutionTextnode)
                createDivForReason.appendChild(solutionText)



                console.log(reasons)
                console.log(solutions)
            }


            // console.log(filteredCravings);

        }



    })


// Function that makes search bar
function searchCraving() {
    let input = document.getElementById('myInput').value;
    input = input.toLowerCase();
    let allLi = document.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < allLi.length; i++) {
        if (allLi[i].textContent.toLowerCase().includes(input)) {
            allLi[i].style.display = "";
        } else {
            allLi[i].style.display = "none";
        }
    }
}


