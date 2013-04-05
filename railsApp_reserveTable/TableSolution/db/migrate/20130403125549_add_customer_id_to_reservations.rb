class AddCustomerIdToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :customer_id, :integer, :null => false
  end
end
