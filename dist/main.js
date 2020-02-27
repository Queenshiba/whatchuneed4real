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

        console.log(cravings)

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
                // when click, show reasons and solution
                getReasonAndSolution(cravings[j])
                // when click, hide lists of cravings and input 
                const searchBox = document.getElementById('search-box');
                // const input = document.getElementById('myInput')
                searchBox.style.display = "none"

                //show "your craving is"
                const createPForYourCravingIs = document.createElement('p');
                const YourCravingIsText = document.createTextNode("Your craving is ...")
                createPForYourCravingIs.appendChild(YourCravingIsText)
                const cravingNameContainer = document.getElementById('cravingNameBox')
                cravingNameContainer.appendChild(createPForYourCravingIs)
                createPForYourCravingIs.classList.add("myCravingIs");

                // when click, show a name of craving
                const createPForcravingName = document.createElement('p');
                const cravingNameText = document.createTextNode(cravings[j])
                createPForcravingName.appendChild(cravingNameText)
                cravingNameContainer.appendChild(createPForcravingName)
                createPForcravingName.classList.add("cravingName")





            }
            );

        }


        // function that get items of reasons and solution by filtering
        function getReasonAndSolution(craving) {
            const filteredCravings = cravingdata.filter((item) => {
                return (item.craving === craving)
            })


            for (let x = 0; x < filteredCravings.length; x++) {


                // const cravingName = cravingdata[x].craving;
                // console.log(cravingdata[x].craving)
                // const createPForcravingName = document.createElement('p');
                // const cravingNameText = document.createTextNode(cravingName)
                // createPForcravingName.appendChild(cravingNameText)
                // const cravingNameContainer = document.getElementById('cravingName')
                // cravingNameContainer.appendChild(createPForcravingName)

                const reasons = filteredCravings[x].reason;
                const createDivForResult = document.createElement('div');
                createDivForResult.classList.add("listInResult");
                const createPForReason = document.createElement('p')
                createPForReason.classList.add("reasonInResult");
                const reasonTextnode = document.createTextNode(reasons)
                createPForReason.appendChild(reasonTextnode)
                createDivForResult.appendChild(createPForReason)
                const resultContainer = document.getElementById('result-container')
                resultContainer.appendChild(createDivForResult)

                resultContainer.style.display = "flex"
                
                // create ptag before reason in result "you might..."
                const youMight = document.createElement('p');
                const youMightTextnode = document.createTextNode("Your body might need")
                youMight.appendChild(youMightTextnode)
                youMight.classList.add("youMight");
                createDivForResult.insertBefore(youMight, createPForReason)


                const solutions = filteredCravings[x].solution;
                const createpForsolution = document.createElement('p');
                createpForsolution.classList.add("solutionInResult");
                const solutionTextnode = document.createTextNode(solutions)
                createpForsolution.appendChild(solutionTextnode)
                createDivForResult.appendChild(createpForsolution)

                // create ptag before solutiom in result "you should have..."
                const youShould = document.createElement('p');
                const youShouldTextnode = document.createTextNode("You should have these instead")
                youShould.appendChild(youShouldTextnode)
                youShould.classList.add("youShould");
                createDivForResult.insertBefore(youShould, createpForsolution)


                // console.log(reasons)
                // console.log(solutions)
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

function refreshPage() {
    window.location.reload();
}




