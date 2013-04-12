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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130404070619) do

  create_table "customers", :force => true do |t|
    t.integer  "reservations_id"
    t.string   "name",            :null => false
    t.string   "email"
    t.string   "phone"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  create_table "floors", :force => true do |t|
    t.string   "name"
    t.integer  "position"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "images", :force => true do |t|
    t.integer  "imageable_id"
    t.string   "imageable_type", :default => "Floor"
    t.string   "image",                               :null => false
    t.text     "description"
    t.datetime "created_at",                          :null => false
    t.datetime "updated_at",                          :null => false
  end

  create_table "reservations", :force => true do |t|
    t.integer  "num_people"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.integer  "customer_id", :null => false
    t.time     "from"
    t.time     "to"
  end

  create_table "reservations_tables", :force => true do |t|
    t.integer  "reservation_id"
    t.integer  "table_id"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  create_table "tables", :force => true do |t|
    t.integer  "floor_id"
    t.string   "name"
    t.boolean  "is_active",        :default => true,  :null => false
    t.integer  "max_people",                          :null => false
    t.boolean  "is_connectable",   :default => false, :null => false
    t.boolean  "is_smoking",       :default => false, :null => false
    t.datetime "created_at",                          :null => false
    t.datetime "updated_at",                          :null => false
    t.integer  "floor_x_location"
    t.integer  "floor_y_location"
  end

end
