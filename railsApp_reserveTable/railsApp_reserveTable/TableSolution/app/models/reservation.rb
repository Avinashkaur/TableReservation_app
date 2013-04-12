class Reservation < ActiveRecord::Base
  attr_accessible :num_people, :from, :to, :customer_id, :table_id
  attr_accessor :table_id
  validates_presence_of :num_people, :from, :to
  # validates :num_people, :presence => {:message => 'Number of people cannot be blank, Reservation not saved'}
  # validates :from, :presence => {:message => 'Starting time cannot be blank, Reservation not saved'}
  # validates :to, :presence => {:message => 'End time cannot be blank, Reservation not saved'}
  
  validate :table_should_have_members_less_than_equal_to_limit
  has_and_belongs_to_many :tables
  belongs_to :customer
  private
  def table_should_have_members_less_than_equal_to_limit
	  table = Table.where(:id => table_id).first
 	  unless (table.nil? && num_people <= table.max_people)
	  	errors.add(:base, "Sorry, this table can be reserved for maximum #{table.max_people} people")
	  end
  end
end