import axios from "axios";

function addData(newData,url) {
    axios.post(url, newData)
        .then(response => {
            console.log(response.data.message); // Response message from the API
        })
        .catch(error => {
            console.error(error);
        });
}

function editDataById(newData,url,id) {
    axios.put(url+"/"+id, newData)
        .then(response => {
        console.log(response.data.message); // Response message from the API
        })
        .catch(error => {
        console.error(error);
        });
}

// Contoh pemakaian

// const url="https://parkir-api.vercel.app/data/user" //API untuk data user
// const newdata={
//     nama:"Farel", //Bebas pakek data apapun misal username,password,dll
//     id:1 //Ini harus id 1
// }
// addData(newdata,url)

// const updateddata={ //Ubah yang mau diubah misal car dan bike ga perlu tulis lagi id nya
//     car:20,
//     bike:20
// }
// misal mau ubah parkir saraga yang id nya 3
// editDataById(updateddata,"https://parkir-api.vercel.app/data/park",3)

// NANTI TINGGAL DI IMPORT FUNCTION addData & editDataById ke manapun

export{addData,editDataById}