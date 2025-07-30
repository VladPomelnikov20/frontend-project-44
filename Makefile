install: # установка зависимостей
	npm ci

brain-games: # запуск скрипта brain-games
	node bin/brain-games.js

brain-even: # запуск скрипта brain-even
	node bin/games/brain-even.js

brain-calc: # запуск скрипта brain-calc
	node bin/games/brain-calc.js

brain-gcd: # запуск скрипта brain-gcd
	node bin/games/brain-gcd.js

brain-progression: # запуск скрипта brain-progression
	node bin/games/brain-progression.js

brain-prime: # запуск скрипта brain-prime
	node bin/games/brain-prime.js

publish: # сухая публикация пакета
	npm publish --dry-run

lint: # запуск линтера
	npx eslint .