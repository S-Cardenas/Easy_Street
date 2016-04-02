class Property < ActiveRecord::Base
  validates :address, :author_id, :description, :area, :price, :num_rooms, :num_bathroom, :borough_id, :availability, presence: true


  has_many :pictures, as: :imageable

  belongs_to :borough,
    class_name: "Borough",
    primary_key: :id,
    foreign_key: :borough_id

  belongs_to :author,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id

end
