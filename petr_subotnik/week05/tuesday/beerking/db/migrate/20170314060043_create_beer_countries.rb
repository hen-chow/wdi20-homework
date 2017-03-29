class CreateBeerCountries < ActiveRecord::Migration[5.0]
  def change
    create_table :beer_countries do |t|
      t.string :name
      t.string :image_src

      t.timestamps
    end
  end
end
