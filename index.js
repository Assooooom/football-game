var productNameInput = document.getElementById("productName")
var producttimeInput = document.getElementById("productPrice")
var productdayInput = document.getElementById("productday")
var productStadiumInput = document.getElementById("productCategory")
var productDescriptionInput = document.getElementById("productDescription")
var productList = [];
function addProduct() {
    var product = {
        name: productNameInput.value,
        time: producttimeInput.value,
        day: productdayInput.value,
        Stadium: productStadiumInput.value,
        desc: productDescriptionInput.value
    }
    productList.push(product)
    DisplayData()
}
function DisplayData() {
    var temp = "";
    for (var i = 0; i < productList.length; i++) {
        temp += `
    
    <tr>
    <td> `+ i + ` </td>
    <td> ` + productList[i].name + `   </td>
    <td>  ` + productList[i].time + `   </td>
    <td>  ` + productList[i].day + `   </td>
    <td>  ` + productList[i].Stadium + `   </td>
    <td>  ` + productList[i].desc + `   </td>
    <td> <button class="btn btn-outline-warning" >update</button>  </td>
    <td> <button class="btn btn-outline-danger" >delete</button>   </td>
</tr>
    
    `
    }
    document.getElementById("tableBody").innerHTML = temp
}
