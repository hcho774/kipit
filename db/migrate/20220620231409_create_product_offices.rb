class CreateProductOffices < ActiveRecord::Migration[7.0]
  def change
    create_table :product_offices do |t|
      t.integer :product_id
      t.integer :office_id

      t.timestamps
    end
  end
end
