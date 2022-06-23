class Office < ApplicationRecord
    belongs_to :user
    has_many :product_offices
    has_many :products, through: :product_offices
end
