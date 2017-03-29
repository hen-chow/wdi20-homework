require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :index, layout: :main_layout
end

get '/movie_details' do
  title = params[:title]
  response = HTTParty.get("http://www.omdbapi.com/?t=#{title}")
  @movie = response

  erb :show, layout: :main_layout
end
