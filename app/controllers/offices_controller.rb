class OfficesController < ApplicationController

    def index
        offices = Office.all
        render json: offices, status: :ok
    end
end
