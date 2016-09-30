class AddIndexToProperties < ActiveRecord::Migration
  def change
    add_index :properties, [:borough_id, :price, :area, :num_rooms, :num_bathroom], :name => 'search_index'
  end
end
