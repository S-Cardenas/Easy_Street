class Api::ManhattanController < ApplicationController

	def index
    manhattan = Borough.find_by(name: "Manhattan")
		@properties = Property.where('borough_id = ?', manhattan.id)
		render :index
	end


end
