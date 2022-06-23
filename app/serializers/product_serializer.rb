class ProductSerializer < ActiveModel::Serializer
  attributes :id, :product, :img,:merchant, :price, :quantity, :status, :user_id, :in_stock, :created_at, :updated_at, :payment
  has_one :user
  has_many :offices
end
