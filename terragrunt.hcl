generate "provider" {
  path = "main.tf"

  if_exists = "overwrite_terragrunt"

  contents = <<EOF
    terraform {
      required_providers {
        aiven = {
          source = "aiven/aiven"
          version = ">= 4.0.0, < 5.0.0"
        }
      }
    }

    provider "aiven" {
      api_token = var.aiven_api_token
    }
  EOF
}
