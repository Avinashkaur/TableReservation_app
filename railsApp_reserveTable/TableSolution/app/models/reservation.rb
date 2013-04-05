class Reservation < ActiveRecord::Base
  attr_accessible :num_people, :from, :to, :customer_id, :current_table_id
  attr_accessor :current_table_id
  validate :table_should_have_members_less_than_equal_to_limit
  validates_presence_of :num_people, :from, :to
  has_and_belongs_to_many :tables
  belongs_to :customer
  private
  def table_should_have_members_less_than_equal_to_limit
	  table = Table.where(:id => current_table_id).first
 	  unless num_people <= table.max_people
	  	errors.add(:base, "Sorry, this table can be reserved for maximum #{table.max_people} people")
	  end
  end
end
