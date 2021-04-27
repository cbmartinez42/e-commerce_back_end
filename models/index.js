// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  // I don't need a foreign key here, do i??????????????????????????????????????????????????????????????
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products, {
  through: ProductTag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
