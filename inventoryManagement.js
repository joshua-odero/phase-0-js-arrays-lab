//Array definition
const products = ["Laptops","Phones","Headphones", "Monitor"];

//Function to log the first product in array
function logFirstProduct(){

  console.log(products[0]);

}

//Function to add new product in array
function addProduct(productName){

  products.push(productName);

}

//Function to update the name of the product
function updateProductName(arrayPosition,newProductName){

  products[arrayPosition] = newProductName;

}


//Function to remove the last product from the array
function removeLastProduct() {

  products.pop();
  
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
