var request = require("request");
var helloWorld = require("../src/app");
var baseUrl = "https://localhost:3000/";

describe("Hello World Server", function () {
  describe("GET /", function () {

    // it("returns status code 200", function (done) {
    //   request.get(baseUrl + "setupDb", function (error, response, body) {
    //     done();
    //     expect(response.statusCode).toBe(200);
        
    //   });
    // });

    // User Routing
    it("search for the existence of the email of users--CorrectOne", function (done) {
        request.get(baseUrl + "user/register/search/lucky@gmail.com", function (error, response, body) {
            console.log(response.body);
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("search for the existence of the email of users-IncorrectOne", function (done) {
        request.get(baseUrl + "user/register/search/ijklmnop@gmail.com", function (error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(403);
            done();
        });
    });

    it("Log in using -correctOne", function (done) {
        let obj= { uEmail:"lucky@gmail.com", uPass:"lucky" }
        request( { url :baseUrl+"user/login", method:'POST', json :obj }, function (error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("Log in using -IncorrectOne", function (done) {
        let obj= { uEmail:"lucky@gmail.com", uPass:"incorrectpassword" }
        request.post( { url :baseUrl+"user/login", method:'POST', json :obj }, function (error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(403);
            done();
        });
    });

    // //Product Routing

    it("Get products details using the product Id--CorrectOne", function (done) {
        request.get(baseUrl + "product/productDetail/1001", function (error, response, body) {
            console.log(response.body);
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("Get products details using the product Id---IncorrectOne", function (done) {
        request.get(baseUrl + "product/productDetail/1200", function (error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(403);
            done();
        });
    });

    it("Get products on hitting the category----CorrectOne", function (done) {
        request.get(baseUrl + "product/Electronics", function (error, response, body) {
            // console.log(response.body);
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("Get products on hitting the category--IncorrectOne", function (done) {
        request.get(baseUrl + "product/Ceramics", function (error, response, body) {
            // console.log(response.body, response.statusCode);
            expect(response.statusCode).toBe(403);
            done();
        });
    });

    it("searching the product based on keyword--CorrectOne", function (done) {
        request.get(baseUrl + "product/search/red", function (error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("searching the product based on keyword--IncorrectOne", function (done) {
        request.get(baseUrl + "product/search/klmn", function (error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(403);
            done();
        });
    });

    // //Cart Routing
    it("Getting the transaction of the particular User--CorrectOne", function( done ) {
        request.get(baseUrl+"cart/transaction/just_to_generate_first_orderId", function(error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(200);
            done();
        })
    })

    it("Getting the transaction of the particular User--IncorrectOne", function( done ) {
        request.get(baseUrl+"cart/transaction/IncorrectId@gmail.com", function(error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(403);
            done();
        })
    });

    it("Updating the Cart -correctOne", function (done) {
        var obj={
            uEmail: "lucky@gmail.com",
            _id: 1001,
            pName: "Asus Zenfone",
            pDescription: "an economical phone by Asus",
            quantity: 1,
            price: 11599,
            color: "Black",
            image: "Electronics.jpg",
            specification: "",
            "pSeller": {
              "sId": "Asus@Seller",
              "pDiscount": 0.2,
              "pQuantity": 666,
              "pShippingCharges":150
            }
          }
        request( { url :baseUrl+"cart/updateTheCart/lucky@gmail.com", method:'PUT', json :obj }, function (error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("Updating the Cart -IncorrectOne", function (done) {
        var obj={
            uEmail: "anyOne@gmail.com",
            _id: 1001,
            pName: "Asus Zenfone",
            pDescription: "an economical phone by Asus",
            quantity: 1,
            price: 11599,
            color: "Black",
            image: "Electronics.jpg",
            specification: "",
            "pSeller": {
              "sId": "Asus@Seller",
              "pDiscount": 0.2,
              "pQuantity": 666,
              "pShippingCharges":150
            }
          }
        request( { url :baseUrl+"cart/updateTheCart/anyOne@gmail.com", method:'PUT', json :obj }, function (error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(403);
            done();
        });
    });

    it("Inserting into transaction Table -CorrectOne", function (done) {
        var obj= {
            userEmailId:"lucky@gmail.com",
            price:5000,
            orderId:null,
            orderDate:new Date(),
            products: [ { pid: 1001, qty: 2, price:11599 }, { pid: 1002, qty: 2, price:8599 } ]
          }
        request( { url :baseUrl+"cart/transaction", method:'POST', json :obj }, function (error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("Inserting into transaction Table -InCorrectOne", function (done) {
        var obj= {
            userEmailId:"ijklmnop@gmail.com",
            price:5000,
            orderId:null,
            orderDate:new Date(),
            products: [ { pid: 1001, qty: 2, price:11599 }, { pid: 1002, qty: 2, price:8599 } ]
          }
        request( { url :baseUrl+"cart/transaction", method:'POST', json :obj }, function (error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(403);
            done();
        });
    });

    it("Updating the Quantity on uCart of the user Table-CorrectOne", function (done) {
        var obj= {
            pid:1001,
            qty:4
          }
        request( { url :baseUrl+"cart/updateQuantity", method:'PUT', json :obj }, function (error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("Updating the Quantity on uCart of the user Table-InCorrectOne", function (done) {
        var obj= {
            pid:1299,
            qty:4
          }
        request( { url :baseUrl+"cart/updateQuantity", method:'PUT', json :obj }, function (error, response, body) {
            // console.log(response.body,response.statusCode);
            expect(response.statusCode).toBe(403);
            done();
        });
    });


  });


});
