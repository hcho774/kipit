class ProductOffice < ApplicationRecord
    belongs_to :office
    belongs_to :product
end
