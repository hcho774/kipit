class UserSerializer < ActiveModel::Serializer
  attributes :id, :status, :email, :full_name
  has_many :products
end
