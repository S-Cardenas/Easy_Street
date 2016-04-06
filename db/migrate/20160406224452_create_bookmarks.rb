class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
			t.integer :property_id, null: false
			t.integer :author_id, null: false

			t.timestamps
    end
  end
end
