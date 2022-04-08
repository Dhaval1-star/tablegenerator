
// entering the data .
let name1 = document.querySelector("#name");
let description1 = document.querySelector("#description");
let array1 = [name1.value];
let array2 = [description1.value];

// pushing the localstorage data 
for (let i = 0; i < localStorage.length; i++) { 
    console.log("localStorage");
    let key = localStorage.key(i);
    let val = localStorage[key];
    console.log("the key is " + key);
    console.log("the key is " + val);
    
    if (val != "") {    
        if (i+1 == "1") {
            array1.push(val);
        }else{
            array2.push(val);
        }
    }
}
    let count = 0;
    let array5 = array1.toString().split(",");
    let array6 = array2.toString().split(",");
    console.log(array5.length);
    console.log(array5);
    for (let i = 0; i < array5.length; i++) {
        console.log( "localstorage lenght" +localStorage.length)
        let key1 = localStorage.key(i)
        console.log(key1);
        if (count === 0 ) {
            let table = document.querySelector("table");
            let tr = document.createElement("tr");
            let tbody = document.querySelector("tbody");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            // putting data into it 
            td1.innerHTML = i+1;
            td2.innerHTML = array6[i];
            td3.innerHTML = array5[i];
            
            // inserting data into the tr 
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tbody.append(tr);
            table.style.visibility="visible";
        }
    }
    count++;
// showing the data
function myfunc() {
    array1 = [name1.value];
    array2 = [description1.value];
    for (let i = 0; i < localStorage.length; i++) { 
        let key = localStorage.key(i);
        let val = localStorage[key];
        if (val != "") {    
            if (i+1 == "1") {
                array1.push(val);
            }else{
                array2.push(val);
            }
        }
    }

    // set the input in localStorage
    localStorage.setItem("array1",array1);
    localStorage.setItem("array2",array2);

    name1.value = "";
    description1.value = "";

    // showing data into the tr 
    let array3 = array1.toString().split(",");
    let array4 = array2.toString().split(",");
    console.log(array3);
    console.log(array4);
    for (let i = 0; i < 1; i++) {
        let table = document.querySelector("table");
        let tr = document.createElement("tr");
        let tbody = document.querySelector("tbody");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        // putting data into it 
        td1.innerHTML = array3.length;
        td2.innerHTML = array3[i];
        td3.innerHTML = array4[i];
    
        // inserting data into the tr 
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tbody.append(tr);
        table.style.visibility="visible";
    }
}


// second version 

// localStorage.setItem("array1",JSON.stringify(array1));
// localStorage.setItem("array2",JSON.stringify(array2));
// console.log(JSON.parse(localStorage.getItem("array1")));
// console.log(JSON.parse(localStorage.getItem("array2")));

// for (let i = 0; i < array1.length; i++) {
//     let table = document.querySelector("table");
//         let tr = document.createElement("tr");
//         let tbody = document.querySelector("tbody");
//         let td1 = document.createElement("td");
//         let td2 = document.createElement("td");
//         let td3 = document.createElement("td");
//         // putting data into it 
//         td1.innerHTML = i+1;
//         td2.innerHTML = array1[i];
//         td3.innerHTML = array2[i];
    
//         // inserting data into the tr 
//         tr.append(td1);
//         tr.append(td2);
//         tr.append(td3);
//         tbody.append(tr);
//         table.style.visibility="visible";
// }
















// first version without localStorage 

// console.log("hello world ");
// // entering the data .
// let name1 = document.getElementById("name");
// let description = document.getElementById("description");
// // console.log(name);
// // console.log(description);

// // showing the data
// function myfunc() {
//     // getting resources 
//     let table = document.querySelector("table");
//     let tr = document.createElement("tr");
//     let tbody = document.querySelector("tbody");
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     let td3 = document.createElement("td");
//     // putting data into it 
//     td1.innerHTML = 1;
//     td2.innerHTML = name1.value;
//     td3.innerHTML = description.value;

//     // inserting data into the tr 
//     tr.append(td1);
//     tr.append(td2);
//     tr.append(td3);
//     tbody.append(tr);
//     table.style.visibility="visible";
//     // after click of subit removing the value from the input 
//     name1.value = "";
//     description.value = "";
// }