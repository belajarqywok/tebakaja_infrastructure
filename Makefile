prod-plan:
	terragrunt apply -var-file="prod.tfvars" -auto-approve

