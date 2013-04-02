class FloorsController < ApplicationController
  # GET /floors
  # GET /floors.json
  def index
    @floors = Floor.all

    respond_to do |format|
      format.html { redirect_to tables_path } # index.html.erb
    end
  end

  # GET /floors/1
  # GET /floors/1.json
  def show
    @floor = Floor.find(params[:id])
    @tables_to_show = @floor.tables

    respond_to do |format|
      format.html # show.html.erb
      format.js
    end
  end

  # GET /floors/new
  # GET /floors/new.json
  def new
    @floor = Floor.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  # GET /floors/1/edit
  def edit
    @floor = Floor.find(params[:id])
  end

  # POST /floors
  # POST /floors.json 
  def create
    @floor = Floor.new(params[:floor])

    respond_to do |format|
      if @floor.save
        format.html { redirect_to @floor, notice: 'Floor was successfully created.' }
      else
        format.html { render action: "new" }
      end
    end
  end

  # PUT /floors/1
  # PUT /floors/1.json
  def update
    @floor = Floor.find(params[:id])

    respond_to do |format|
      if @floor.update_attributes(params[:floor])
        format.html { redirect_to @floor, notice: 'Floor was successfully updated.' }
      else
        format.html { render action: "edit" }
      end
    end
  end

  # DELETE /floors/1
  # DELETE /floors/1.json
  def destroy
    @floor = Floor.find(params[:id])
    @floor.destroy

    respond_to do |format|
      format.html { redirect_to floors_url }
    end
  end
end
