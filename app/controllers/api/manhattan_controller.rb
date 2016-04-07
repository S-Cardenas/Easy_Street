class Api::ManhattanController < ApplicationController

	def index
		@properties = Property.where('borough_id = ?', 1)
		render :index
	end


end
