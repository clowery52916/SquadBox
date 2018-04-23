class User < ApplicationRecord
  has_many: :comments, dependent: :destroy
  validates :password, presence: true, length: { minimum: 6}
  validates :email, confirmation: true
  validates :age, numericality: true, number: { maximum: 18 }{ message: 'You are over the allowed age, your age is %{value}, you are not permitted to enter this site.' }
end
