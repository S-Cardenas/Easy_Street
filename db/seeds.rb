# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

User.destroy_all
u1 = User.create!(username: "Stefan", password: "password")
u2 = User.create!(username: "Sam", password: "password")

Borough.destroy_all
b1 = Borough.create!(name: 'Manhattan')
b2 = Borough.create!(name: 'Brooklyn')
b3 = Borough.create!(name: 'Queens')
b4 = Borough.create!(name: 'Bronx')
b5 = Borough.create!(name: 'Staten Island')

#Descriptions
def d1
  return "
  MODERN LIVING IN CHARMING CHELSEA BROWNSTONE

  With exquisite modern touches, this gorgeous, fully renovated one bedroom home has plenty of built-in furniture and shelving to maximize storage space. Partially furnished, the apartment features one-of-a-kind artwork on the walls, exposed brick, a working fireplace, a flat screen TV mounted to the bedroom wall, sleek marble-tiled spa-like bath and high ceilings. City-quiet windows make this home as silent as it is beautiful while sacrificing none of the excellent natural light. This rare gem, just two flights up, is available for a May 1 move in, pending board approval.

  Furnishings include:

  Bed Frame & Mattress
  Samsung TV
  Dining Table & Chairs
  Lamps / Lighting
  Kitchen Appliances
  Cooking & Dining Ware
  Built-In Shelving & Storage
  Air Conditioning Unit

  This well maintained pre-war coop is located just steps from major subway lines (A/C/E/1) & bus routes, The Highline, Meatpacking District, The West Village, Chelsea Piers and many popular restaurants and trendy boutiques. The combination of sleek styling and cozy details make this a charming choice!

  FOR MORE INFORMATION AND TO SCHEDULE A VIEWING: Justin Popovics, Licensed RE Salesperson: C - 917.751.4011, O - 212.864.4555, E: Justin.Popovics@CooperCooper.com

  A native New Yorker, Justin is originally from Syracuse and has lived in New York City for nearly two decades. He is a magna cum laude graduate of Ithaca College with a degree in Corporate Communication, and a double minor in Advertising and Public Relations. Prior to his career in real estate, Justin worked in Marketing/PR for SHAPE and Men's Fitness magazines, as well as a national health club chain. In addition, he owned and operated Built 2 Win, a personal training service offering customized fitness plans, nutritional guidance and self-esteem building for beauty pageant contestants. Justin was the Official Fitness Trainer for several states for Miss USA and Miss Teen USA and has worked with titleholder hopefuls on the local, national and international levels. His unique background and coaching abilities make Justin a great listener, allowing him to be acutely aware of his clients’ needs. He excels at setting a specific goal and working tirelessly to achieve it, while bringing a bright, fun, effervescent energy to every relationship. Outside of real estate, Justin hosts image consulting/confidence workshops and motivational speaking seminars for young people focusing on self-esteem awareness, self-respect and eating disorder prevention. He also enjoys fitness and working out, museums, reading motivational books, mentoring and charity work. Justin lives on the Upper East Side with his Champagne Point Tonkinese cat, Miss Georgia."

