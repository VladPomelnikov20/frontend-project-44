install: # установка зависимостей
	npm ci

brain-games: # запуск скрипта brain-games
	node bin/brain-games.js

brain-even: # запуск скрипта brain-even
	node bin/brain-even.js

publish: # сухая публикация пакета
	npm publish --dry-run

lint: # запуск линтера
	npx eslint .