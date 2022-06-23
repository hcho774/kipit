class User < ApplicationRecord
    has_secure_password
    has_many :offices
    has_many :products
    has_many :product_offices, through: :products

 
    validates :username, presence: true, uniqueness: true
end
