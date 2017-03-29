require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'

configure do
ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "database.db"
)
end

after {ActiveRecord::Base.clear_active_connections!}

class Car < ActiveRecord::Base
end


get "/" do
  @results = Car.all
  erb :index, layout: :main
end

get "/cars/new" do
  erb :new, layout: :main
end

post "/cars" do
  Car.create(params)
  redirect "/"
end

get "/cars/:id/edit" do
  @car = Car.find(params[:id])
  erb :edit, layout: :main
end


post "/cars/:id" do
  params.delete("splat")
  params.delete("captures")
  Car.find(params[:id]).update_attributes(params)
  redirect "/cars/#{params[:id]}"
end

get "/cars/:id/delete" do
  Car.find(params[:id]).delete
  redirect "/"
end

get "/cars/:id" do
  @car = Car.find(params[:id])
  erb :show, layout: :main
end
