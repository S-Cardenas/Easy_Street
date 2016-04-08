json.array! @bookmarks do |bookmark|
	json.bookmarkId bookmark.id
	json.property_id bookmark.property.id
	json.author_id bookmark.property.author.id

	json.address bookmark.property.address
	json.id bookmark.property.id
  json.author_id bookmark.property.author.username
  json.description bookmark.property.description
  json.area bookmark.property.area
  json.price bookmark.property.price
  json.num_rooms bookmark.property.num_rooms
  json.num_bathroom bookmark.property.num_bathroom
  json.borough_id bookmark.property.borough.name
  json.lat bookmark.property.lat
  json.lng bookmark.property.lng
	json.pic_url bookmark.property.pictures.first.image.url
end
