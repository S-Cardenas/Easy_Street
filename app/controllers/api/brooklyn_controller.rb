class Api::BrooklynController < ApplicationController

	def index
    brooklyn = Borough.find_by(name: "Brooklyn")
		@properties = Property.where('borough_id = ?', brooklyn.id)
		render :index
	end


end
