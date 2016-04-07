class Api::BrooklynController < ApplicationController

	def index
		@properties = Property.where('borough_id = ?', 2)
		render :index
	end


end
