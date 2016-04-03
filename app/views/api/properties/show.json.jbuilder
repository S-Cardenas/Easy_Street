json.extract! @property, :id, :address, :author_id, :description, :area, :price, :num_rooms, :num_bathroom, :borough_id, :availability, :lat, :lng

json.author @property.author.username
json.borough @property.borough.name

json.pictures do
  json.array! @property.pictures do |picture|
    json.title picture.title
    json.imageable_id picture.imageable_id
    json.url picture.image.url
  end
end
