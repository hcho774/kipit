# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "🦸‍♀️ Seeding users..."
User.create([
  { full_name: "Hyun", username: "hyun", password_digest: "123", status: "active", email: "hcho774@gmail.com" },
  { full_name: "Amy", username: "amy", password_digest: "123", status: "active", email: "amy@gmail.com"},
])

puts "🦸‍♀️ Seeding products..."
Product.create([
  { product: Faker::Commerce.product_name, img: "https://images.samsung.com/is/image/samsung/latin_en-curved-cf390-lc27f390fhlxzp-001-front-black?$650_519_PNG$", price: Faker::Commerce.price, user_id: 1, in_stock: true, merchant: "samsung", payment: "Online Payment", quantity: 1,  status: "Delivered" },
  { product: Faker::Commerce.product_name, img: "https://images.samsung.com/is/image/samsung/latin_en-curved-cf390-lc27f390fhlxzp-001-front-black?$650_519_PNG$", price: Faker::Commerce.price, user_id: 2, in_stock: true, merchant: "google", payment: "COD", quantity: 1, status: "Pending"},
  { product: Faker::Commerce.product_name, img: "https://images.samsung.com/is/image/samsung/latin_en-curved-cf390-lc27f390fhlxzp-001-front-black?$650_519_PNG$", price: Faker::Commerce.price, user_id: 1, in_stock: true, merchant: "facebook", payment: "Online Payment", quantity: 1,  status: "Delivered" },
  { product: Faker::Commerce.product_name, img: "https://images.samsung.com/is/image/samsung/latin_en-curved-cf390-lc27f390fhlxzp-001-front-black?$650_519_PNG$", price: Faker::Commerce.price, user_id: 1, in_stock: true, merchant: "hello", payment: "Online Payment", quantity: 1,  status: "Delivered" }
])

puts "🦸‍♀️ Adding offices..."

10.times do |i|
    Office.create(
        office_name: Faker::Company.name, location: Faker::Address.street_address, user_id: User.ids.sample  
   )
end

puts "🦸‍♀️ Adding productoffices..."

10.times do |i|
    ProductOffice.create(product_id: Product.ids.sample, office_id: Office.ids.sample)
end

puts "🦸‍♀️ Done seeding!"
