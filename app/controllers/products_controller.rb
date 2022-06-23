class ProductsController < ApplicationController
  

    def index
        products = Product.all
        render json: products, status: :ok
    end

    def create
        product = @current_user.products.create!(product_params)
        render json: product, status: :created
      end
    
      private
    
      def product_params
        params.permit(:product, :img, :merchant, :payment, :price, :quantity)
      end
end
