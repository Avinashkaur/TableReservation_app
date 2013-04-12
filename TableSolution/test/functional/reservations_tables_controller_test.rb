require 'test_helper'

class ReservationsTablesControllerTest < ActionController::TestCase
  setup do
    @reservations_table = reservations_tables(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:reservations_tables)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create reservations_table" do
    assert_difference('ReservationsTable.count') do
      post :create, reservations_table: {  }
    end

    assert_redirected_to reservations_table_path(assigns(:reservations_table))
  end

  test "should show reservations_table" do
    get :show, id: @reservations_table
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @reservations_table
    assert_response :success
  end

  test "should update reservations_table" do
    put :update, id: @reservations_table, reservations_table: {  }
    assert_redirected_to reservations_table_path(assigns(:reservations_table))
  end

  test "should destroy reservations_table" do
    assert_difference('ReservationsTable.count', -1) do
      delete :destroy, id: @reservations_table
    end

    assert_redirected_to reservations_tables_path
  end
end
