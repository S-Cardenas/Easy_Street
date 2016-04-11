class Api::SearchController < ApplicationController

  def index
    @properties = Property
      .where(borough)
      .where(priceLow)
      .where(priceHigh)
      .where(areaLow)
      .where(areaHigh)
      .where(numRooms)
      .where(numBathroom)

    render :index
  end

  private

  def borough
    return "" if (params['neighborhood'] == "any")
    neighborhood = Borough.find_by(name: params['neighborhood'])
    return "borough_id = #{neighborhood.id}"
  end

  def priceLow
    min = params['priceLow']
    return min == "any" ? "" : "price >= #{min}"
  end

  def priceHigh
    max = params['priceHigh']
    return max == "any" ? "" : "price <= #{max}"
  end

  def areaLow
    min = params['areaLow']
    return min == "any" ? "" : "area >= #{min}"
  end

  def areaHigh
    max = params['areaHigh']
    return max == "any" ? "" : "area <= #{max}"
  end

  def numRooms
    rooms = params['num_rooms']
    return rooms == "any" ? "" : "num_rooms = #{rooms}"
  end

  def numBathroom
    baths = params['num_bathroom']
    return baths == "any" ? "" : "num_bathroom = #{baths}"
  end



end
