class ReservationsTablesController < ApplicationController
  # GET /reservations_tables
  # GET /reservations_tables.json
  def index
    @reservations_tables = ReservationsTable.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @reservations_tables }
    end
  end

  # GET /reservations_tables/1
  # GET /reservations_tables/1.json
  def show
    @reservations_table = ReservationsTable.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @reservations_table }
    end
  end

  # GET /reservations_tables/new
  # GET /reservations_tables/new.json
  def new
    @reservations_table = ReservationsTable.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @reservations_table }
    end
  end

  # GET /reservations_tables/1/edit
  def edit
    @reservations_table = ReservationsTable.find(params[:id])
  end

  # POST /reservations_tables
  # POST /reservations_tables.json
  def create
    @reservations_table = ReservationsTable.new(params[:reservations_table])

    respond_to do |format|
      if @reservations_table.save
        format.html { redirect_to @reservations_table, notice: 'Reservations table was successfully created.' }
        format.json { render json: @reservations_table, status: :created, location: @reservations_table }
      else
        format.html { render action: "new" }
        format.json { render json: @reservations_table.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /reservations_tables/1
  # PUT /reservations_tables/1.json
  def update
    @reservations_table = ReservationsTable.find(params[:id])

    respond_to do |format|
      if @reservations_table.update_attributes(params[:reservations_table])
        format.html { redirect_to @reservations_table, notice: 'Reservations table was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @reservations_table.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reservations_tables/1
  # DELETE /reservations_tables/1.json
  def destroy
    @reservations_table = ReservationsTable.find(params[:id])
    @reservations_table.destroy

    respond_to do |format|
      format.html { redirect_to reservations_tables_url }
      format.json { head :no_content }
    end
  end
end
