class HistoriesController < ApplicationController

  def create
    History.create(term: params[:term])
  end

end
