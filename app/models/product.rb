class Product < ApplicationRecord
    belongs_to :user
    has_many :productoffices
    has_many :offices, through: :productoffices
end
