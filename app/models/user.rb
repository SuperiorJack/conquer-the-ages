require 'gravtastic'
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include Gravtastic
  gravtastic
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: Blacklist
  has_many :messages
  validates_presence_of :email, :username


  after_initialize :set_default

  def set_default
    self.photo_url ||= gravatar_url
  end
end
