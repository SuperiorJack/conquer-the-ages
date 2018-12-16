class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from 'messages'
    puts 'SUCRIBREDDDDD'
    puts ActionCable.server.connections.length
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    puts 'UNSUCRIBREDDDDD'
    puts ActionCable.server.connections.length
  end

  def receive(data)
    message = Message.find(data["id"])
    message.update!(body: data["text"])
    puts "Messagesssssss"
    puts current_user

    
    #ActionCable.server.broadcast('messages', data)
    ActionCable.server.broadcast('messages', { id: 1, text: current_user.username})
  end
end
