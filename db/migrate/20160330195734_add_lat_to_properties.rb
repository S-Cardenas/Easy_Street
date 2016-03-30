class AddLatToProperties < ActiveRecord::Migration
  def change
    add_column :properties, :lat, :float, :null => false
    add_column :properties, :lng, :float, :null => false

  end
end
