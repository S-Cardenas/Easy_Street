class Api::SearchController < ApplicationController

  def index
    borough = Borough.find_by(name: params['neighborhood'])
    @properties = Property
      .where( 'borough_id = ?', borough.id)
      .where( 'price BETWEEN ? AND ?', params['priceLow'], params['priceHigh'])
      .where( 'area BETWEEN ? AND ?', params['areaLow'], params['areaHigh'])
      .where( 'num_rooms = ?', params['num_rooms'])
      .where( 'num_bathroom = ?', params['num_bathroom'])

    render :index
  end

end
