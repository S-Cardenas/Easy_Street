class Bookmark < ActiveRecord::Base
	validates :property_id, :author_id, presence: true

	belongs_to :property,
		class_name: "Property",
		primary_key: :id,
		foreign_key: :property_id

	belongs_to :author,
		class_name: "Author",
		primary_key: :id,
		foreign_key: :author_id

end
