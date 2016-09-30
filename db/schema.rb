# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160930143029) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookmarks", force: :cascade do |t|
    t.integer  "property_id", null: false
    t.integer  "author_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "boroughs", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pictures", force: :cascade do |t|
    t.string   "title",              null: false
    t.integer  "imageable_id",       null: false
    t.string   "imageable_type",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "pictures", ["imageable_id"], name: "index_pictures_on_imageable_id", using: :btree

  create_table "properties", force: :cascade do |t|
    t.string   "address",                     null: false
    t.integer  "author_id",                   null: false
    t.string   "description",                 null: false
    t.integer  "area",                        null: false
    t.integer  "price",                       null: false
    t.integer  "num_rooms",                   null: false
    t.integer  "num_bathroom",                null: false
    t.integer  "borough_id",                  null: false
    t.boolean  "availability", default: true, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "lat",                         null: false
    t.float    "lng",                         null: false
  end

  add_index "properties", ["borough_id", "price", "area", "num_rooms", "num_bathroom"], name: "search_index", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