end
def d2
  return "444 West 19th Street Apartment, #202 850 square foot / one bed / one bath with 450 SQ. FT. OF PRIVATE OUTDOOR PATIO! Entering this floor through home is as simple as stepping out of a private keyed elevator and into to this elegant and modern residence, in the heart of Chelsea. A windowed grand foyer which also doubles as a home office is a bright, functional and welcoming entrance spaceThe exquisitely designed open kitchen features Ged cucine Italian cabinets in high gloss white with quartz glass doors, Gaggenau range & oven with an overhead vented hood and also a dishwasher. A Sub-zero refrigerator, statuario marble slab counters and Grohe fixture all work harmoniously to establish a crisp, clean and modern look. The kitchen also comes complete with a freestanding island with overhang for barstools.The oversized living & dinning space is perfect for entertaining with floor to ceiling thermal glass that leads you out to your south facing private patio. With over 450 square feet of outdoor living, the completely furnished, planted and gas ready bbq is just in time for your spring season parties. South facing with open exposures from the East to West, you are guaranteed direct sunlight all day long. The master bedroom also features floor to ceiling glass with ample room for a king size bed along with views south to your patio. The bathroom has two entrances, one en suite and one through the main area. An oversized rain shower with separate hand held sprayer and bench, complete the glass encased spa like shower. There is a large mirror, wide sink and tons of storage. Plus, a WASHER & DRYER to keep those towels warm and clean. The apartment also features central A/C in every room. 444 West 19th Street or also known as The Chelsea Club is an upscale full-service condominium building designed by Andres Escobar and Karl Fischer Architects. The glass encased building has a two story high lobby with 24 hour doorman/concierge, fitness center, entertaining lounge, common roof deck with furniture, private storage (AVAILBLE WITH THE UNIT), pets are allowed AND the apartment has PARKING SPOT for an extra cost located in the building.Available May 1, 2016 (Also available furnished for $6,900)Call or email Jared Schwadron for a private showing - jared.schwadron@elliman.com / 917.355.9676"
end
def d3
  return "Call for additional details. "
end
def d4
	return "Located at the iconic Ritz Tower, residence 404 is a triple-mint, split 2 bedroom, 2 bathroom home with a one-of-a-kind magnificent terrace that extends 62-feet along Park Avenue at 57th Street. Set in one of the city's most sought after cooperative buildings, this is an ideal home for entertaining and is perfect for either a full-time resident or pied a terre. The entry foyer opens into an exceptionally bright and spacious living room/dining room an adjacent library/den could also serve as a third bedroom. The living room doors open up to an enormous terrace with open city and Park Avenue views. The master bedroom suite has direct access to the terrace, dressing room and a beautifully appointed calacatta marble master bath with double sinks, soaking tub and separate shower. The second bedroom has a dedicated marble bath with shower. The stunning chef's kitchen with marble counter tops and top-of-the-line appliances (Miele, Sub-Zero, Wolf) has discreet pocket doors so it can be closed off or open to the dining room. This home can be combined with neighboring Unit 401 to create a true 3 bedroom masterpiece. This combination will allow the new owner to have the entire Park Avenue side of the building and the entire terrace, a truly unique setting.The apartment has been renovated for modern living while leaving the special prewar details including trim, moldings, and herringbone floors intact.Designed in 1926 by Emery Roth, The Ritz Tower is one of the world's best addresses. White-glove hotel style amenities include full concierge services, 24 hour doorman, gourmet chef de cuisine on premises offering lunch and dinner five days per week, housekeeping, 24 hour maintenance staff, party room and fitness center. Pied-a-terres and foreign buyers welcome. Coop allows 50% financing and utilities are included in maintenance. Pets allowed with board approval."
end
def d5
	return "NEW ON THE MARKET: Rarely opportunity in trendy Williamsburg, Brooklyn! Breathtaking 2 bedroom / 2 bathroom luxury condominium unit available at The Residences of Williamsburg.WARNING: You are falling in love!This apartment is absolutely opulent and extremely elegant. Bright living space with Brazilian walnut floors, large floor to ceiling windows and an awesome balcony which has a view of the pool courtyard . Open kitchen with quarts counter-tops, stainless steel appliances, a Subzero refrigerator, Bosch dishwasher, Thermador cook-top and a Jenn Air microwave. Master suite with views to the East River State Park, ensuite marble bathroom with double sinks and heated floors. Second bedroom with floor to ceiling windows, views of the pool and great closet space. Guest&rsquo;s bath also with heated floors and a deep soaking tub with separate glass door shower. There is an in unit washer/dryer for your convenience and building is fully equippedwith a fitness center complimentary for building residents.Building amenities include doorman, concierge, cold storage for food deliveries, lounge, bike storage and a parking garage for residents. Efficiently located one stop from Manhattan at the Bedford Avenue stop on the L train, across from the East River State Park, pretty near the East River ferry, and a variety of great bars and restaurants."
