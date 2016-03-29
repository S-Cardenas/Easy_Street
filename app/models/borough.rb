class Borough < ActiveRecord::Base
  validates :name, presence: true

  has_many :properties,
    class_name: "Property",
    primary_key: :id,
    foreign_key: :borough_id

end
