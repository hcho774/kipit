class ProductsController < ApplicationController
  

    def index
        products = Product.all
        render json: products, status: :ok
    end

    def create
        product = @current_user.products.create!(product_params)
        render json: product, status: :created
      end

      def show
        product = Product.find(params[:id])
        render json: product, status: :ok
      end

      def update
        product = Product.find(params[:id])
        product.update!(product_params)
        render json: product, status: :ok
      end

      def destroy
        product = Product.find(params[:id])
        product.destroy
        head :no_content
      end
    
      private
    
      def product_params
        params.permit(:product, :img, :merchant, :payment, :price, :quantity, :status)
      end
end
