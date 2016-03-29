class Api::BoroughsController < ApplicationController

  def index
    @boroughs = Borough.all
    render :index
  end

end
