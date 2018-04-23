class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :age
      t.string :integer
      t.string :photo_url
      t.string :password

      t.timestamps
    end
  end
end
