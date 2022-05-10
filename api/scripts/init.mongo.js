/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo inventoryTracker scripts/init.mongo.js
 * Atlas:
 */

/* global db print */
/* eslint no-restricted-globals: "off" */

db.products.remove({});
db.deleted_products.remove({});

const initialProducts = [
  {
    id: 1,
    name: "White T-shirt",
    category: 'Shirts',
    price: '30',
    imageUrl: 'https://www.walmart.com/ip/Bonobos-Fielder-Men-s-and-Big-Men-s-Short-Sleeve-Pocket-Tee-Up-to-3XL/382301711',
  },
  {
    id: 2,
    name: 'Gray jeans',
    category: 'Jeans',
    price: '49',
    imageUrl: 'https://www.walmart.com/ip/Lee-Men-s-Active-Stretch-Slim-Fit-Jean/297675870',
  },
];

db.products.insertMany(initialProducts);
const count = db.products.count();
print('Inserted total of ', count, 'products');

db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });

db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ name: 1 });
db.products.createIndex({ price: 1 });
db.products.createIndex({ category: 1 });
db.deleted_products.createIndex({ id: 1 }, { unique: true });
