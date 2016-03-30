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

Borough.destroy_all
b1 = Borough.create!(name: 'Manhattan')
b2 = Borough.create!(name: 'Brooklyn')
b3 = Borough.create!(name: 'Queens')
b4 = Borough.create!(name: 'Bronx')
b5 = Borough.create!(name: 'Staten Island')

#Descriptions
def d1
  return "Description
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


Property.destroy_all
p1 = Property.create!(address:"310 West 18th Street #3A", author_id: 1, description: d1, area: 1200, price: 3000, num_rooms: 2.5, num_bathroom: 1, borough_id: b1.id, availability: true, lat: 40.739013, lng: -73.991950)
p2 = Property.create!(address:"444 West 19th Street #202", author_id: 1, description: d2, area: 850, price: 6500, num_rooms: 4, num_bathroom: 1, borough_id: b1.id, availability: true, lat: 40.744973, lng: -74.005030)
p3 = Property.create!(address:"318 Grand Street #2J", author_id: 2, description: d3, area: 1600, price: 4500, num_rooms: 2, num_bathroom: 2, borough_id: b2.id, availability: true, lat: 40.712705, lng: -73.956608)
# p4 = Property.create!(address:, author_id:, description:, area:, price:, num_rooms:, num_bathroom:, borough_id: , availability: true)
# p5 = Property.create!(address:, author_id:, description:, area:, price:, num_rooms:, num_bathroom:, borough_id: , availability: true)
# p6 = Property.create!(address:, author_id:, description:, area:, price:, num_rooms:, num_bathroom:, borough_id: , availability: true)
# p7 = Property.create!(address:, author_id:, description:, area:, price:, num_rooms:, num_bathroom:, borough_id: , availability: true)
# p8 = Property.create!(address:, author_id:, description:, area:, price:, num_rooms:, num_bathroom:, borough_id: , availability: true)
# p9 = Property.create!(address:, author_id:, description:, area:, price:, num_rooms:, num_bathroom:, borough_id: , availability: true)
#
#
# Property.create!(address:, author_id:, description:, area:, price:, num_rooms:, num_bathroom: borough_id:, availability:)
