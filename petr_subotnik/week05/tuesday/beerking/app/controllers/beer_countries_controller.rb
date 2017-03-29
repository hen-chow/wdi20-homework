class BeerCountriesController < ApplicationController
def index
    @beer_countries = BeerCountry.all
  end

  def new
    @beer_country = BeerCountry.new
  end

  def create
    @beer_country = BeerCountry.new(clean_params)
    if @beer_country.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @beer_country = BeerCountry.find(params[:id])
  end

  def destroy
    @beer_country = BeerCountry.find(params[:id]).destroy
    redirect_to root_path
  end

  private

  def clean_params
    params.require(:beer_country).permit(:name, :image_src)
  end
end
