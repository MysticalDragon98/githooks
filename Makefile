start:
	npm start

build:
	npm build

update:
	git reset --hard
	git pull
	npm install
	npm build