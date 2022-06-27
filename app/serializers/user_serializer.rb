class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :status, :email, :full_name
  has_many :products
end