end
def d6
	return "Unit 1C is a park-facing 2-bed, 2-bath duplex boasting 1,315 SF at the Aqua Condominium. Deeded PARKING is INCLUDED. The living area is open and bright with warm oak floors, the kitchen features Sub-Zero and Viking appliances, custom cabinetry and black granite counters. An architecturally distinct staircase leads downstairs to the master suite, which offers ample storage, home office space, laundry room, two large closets (including a walk-in), and a marble-accented full bathroom. The Aqua is a modern 55-unit building where residents enjoy a part-time doorman, playroom, bike storage, and a beautiful common deck designed for hosting the ultimate BBQ grilling parties. The building has a 421-A tax abatement until 2024. Just outside your door is Williamsburg's 35-acre McCarren Park featuring summer swimming/winter skating, tennis courts, baseball diamonds, a soccer field, a running track with body-weight fitness array, two dog runs and a farmer's market every weekend in season. All of this just a short distance to the L/G train at Lorimer and Bedford and surrounded by the best coffee shops, cafes, restaurants and boutiques in Williamsburg. Please note apartment is listed as a one bedroom plus rec room."
end

Property.destroy_all
p1 = Property.create!(address:"310 West 18th Street #3A", author_id: u1.id, description: d1, area: 1200, price: 3000, num_rooms: 2.5, num_bathroom: 1, borough_id: b1.id, availability: true, lat: 40.739013, lng: -73.991950)
p2 = Property.create!(address:"444 West 19th Street #202", author_id: u1.id, description: d2, area: 850, price: 6500, num_rooms: 4, num_bathroom: 1, borough_id: b1.id, availability: true, lat: 40.744973, lng: -74.005030)
p3 = Property.create!(address:"318 Grand Street #2J", author_id: u2.id, description: d3, area: 1600, price: 4500, num_rooms: 2, num_bathroom: 2, borough_id: b2.id, availability: true, lat: 40.712705, lng: -73.956608)
p4 = Property.create!(address:"465 Park Avenue #404", author_id: u2.id, description: d4, area: 2100, price: 4000, num_rooms: 2, num_bathroom: 2, borough_id: b1.id, availability: true, lat: 40.761815, lng: -73.970186)
p5 = Property.create!(address:"135 North 11th Street #5G", author_id: u2.id, description: d5, area: 918, price: 3400, num_rooms: 2, num_bathroom: 2 , borough_id: b2.id, availability: true, lat: 40.720823, lng: -73.955977)
p6 = Property.create!(address:"141 Devoe Street #Bldg", author_id: u1.id, description:d6, area: 3500, price: 3000, num_rooms: 10, num_bathroom: 4, borough_id: b2.id, availability: true, lat: 40.714071, lng: -73.945070)
# p7 = Property.create!(address:, author_id:, description:, area:, price:, num_rooms:, num_bathroom:, borough_id: , availability: true)
# p8 = Property.create!(address:, author_id:, description:, area:, price:, num_rooms:, num_bathroom:, borough_id: , availability: true)
# p9 = Property.create!(address:, author_id:, description:, area:, price:, num_rooms:, num_bathroom:, borough_id: , availability: true)
#
#
# Property.create!(address:, author_id:, description:, area:, price:, num_rooms:, num_bathroom: borough_id:, availability:)


