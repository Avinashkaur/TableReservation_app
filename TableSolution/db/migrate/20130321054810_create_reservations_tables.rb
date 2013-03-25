class CreateReservationsTables < ActiveRecord::Migration
  def change
    create_table :reservations_tables do |t|
      t.references :reservation
      t.references :tables

      t.timestamps
    end
  end
end
