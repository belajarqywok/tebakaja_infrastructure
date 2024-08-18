# Aiven API Token
variable "aiven_api_token" {
  type = string
  sensitive = true
  description = "Aiven API Token <type: String>"
}

# Aiven Redis Count
variable "aiven_redis_count" {
  type    = number
  default = 3
  description = "Aiven Redis Password <type: Number>"
}
