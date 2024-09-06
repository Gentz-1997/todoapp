class TodosController < ApplicationController

  def index
  end

  def new
  end

  def show
    @todos = Todo.find_by(id: params[:id])
  end
end