Picture.destroy_all
pic1 = Picture.create!(title: "310 W 18th pic 1", imageable_id: p1.id, imageable_type: "Property")
pic1.image = File.open('app/assets/images/310w/310w1.jpg')
pic1.save!
pic2 = Picture.create!(title: "310 W 18th pic ", imageable_id: p1.id, imageable_type: "Property")
pic2.image = File.open('app/assets/images/310w/310w2.jpg')
pic2.save!
pic3 = Picture.create!(title: "310 W 18th pic ", imageable_id: p1.id, imageable_type: "Property")
pic3.image = File.open('app/assets/images/310w/310w3.jpg')
pic3.save!
pic4 = Picture.create!(title: "310 W 18th pic ", imageable_id: p1.id, imageable_type: "Property")
pic4.image = File.open('app/assets/images/310w/310w4.jpg')
pic4.save!

pic5 = Picture.create!(title: "", imageable_id: p3.id, imageable_type: "Property")
pic5.image = File.open('app/assets/images/318g/318g1.jpg')
pic5.save!
pic6 = Picture.create!(title: "", imageable_id: p3.id, imageable_type: "Property")
pic6.image = File.open('app/assets/images/318g/318g2.jpg')
pic6.save!
pic7 = Picture.create!(title: "", imageable_id: p3.id, imageable_type: "Property")
pic7.image = File.open('app/assets/images/318g/318g3.jpg')
pic7.save!
pic8 = Picture.create!(title: "", imageable_id: p3.id, imageable_type: "Property")
pic8.image = File.open('app/assets/images/318g/318g4.jpg')
pic8.save!

pic9 = Picture.create!(title: "", imageable_id: p2.id, imageable_type: "Property")
pic9.image = File.open('app/assets/images/444w/444w1.jpg')
pic9.save!
pic10 = Picture.create!(title: "", imageable_id: p2.id, imageable_type: "Property")
pic10.image = File.open('app/assets/images/444w/444w2.jpg')
pic10.save!
pic11 = Picture.create!(title: "", imageable_id: p2.id, imageable_type: "Property")
pic11.image = File.open('app/assets/images/444w/444w3.jpg')
pic11.save!
pic12 = Picture.create!(title: "", imageable_id: p2.id, imageable_type: "Property")
pic12.image = File.open('app/assets/images/444w/444w4.jpg')
pic12.save!

pic13 = Picture.create!(title: "", imageable_id: p4.id, imageable_type: "Property")
pic13.image = File.open('app/assets/images/465P/465P1.jpg')
pic13.save!
pic14 = Picture.create!(title: "", imageable_id: p4.id, imageable_type: "Property")
pic14.image = File.open('app/assets/images/465P/465P2.jpg')
pic14.save!
pic15 = Picture.create!(title: "", imageable_id: p4.id, imageable_type: "Property")
pic15.image = File.open('app/assets/images/465P/465P3.jpg')
pic15.save!

pic16 = Picture.create!(title: "", imageable_id: p5.id, imageable_type: "Property")
pic16.image = File.open('app/assets/images/135N/135N1.jpg')
pic16.save!

pic17 = Picture.create!(title: "", imageable_id: p5.id, imageable_type: "Property")
pic17.image = File.open('app/assets/images/135N/135N2.jpg')
pic17.save!

pic18 = Picture.create!(title: "", imageable_id: p5.id, imageable_type: "Property")
pic18.image = File.open('app/assets/images/135N/135N3.jpg')
pic18.save!

pic19 = Picture.create!(title: "", imageable_id: p6.id, imageable_type: "Property")
pic19.image = File.open('app/assets/images/141D/141D1.jpg')
pic19.save!

pic20 = Picture.create!(title: "", imageable_id: p6.id, imageable_type: "Property")
pic20.image = File.open('app/assets/images/141D/141D2.jpg')
pic20.save!

pic21 = Picture.create!(title: "", imageable_id: p6.id, imageable_type: "Property")
pic21.image = File.open('app/assets/images/141D/141D3.jpg')
pic21.save!


Bookmark.destroy_all
bk1 = Bookmark.create!(property_id: p3.id, author_id: u1.id)
bk2 = Bookmark.create!(property_id: p4.id, author_id: u1.id)
