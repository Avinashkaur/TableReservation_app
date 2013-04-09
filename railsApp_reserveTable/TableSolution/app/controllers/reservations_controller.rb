
class ReservationsController < ApplicationController
  # GET /reservations
  # GET /reservations.json
  def index
    @reservations = Reservation.all
    @customers = Customer.all
    @tables_to_show = Floor.first.tables
    @reservation = Reservation.new
    @tables_to_show = Floor.first.tables

    respond_to do |format|
      format.html # index.html.erb
    end
  end

  # GET /reservations/1
  def show
    @reservation = Reservation.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
    end
  end

  # GET /reservations/new
  
  def new
    @reservation = Reservation.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  # GET /reservations/1/edit
  def edit
    @reservation = Reservation.find(params[:id])
    
    respond_to do |format|
      format.js
    end    
  end

  # POST /reservations
  
  def create
   
    @table = Table.where(:id => params[:reservation][:table_id]).first
    @reservation = @table.reservations.create(params[:reservation])
    respond_to do |format|
      format.js
    end
  end

  # PUT /reservations/1
    
  # def update
  #   @reservation = Reservation.find(params[:id])
  #   # debugger
  #   @table = Table.where(:id => params[:table_id]).first
  #   @reservation = @table.reservations.create(params[:reservation].merge!(:current_table_id => @table.id))
    
  #   respond_to do |format|
  #     if Reservation.find(params[:id]).update_attributes(params[:reservation])
  #       format.html { redirect_to @reservation, notice: 'Reservation was successfully updated.' }
  #     else
  #       format.html { render action: "edit" }
  #     end
  #   end
  # end
  def update
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
     
    @table = Table.where(:id => params[:reservation][:table_id]).first
     
    respond_to do |format|
      if @reservation = @table.reservations.create(params[:reservation])
        format.html { redirect_to @reservation, notice: 'Reservation was successfully updated.' }
      else
        format.html { render action: "edit" }
      end
    end
  end

  # DELETE /reservations/1
  
  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy

    respond_to do |format|
      format.html { redirect_to reservations_url }
    end
  end
end
