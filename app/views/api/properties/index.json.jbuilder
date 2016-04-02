json.array! @properties do |property|
  json.address property.address
  json.author_id property.author.username
  json.description property.description
  json.area property.area
  json.price property.price
  json.num_rooms property.num_rooms
  json.num_bathroom property.num_bathroom
  json.borough_id property.borough.name
  json.lat property.lat
  json.lng property.lng
	json.pic_url property.pictures.first.image.url
end
