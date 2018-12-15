Sidekiq.configure_server do |config|
    config.redis = { url: 'redis://redistogo:aa488324725a485c87206430f73c0d2e@spinyfin.redistogo.com:11486/' }
  end
  
  Sidekiq.configure_client do |config|
    config.redis = { url: 'redis://redistogo:aa488324725a485c87206430f73c0d2e@spinyfin.redistogo.com:11486/' }
  end