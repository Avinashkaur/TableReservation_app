class CreateTables < ActiveRecord::Migration
  def change
    create_table :tables do |t|
      t.references :floor
      t.string :name
      t.boolean :is_active, :null=>false, :default=>true
      t.integer :max_people, :null=>false
      t.boolean :is_connectable, :null=>false, :default=>false
      t.boolean :is_smoking, :null=>false, :default=>false

      t.timestamps
    end
  end
end
