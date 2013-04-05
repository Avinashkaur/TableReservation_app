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
  # GET /reservations/1.json
  def show
    @reservation = Reservation.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @reservation }
    end
  end

  # GET /reservations/new
  # GET /reservations/new.json
  def new
    @reservation = Reservation.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  # GET /reservations/1/edit
  def edit
    @reservation = Reservation.find(params[:id])
  end

  # POST /reservations
  # POST /reservations.json
  def create
    @table = Table.where(:id => params[:table_id]).first
    @reservation = @table.reservations.create(params[:reservation].merge!(:current_table_id => @table.id))
    respond_to do |format|
      format.js
    end
  end

  # PUT /reservations/1
  # PUT /reservations/1.json
  def update
    @reservation = Reservation.find(params[:id])

    respond_to do |format|
      if @reservation.update_attributes(params[:reservation])
        format.html { redirect_to @reservation, notice: 'Reservation was successfully updated.' }
      else
        format.html { render action: "edit" }
      end
    end
  end

  # DELETE /reservations/1
  # DELETE /reservations/1.json
  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy

    respond_to do |format|
      format.html { redirect_to reservations_url }
      format.json { head :no_content }
    end
  end
end
