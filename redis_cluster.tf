resource "aiven_redis" "redis" {
  count           = var.aiven_redis_count
  
  project         = "tebakaja-engineering"
  cloud_name      = "aws-ap-southeast-3"
  plan            = "hobbyist"

  service_name    = "tebakaja-redis-${count.index + 1}"

  redis_user_config {
    redis_ssl = true
    redis_timeout = 300

    redis_lfu_decay_time   = 1
    redis_lfu_log_factor   = 10

    redis_maxmemory_policy = "noeviction"

    public_access { redis = true }
  }
}