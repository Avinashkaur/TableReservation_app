class Floor < ActiveRecord::Base
  attr_accessible :name, :position
  has_many :tables
end
