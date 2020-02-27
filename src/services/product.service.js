// import { http } from './axios'


async function list() {
    var products = localStorage.getItem("product") || "[]"
    return JSON.parse(products)
}


async function add(data) {
    var products = localStorage.getItem("product") || "[]"
    products = JSON.parse(products)
    var tempindex = products.map(item => { return item.id })
   if(tempindex.length>0){
       var index = Math.max(...tempindex) // 1
   }else{
    var index=0
   }

    data["id"] = parseInt(index) + 1
    products.push(data)
    localStorage.setItem("product", JSON.stringify(products))
    return data

}
async function update(data) {

    var products = localStorage.getItem("product") || "[]"
    products = JSON.parse(products) 
    var temp = products.map(item => { 
        if(item.id==data.id){
            return data
        }else{
            return item
        } 
    }) 
    localStorage.setItem("product", JSON.stringify(temp)) 
    return true 
}
async function remove(row) { 
    var products = localStorage.getItem("product") || "[]"
    products = JSON.parse(products) 
    var temp = products.filter(item => item.id!=row.id ) 
    localStorage.setItem("product", JSON.stringify(temp)) 
    return true 
}


export default {
    list,
    add,
    update,
    remove
}; 
