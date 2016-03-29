class CreateProperties < ActiveRecord::Migration
  def change
    create_table :properties do |t|
      t.string :address, null: false
      t.integer :author_id, null: false
      t.string :description, null: false
      t.integer :area, null: false
      t.integer :price, null: false
      t.integer :num_rooms, null: false
      t.integer :num_bathroom, null: false
      t.integer :borough_id, null: false
      t.boolean :availability, null: false, default: true

      t.timestamps;
    end
  end
end
