class Api::BookmarksController < ApplicationController

	def index
		@bookmarks = Bookmark.where('author_id = ?', current_user.id )
		render :index
	end

	def create
		@bookmark = Bookmark.new(
			property_id: params['id'],
			author_id: current_user.id
		)

		@bookmark.save

		render json: Bookmark.where('author_id = ?', current_user.id )

	end

end
