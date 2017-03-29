class BeerBrandsController < ApplicationController
  def new
    @beer_brand = BeerBrand.new
    @beer_country_id = params[:beer_country_id]
  end

  def create
    @beer_brand = BeerBrand.new(clean_params)
    if @beer_brand.save
      redirect_to beer_country_path(@beer_brand.beer_country_id)
    else
      render :new
    end
  end

  private

  def clean_params
    params.require(:beer_brand).permit(:name, :image_src, :beer_country_id)
  end
end
