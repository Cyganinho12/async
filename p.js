// async function showdata() {

//     let response = await fetch('./db.json');
//     let db = await response.json();




//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
//     return db
// }
// showdata()





// fetch("./db.json")
// .then(function (response) {
//         return response.json();
// })
// .then(function (db) {
//     let placeholder = document.querySelector("#data_out");
//     let out = "";
//     for (let product of db) {
//         out += `
//             <tr>
//                 <td>${product.name}</td>
//                 <td>${product.uris}</td>
//             </tr>
//         `;
//     }
//     placeholder.innerHTML = out;
// })



async function loadintotable(url, table) {
    const tablehead = table.querySelector("thead");
    const tablebody = table.querySelector("thead");
    const response = await fetch(url);
    const {name,uris}=  await response.json();

    //
    tablehead.innerHTML = "<tr></tr>";
    tablebody.innerHTML = "";

    for (const usertext of users) {
        const userelement = document.createElement('th')
        userelement.textContent = usertext;
        tablehead.querySelector("tr").appendChild(userelement);

    }
    for (const uri of uris) {
        const urielement = document.createElement('tr');

        for (const cellText of uri) {
            const cellElement = document.createElement('td');

            cellElement.textContent = cellText;
            urielement.appendChild(cellElement);


        }
        tablebody.appendChild(urielement);
    }
}
loadintotable("./db.json", document.querySelector("table"));