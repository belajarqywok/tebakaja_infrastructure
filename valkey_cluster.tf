resource "aiven_valkey" "example_valkey" {
  project      = "tebakaja-engineering"
  
  plan         = "startup-4"
  cloud_name   = "google-europe-west1"
  service_name = "example-valkey-service"

  additional_disk_space = "10G"

  maintenance_window_dow  = "tuesday"
  maintenance_window_time = "03:00:00"

  project_vpc_id = "your_vpc_id_here"

  service_integrations {
    integration_type      = "read_replica"
    source_service_name   = "source_service_name_here"
  }

  static_ips = toset(["192.0.2.1", "192.0.2.2"])

  tag {
    key   = "environment"
    value = "production"
  }

  tech_emails {
    email = "tech-support@example.com"
  }

  termination_protection = true

  timeouts {
    create = "60m"
    delete = "60m"
    update = "60m"
  }

  valkey {
    slave_uris = ["slave_uri_1", "slave_uri_2"]
    uris       = ["uri_1", "uri_2"]
  }

  valkey_user_config {
    additional_backup_regions = ["us-east-1", "us-west-2"]
    ip_filter = toset(["10.0.0.0/16", "192.168.1.0/24"])

    ip_filter_object {
      network     = "10.20.0.0/16"
      description = "Production service IP range"
    }

    migration {
      host       = "my.server.com"
      port       = 1234
      dbname     = "defaultdb"
      ignore_dbs = "db1,db2"
      ignore_roles = "role1,role2"
      method     = "dump"
      password   = "migration_password"
      ssl        = true
      username   = "migration_user"
    }

    private_access {
      prometheus = true
      valkey     = true
    }

    privatelink_access {
      prometheus = true
      valkey     = true
    }

    public_access {
      prometheus = true
      valkey     = true
    }

    valkey_acl_channels_default         = "allchannels"
    valkey_io_threads                    = 1
    valkey_lfu_decay_time                = 1
    valkey_lfu_log_factor                = 10
    valkey_maxmemory_policy              = "allkeys-random"
    valkey_notify_keyspace_events        = "Ex"
    valkey_number_of_databases           = 16
    valkey_persistence                   = "rdb"
    valkey_pubsub_client_output_buffer_limit = 64
    valkey_ssl                           = true
    valkey_timeout                       = 300
  }
}
