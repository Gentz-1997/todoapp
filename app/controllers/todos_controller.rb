class TodosController < ApplicationController
  def index
    @todos = Todo.all.order(content: :desc)
  end

  def show
    @todo = Todo.find_by(id: params[:id])
  end

  def new
    @todo = Todo.new
  end

  def create
    @todo = Todo.create(content: params[:todo][:content])
    if @todo.save
      flash[:notice] = "タスクを作成しました"
      redirect_to todos_path
    else
      render :new, status: :unprocessable_entity
    end
  end
end
