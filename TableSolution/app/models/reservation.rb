class Reservation < ActiveRecord::Base
  attr_accessible :num_people
  has_and_belongs_to_many :tables
  belongs_to :customer
end
