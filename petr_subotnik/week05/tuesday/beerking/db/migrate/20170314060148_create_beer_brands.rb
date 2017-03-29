class CreateBeerBrands < ActiveRecord::Migration[5.0]
  def change
    create_table :beer_brands do |t|
      t.string :name
      t.string :image_src
      t.integer :beer_country_id

      t.timestamps
    end
  end
end
