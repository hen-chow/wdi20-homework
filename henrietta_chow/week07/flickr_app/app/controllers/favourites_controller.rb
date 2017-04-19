class FavouritesController < ApplicationController

  def index
    @favourites = Favourite.all
  end

  def create
    Favourite.create(image_src: params[:image_src])
    render json: {message: "Thanks for the like"}
  end

end
