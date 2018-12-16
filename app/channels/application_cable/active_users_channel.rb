class ActiveUsersChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'active_users'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    message = Message.find(data["id"])
    message.update!(body: data["text"])
    puts "Messagesssssss"
    puts current_user
    puts ActionCable.server.connection
    #ActionCable.server.broadcast('messages', data)
    ActionCable.server.broadcast('messages', { id: 1, text: current_user.username})
  end
end
