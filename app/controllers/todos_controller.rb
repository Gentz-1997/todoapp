class TodosController < ApplicationController

  def index
  end

  def show
    @todo = Todo.find_by(id: params[:id])
  end

  def new
    @todo = Todo.new
  end

  def create
    Todo.create(content: params[:string])
    redirect_to todos_path
  end
end
