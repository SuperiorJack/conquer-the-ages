class Blacklist < ApplicationRecord
  include Devise::JWT::RevocationStrategies::Blacklist
  self.table_name = 'blacklists'
end
