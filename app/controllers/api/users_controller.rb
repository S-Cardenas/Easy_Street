class Api::UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render  json: @user
    else
      render json: { message: "Invalid Sign Up" }, status: 401
    end
  end

  private
  def user_params
    params.require('user').permit('username', 'password')
  end

end
