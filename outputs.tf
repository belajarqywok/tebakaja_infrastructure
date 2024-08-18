output "redis_info" {
  value = [for r in aiven_redis.redis: {
    state              = r.state
    cloud_name         = r.cloud_name
    service_type       = r.service_type
    service_name       = r.service_name

    redis_ssl          = r.redis_user_config.0.redis_ssl
    redis_timeout      = r.redis_user_config.0.redis_timeout

    redis_lfu_decay_time    = r.redis_user_config.0.redis_lfu_decay_time
    redis_lfu_log_factor    = r.redis_user_config.0.redis_lfu_log_factor
    redis_maxmemory_policy  = r.redis_user_config.0.redis_maxmemory_policy
  }]
}