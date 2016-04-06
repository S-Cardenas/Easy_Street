class Api::PropertiesController < ApplicationController

  def index
    @properties = Property.all
    render :index
  end

  def show
    @property = Property.find(params[:id])
    render :show
  end

	def create
		@property = Property.new(
			address: params['property']['address'],
			author_id: current_user.id,
			description: params['property']['description'],
			area: params['property']['area'],
			price: params['property']['price'],
			num_rooms: params['property']['num_rooms'],
			num_bathroom: params['property']['num_bathroom'],
			borough_id: params['property']['borough_id'],
			availability: params['property']['availability'],
			lat: params['property']['lat'],
			lng: params['property']['lng']
		)

		@property.save

		params['property']['images'].each do |k, image|
			pic = nil
			pic = Picture.new(title:"", imageable_id: @property.id, imageable_type: "Property", image: image)
			pic.save
		end

		render json: @property
	end

end
