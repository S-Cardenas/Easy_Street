class Api::PropertiesController < ApplicationController

  def index
    @properties = Property.all
    render :index
  end

  def show
    @property = Property.find(params[:id])
    render :show
  end

end
