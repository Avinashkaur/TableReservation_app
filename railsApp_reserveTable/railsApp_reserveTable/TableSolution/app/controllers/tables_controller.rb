class TablesController < ApplicationController
  # GET /tables
  # GET /tables.json

  def index
    @tables = Table.where("floor_id is NULL").order("created_at DESC")
    @tables_to_show = Floor.first.tables
    
    respond_to do |format|
      format.html # index.html.erb
    end
  end

  # GET /tables/1
  # GET /tables/1.json
  def show
    @table = Table.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
    end
  end

  # GET /tables/new
  # GET /tables/new.json
  def new
    @table = Table.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  # GET /tables/1/edit
  def edit
    @table = Table.find(params[:id])
  end

  # POST /tables
  # POST /tables.json
  def create
    
    @table = Table.new(params[:table])
    # debugger
    respond_to do |format|
      if @table.save
        format.html { redirect_to @table, notice: 'Table was successfully created.' }
      else
        format.html { render action: "new" }
      end
    end
  end

  # PUT /tables/1
  # PUT /tables/1.json
  def update
    @tables = Table.where("floor_id is NULL").order("created_at DESC")
    @table = Table.find(params[:id])
    @tables_to_show = Floor.first.tables

    respond_to do |format|
      if @table.update_attributes(params[:table])
        format.js
        format.html { redirect_to @table }
      else
        format.html { render action: "edit" }
      end
    end
  end

  # DELETE /tables/1
  # DELETE /tables/1.json
  def destroy
    @table = Table.find(params[:id])
    @table.destroy

    respond_to do |format|
      format.html { redirect_to tables_url }
    end
  end
end
