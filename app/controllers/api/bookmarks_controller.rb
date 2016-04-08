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

		@bookmarks = Bookmark.where('author_id = ?', current_user.id )

		render json: @bookmarks

	end

	def destroy

		bookmark = Bookmark.find_by(author_id: params['author_id'], property_id: params['property_id'])
		# bookmark = Bookmark
		# 						.where( 'author_id = ?', params['author_id'] )
		# 						.where( 'property_id = ?', params['property_id'] )
		byebug
		bookmark.delete

		@bookmarks = Bookmark.where('author_id = ?', current_user.id )

		render json: @bookmarks

	end

end
