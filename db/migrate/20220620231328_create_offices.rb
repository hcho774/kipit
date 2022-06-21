class CreateOffices < ActiveRecord::Migration[7.0]
  def change
    create_table :offices do |t|
      t.string :office_name
      t.string :location
      t.integer :user_id

      t.timestamps
    end
  end
end
