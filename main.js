"use strict";

fetch("./cravingdata.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (cravingdata) {
        const data = cravingdata;
        console.log(data)

        for (let i = 0; i < 34; i++) {
            const cravingitem = data.cravingdata[i].craving

            const reasonitem = data.cravingdata[i].reason
            const solutionitem = data.cravingdata[i].solution
            // console.log(reasonitem)
            console.log(cravingitem)

            document.getElementById("list").innerHTML = cravingitem

        }

    })


// var listofcraving = document.getElementById("list-craving");
// for (var j = 0; j < cravingitem.length; j++) {
//     var div = document.createElement("div");
//     div.innerHTML = 'this is ' + data;
//     listofcraving.appendChild(div)
// }


// function searchFun() {
//     var input, filter, j;

//     input = document.getElementById("myInput")
//     filter = input.value.toUpperCase();

//     for (j =0; j < cravingitem.length; j++) {
//         if (cravingitem.toUpperCase().indexOf(filter) > -1) {
//             cravingitem[j].style.display = "hey";
//         } else {
//             cravingitem[j].style.display = "none";
//         }
//     }

// }
