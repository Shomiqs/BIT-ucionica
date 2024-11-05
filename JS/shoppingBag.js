"use strict";

(function () {
  console.log("Hello!");

  function Product(name, price, expDate) {
    this.id = Math.floor(Math.random() * 89999 + 10000);
    this.name = name;
    this.price = price.parseFloat(2);
    this.expDate = expDate;
    this.getInfo = function () {
      let firstLetter = this.name[0].toUpperCase();
      let lastLetter = this.name[this.name.length - 1].toUpperCase();
      return (
        firstLetter +
        lastLetter +
        this.id +
        ", " +
        this.name +
        ", " +
        this.price
      );
    };
  }

  function ShoppingBag() {
    this.listOfProducts = [];
    this.addProduct = function (proizvod) {
      if (proizvod instanceof Product) {
        //dodati expDate uslov!
        this.listOfProducts.push(proizvod);
      } else {
        console.log("Add product argument must be instance of product!");
      }
    };
    this.calcAvg = function () {
      let sum = 0;
      for (let i = 0; i < this.listOfProducts.length; i++) {
        sum += this.listOfProducts[i].price;
      }
      return (sum / this.listOfProducts.length).parseFloat(3);
    };

    this.getMostExpensive = function () {
      let max = this.listOfProducts[0];
      for (let i = 1; i < this.listOfProducts.length; i++) {
        if (max.price < this.listOfProducts[i].price) {
          max = this.listOfProducts[i];
        }
      }
      return max;
    };
  }

  //   let banana = new Product("banana", 150, "15/12/2026");
  //   let kartica = new ShoppingBag();
  //   console.log(banana instanceof Product); // true
  //   console.log(banana instanceof ShoppingBag); // false

  var jogurt = new Product("jogurt", 150, "1/12/2024");

  var torba = new ShoppingBag();
  torba.addProduct(jogurt);

  console.log(jogurt.getInfo());
})();
