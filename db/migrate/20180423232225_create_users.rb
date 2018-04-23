class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.integer :age
      t.string :name
      t.string :email
      t.string :password
      t.string :photo

      t.timestamps
    end
  end
end
