class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.references :reservations
      t.string :name, :null=>false
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
