class Table < ActiveRecord::Base
  attr_accessible :is_active, :is_connectable, :is_smoking, :max_people, :name
  belongs_to :floor
  has_and_belongs_to_many :reservations

  validates_presence_of :name, :max_people
  validates :max_people, :numericality => { :greater_than => 0 }
  
end
