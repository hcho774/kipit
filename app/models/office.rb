class Office < ApplicationRecord
    belongs_to :user
    has_many :productoffices
    has_many :products, through: :productoffices
end
