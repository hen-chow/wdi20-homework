require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

#ORIGINAL INDEX ERB!
# get '/' do
#
#   db = SQLite3::Database.new 'database.db'
#
#   sql = "SELECT * FROM car;"
#
#   @results = db.execute sql
#
#   db.results_as_hash = true
#
#   erb :index, layout: :main
# end

configure do
  #make a new connection to our database and store it in the variable db
  set :db, SQLite3::Database.new("database.db")

  #make my sql query results easier to user
  settings.db.results_as_hash = true
end

get '/' do
  @results = settings.db.execute "SELECT * FROM cars;"           #results!

  erb :index, layout: :main
end

get "/cars/new" do
  erb :new, layout: :main
end

post "/cars" do
  settings.db.execute "INSERT INTO cars (make, model, img_src) VALUES ('#{params[:make]}', '#{params[:model]}', '#{params[:img_src]}')";
  redirect "/"
end

get "/cars/:id/edit" do
  id = params[:id]
  results = settings.db.execute "SELECT * FROM cars WHERE id=#{id};"

  @car = results[0]
  erb :edit, layout: :main
end

post "/cars/:id" do
  settings.db.execute "UPDATE cars SET make='#{params['make']}', model='#{params['model']}', img_src='#{params['img_src']}' WHERE id=#{params[:id]};"
  redirect "/cars/#{params[:id]}"
end

get "/cars/:id/delete" do
  settings.db.execute "DELETE FROM cars WHERE id=#{params[:id]};"
  redirect "/"
end

get "/cars/:id" do
  id = params[:id]
  results = settings.db.execute "SELECT * FROM cars WHERE id=#{id};"
  @car = results[0]
  erb :show, layout: :main
end
