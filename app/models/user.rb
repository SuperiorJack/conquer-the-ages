require 'digest/md5'
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: Blacklist
  has_many :messages
  validates_presence_of :email, :username


  after_initialize :set_default

  def set_default
    self.photo_url ||= "https://www.gravatar.com/avatar/"+Digest::MD5.hexdigest(self.username)+"?d=identicon&s=72"
  end
end
