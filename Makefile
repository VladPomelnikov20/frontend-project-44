install: # установка зависимостей
	npm ci

brain-games: # запуск скрипта brain-games
	node bin/brain-games.js

publish: # сухая публикация пакета
	npm publish --dry-run

lint: # запуск линтера
	npx eslint .