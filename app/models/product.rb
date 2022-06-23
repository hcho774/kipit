class Product < ApplicationRecord
    belongs_to :user
    has_many :product_offices
    has_many :offices, through: :product_offices
end
