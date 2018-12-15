class UsersController < ApiController

  def index
    @user = User.find(current_user.id)

    render json: @user
  end
  
end
