class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from 'messages'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    message = Message.find(data["id"])
    message.update!(body: data["text"])
    ActionCable.server.broadcast('messages', data)
  end
end
