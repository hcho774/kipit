class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :image
      t.integer :price
      t.integer :user_id
      t.integer :in_stock

      t.timestamps
    end
  end
end
