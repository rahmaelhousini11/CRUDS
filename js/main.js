/////curds////
//create product//
var productNameInPut = document.getElementById('productNameInPut');
var productPriceInPut = document.getElementById('productPriceInPut');
var productCategoryInPut = document.getElementById('productCategoryInPut');
var productDescInPut = document.getElementById('productDescInPut');
var addbtn = document.getElementById('addbtn');
var searchinput = document.getElementById('searchinput');
var updatebtn = document.getElementById('updatebtn');
var arryContianer =[];


//localstorage//

if (localStorage.getItem("allProduct") != null) {
    arryContianer = JSON.parse(localStorage.getItem('allProduct'));
    display(arryContianer);
}else{
    arryContianer=[];
}


//addproductFunction

function addproduct() {

    if(isValid() == true){
        var product = {
            name: productNameInPut.value,
            price: productPriceInPut.value,
            category: productCategoryInPut.value,
            desc: productDescInPut.value,
        }
        arryContianer.push(product);
        localStorage.setItem('allProduct', JSON.stringify(arryContianer)); ///localstorge
        //                      key
        console.log(arryContianer);
        cleanForm();
        display(arryContianer);
    }else{
        window.alert('productName ic unvilid')
    }
    
}

//clearFunction

function cleanForm() {
    productNameInPut.value = '';
    productPriceInPut.value = '';
    productCategoryInPut.value = '';
    productDescInPut.value = '';
}

///Display proudct//

function display(arr) {
    var cartona = ``;
    for (var i = 0; i < arr.length; i++) {
        var index =i+1;
        cartona += `
        <tr>
            <td>${index}</td>
            <td>${arr[i].name}</td>
            <td>${arr[i].price}</td>
            <td>${arr[i].category}</td>
            <td>${arr[i].desc}</td>
            <td><button onClick="setFormForUpdate(${i});" class="btn btn-outline-warning btn-sm">Update</button></td>
            <td><button onClick="deleteElement(${i});" class="btn btn-outline-danger btn-sm">Delete</button></td>
        </tr>`
    }//<td>`+ arryContianer[i].desc +`</td>
    document.getElementById('tBody').innerHTML = cartona;
}

//deletefunction
function deleteElement(deleteindex) {
    arryContianer.splice(deleteindex, 1);
    localStorage.setItem('allProduct', JSON.stringify(arryContianer));
    display(arryContianer);
}

//////searchfunction/////

//realTimeSearch/////
function searchProduct(searchTearm){
    var searchResult=[];
    for(var i= 0 ; i < arryContianer.length ; i++){
        if(arryContianer[i].name.toLowerCase().includes(searchTearm.toLowerCase())){ // includes and tolowercase string methods
            searchResult.push(arryContianer[i]);
        }
    }
    display(searchResult);
}
searchProduct(searchinput.value);


//setFormforupdatefunction
var productUpdateInd ;

function setFormForUpdate(updateIndex) {
    addbtn.classList.add('d-none');
    updatebtn.classList.replace('d-none', 'd-block');
    
    productNameInPut.value = arryContianer[updateIndex].name;
    productPriceInPut.value = arryContianer[updateIndex].price;
    productCategoryInPut.value = arryContianer[updateIndex].category;
    productDescInPut.value = arryContianer[updateIndex].desc;
    

    productUpdateInd =updateIndex ;
}

//updateFunction
function updateProduct() {
   var productUpdate = {
        name: productNameInPut.value,
        price: productPriceInPut.value,
        category: productCategoryInPut.value,
        desc: productDescInPut.value,
    }
    arryContianer.splice(productUpdateInd,1,productUpdate);
    localStorage.setItem('allProduct', JSON.stringify(arryContianer));
    display(arryContianer);
    addbtn.classList.remove('d-none');
    updatebtn.classList.replace('d-block','d-none' );
    cleanForm();
}

//regular expression  //regexfunction

function isValid(){
    var regex =/^[A-Z][a-z]{3,9}$/
    if(regex.test(productNameInPut.value) ==true){ //  اختصار للif return regex.test(productNameInPut.value);
        return true;
    }else{
        return false;
    }
}


/////////////////////////////////////////////////testing code//////////////////////////////////////////////////////


// var productNameInPut = document.getElementById('productNameInPut');
// var productPriceInPut = document.getElementById('productPriceInPut');
// var productCategoryInPut = document.getElementById('productCategoryInPut');
// var productDescInPut = document.getElementById('productDescInPut');
// var addbtn = document.getElementById('addbtn');
// var searchinput = document.getElementById('searchinput');
// var updatebtn = document.getElementById('updatebtn');
// var arryContianer =[];

// if(localStorage.getItem('allproduct') != null){
//     arryContianer = JSON.parse(localStorage.getItem('allproduct'));
//     displayproduct(arryContianer)
// }else{
//     arryContianer=[];
// }

// function addproduct(){
//    product = {
//     name: productNameInPut.value,
//     price: productPriceInPut.value,
//     category:productCategoryInPut.value,
//     desc:productDescInPut.value
//    }
//    arryContianer.push(product);
//    localStorage.setItem('allproduct' ,JSON.stringify(arryContianer));
//    displayproduct(arryContianer);
//    clearForm();
// }

// function displayproduct(arr){
//     var cartona=``
//     for(var i=0;i<arryContianer.length ;i++){
//         index=i+1;
//         cartona+=`
        
//         <tr>
//             <td>${index}</td>
//             <td>${arr[i].name}</td>
//             <td>${arr[i].price}</td>
//             <td>${arr[i].category}</td>
//             <td>${arr[i].desc}</td>
//             <td><button onClick="setFormForUpdate(${i});" class="btn btn-outline-warning btn-sm">Update</button></td>
//             <td><button onClick="deleteProduct(${i});" class="btn btn-outline-danger btn-sm">Delete</button></td>
//         </tr>`
//     }
//     document.getElementById('tBody').innerHTML=cartona;
// }

// function clearForm(){
//     productNameInPut.value="";
//     productPriceInPut.value="";
//     productCategoryInPut.value="";
//     productDescInPut.value="";
// }

// function deleteProduct(deleteindex){
//     arryContianer.splice(deleteindex,1);
//     localStorage.setItem('allproduct' ,JSON.stringify(arryContianer));
//     displayproduct(arryContianer);

// }

// // function searchProduct(searchTearm){
// //     var searcharray=[];
// //     for(var i=0 ; i <arryContianer.length ; i++){
// //         if(arryContianer[i].name.toLowerCase().includes(searchTearm.toLowerCase())){
// //             searcharray.push(arryContianer[i]);
// //         }
// //     }
// //     console.log(searcharray);
// //     displayproduct(searcharray)
// // }

// var updateIndex ;
// function setFormForUpdate(index){
//      addbtn.classList.add('d-none');
//      updatebtn.classList.replace('d-none' ,'d-block');
//      productNameInPut.value = arryContianer[index].name;
//      productPriceInPut.value = arryContianer[index].price;
//      productCategoryInPut.value = arryContianer[index].category;
//      productDescInPut.value = arryContianer[index].desc;
//      updateIndex = index;
     
// }


// function updateProductfun(){
//    var ProductUpdate ={
//         name:productNameInPut.value,
//         price:productPriceInPut.value,
//         category:productCategoryInPut.value,
//         desc:productDescInPut.value,
//     }
//     arryContianer.splice(updateIndex,1,ProductUpdate);
//     localStorage.setItem('allProduct', JSON.stringify(arryContianer));
//     displayproduct(arryContianer);
//     addbtn.classList.replace('d-none','d-block');
//     updatebtn.classList.add('d-none');
//     clearForm()
// }
