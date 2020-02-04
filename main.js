"use strict";

fetch("./cravingdata.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (cravingdata) {
        const data = cravingdata;
        // console.log(data)




        for (let i = 0; i < 34; i++) {
            const cravingitem = data.cravingdata[i].craving
            const cravingitemLower = cravingitem.toLowerCase()
            console.log(cravingitemLower)

            const reasonitem = data.cravingdata[i].reason
            const solutionitem = data.cravingdata[i].solution
            // console.log(cravingitem)


            // CREATE <a> in <li> of CravingItem

            // decleare createATags as create <a> tag
            var createATags = document.createElement("a");
            // add href="#" in <a> tags
            createATags.setAttribute('href', "#");

            // decleare createLiTags as create <li> tag
            var createLi = document.createElement("li");
            // Create a text node 
            var textnode = document.createTextNode(cravingitemLower);
            // Append the text to <li>
            createATags.appendChild(textnode);

            // Append <li> to <ul> with id="list"
            var allLi = document.getElementById("list").appendChild(createLi)
            allLi.classList.add("list");
            // Append <a> to <li>
            var allatags = allLi.appendChild(createATags)
            allatags.classList.add("link");


        }


    })

function searchFun() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    ul = document.getElementById("myList");
    li = ul.getElementsByClassName("list");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        
        a = li[i].getElementsByClassName("link")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }

    }
   
}