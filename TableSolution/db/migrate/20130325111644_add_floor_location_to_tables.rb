class AddFloorLocationToTables < ActiveRecord::Migration
  def change
    add_column :tables, :floor_x_location, :integer
    add_column :tables, :floor_y_location, :integer
  end
end
