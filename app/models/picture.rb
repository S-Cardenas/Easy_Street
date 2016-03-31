class Picture < ActiveRecord::Base
  belongs_to :imageable, polymorphic: true

  has_attached_file :image, default_url: "missing.png"
  
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
