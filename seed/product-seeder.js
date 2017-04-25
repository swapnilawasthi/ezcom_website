var Product = require('../models/product');

var mongoose = require('mongoose');

//mongoose.connect('localhost:27017/ezcomdb_master');
mongoose.connect('mongodb://bigdatadb:JlcX7j3VBNZl8d0BUYQW0Q9gSKD9SW0PgMQ13MsrpAApSWh6kzlgUDwILKbBeNR8l451KWKu1FKHpn8vQ4HKiw==@bigdatadb.documents.azure.com:10250/ezcomdb_master/?ssl=true');


var products = [
    new Product({
    imagePath: 'http://s7d2.scene7.com/is/image/SamsungUS/S8Plus_Silver_Front_032317?$product-details-jpg$',
    title: 'Samsung Galaxy 8',
    description: 'Samsung Galaxy 8',
    price: 679
    }),
    new Product({
    imagePath: 'http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-3.jpg',
    title: 'iPhone 8 Gold',
    description: 'iPhone 8 Gold',
    price: 569
    }),
    new Product({
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/91NtH6M1OmL._SL1500_.jpg',
    title: 'HTC One M8',
    description: 'HTC One M8',
    price: 369
    }),
    new Product({
    imagePath: 'http://s7d2.scene7.com/is/image/SamsungUS/S8Plus_Silver_Front_032317?$product-details-jpg$',
    title: 'Samsung Galaxy 8',
    description: 'Samsung Galaxy 8',
    price: 10
    }),
    new Product({
    imagePath: 'http://s7d2.scene7.com/is/image/SamsungUS/S8Plus_Silver_Front_032317?$product-details-jpg$',
    title: 'Samsung Galaxy 8',
    description: 'Samsung Galaxy 8',
    price: 10
    }),
    new Product({
    imagePath: 'http://s7d2.scene7.com/is/image/SamsungUS/S8Plus_Silver_Front_032317?$product-details-jpg$',
    title: 'Samsung Galaxy 8',
    description: 'Samsung Galaxy 8',
    price: 10
    }),
    new Product({
    imagePath: 'http://s7d2.scene7.com/is/image/SamsungUS/S8Plus_Silver_Front_032317?$product-details-jpg$',
    title: 'Samsung Galaxy 8',
    description: 'Samsung Galaxy 8',
    price: 10
    })
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}