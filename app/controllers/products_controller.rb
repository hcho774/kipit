class ProductsController < ApplicationController
    
    def index
        products = Product.all
        render json: products, include: :user, status: :ok
    end
end
