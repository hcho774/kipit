class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :product
      t.string :img
      t.string :merchant
      t.string :payment
      t.integer :price
      t.integer :quantity
      t.string :status
      t.integer :user_id
      t.integer :in_stock
  
      t.timestamps
    end
  end
end
