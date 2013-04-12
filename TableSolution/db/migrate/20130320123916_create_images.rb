class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.references :imageable, :polymorphic => {:default => 'Floor'}
      t.string :image, :null => false
      t.text :description

      t.timestamps
    end
  end
end
