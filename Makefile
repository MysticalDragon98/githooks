default:
	npm build

start:
	npm start

update:
	git reset --hard
	git pull
	npm install
	npm build