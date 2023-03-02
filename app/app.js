// const { createApp } = Vue;

// createApp({
//   data() {
//     return {
//       name: 'Hello Vue!',
//     };
//   },
// }).mount('#app');

// =================Menggunakan Product di JS================
// var dataProduct = {
//   maksimum : 50,
//   products:[
//   {"id":"532","name":"Slicker Jacket",
//   "description":"Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.",
//   "price":"125",
//   "image_title":"slicker-jacket_lynda_29941",
//   "image":"https://hplussport.com/wp-content/uploads/2016/12/slicker-jacket_LYNDA_29941.jpg"},]
// }

// var app = new Vue({
//   el: '#app',
//   data: dataProduct
// });

var app = new Vue({
  el: '#app',
  data: {
    maksimum: 50,
    products: null
  },
  mounted: function () {
    fetch('https://hplussport.com/api/products/order/price')
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
});
