class OfficesController < ApplicationController

    def index
        offices = Office.all
        render json: offices, status: :ok
    end

    def destroy
        office = Office.find(params[:id])
        office.destroy
        head :no_content
      end
end
