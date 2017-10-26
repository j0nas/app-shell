const casual = require('casual');

const products = [];
for (let i = 0; i < 10; i++) {
  products.push({
    name: casual.title,
    description: casual.description,
    shortDescription: casual.short_description.slice(0, -1),
    price: casual.integer(10, 250),
  });
}

module.exports = products;