PROJECT_NAME=aeon-challenge

up: ## start the containers
	docker-compose -p $(PROJECT_NAME) -f docker/dev.yml up -d

connect: ## SSH to the php container
	docker-compose -p $(PROJECT_NAME) -f docker/dev.yml exec node sh

down: ## bring down the containers
	docker-compose -p ${PROJECT_NAME} -f docker/dev.yml down

install: ## Run npm install
	docker-compose -p $(PROJECT_NAME) -f docker/dev.yml run --rm node npm install

help: ## List all Make targets available.
	@grep -E '^[a-zA-Z%_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.PHONY: help

.DEFAULT_GOAL := help
