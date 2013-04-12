class AddFromAndToToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :from, :time
    add_column :reservations, :to, :time
  end
end
