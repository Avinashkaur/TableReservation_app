class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :num_people

      t.timestamps
    end
  end
end
