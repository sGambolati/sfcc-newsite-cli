run:
	INFLUX_URL=http://localhost:8086/telegraf INFLUX_MEASUREMENT_CGMINER=cgminer node index.js
bundle:
	npm i
	rm -Rf ./build/
	pkg . --out-path ./build/
	chmod +x ./build/*
run-macos:
	./build/melon-miners-beat-macos