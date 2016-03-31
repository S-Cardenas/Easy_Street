class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :title, null: false
      t.integer :imageable_id, null: false
      t.string :imageable_type, null: false
      t.timestamps
    end

    add_index :pictures, :imageable_id
  end
end
