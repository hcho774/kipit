class User < ApplicationRecord
    has_many :offices
    has_many :products
    has_many :productoffices, through: :products

    has_secure_password
end
