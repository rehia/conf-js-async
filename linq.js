const O = (array) => {
    let pipeline = function* () {
        for (let value of array) {
            console.log('from source', value);
            yield value;
        }
    };

    const filter = function(predicate) {
        let rest = pipeline;
        pipeline = function* () {
            for (let value of rest()) {
                if (predicate(value)) {
                    console.log('from filter', value);
                    yield value;
                }
            }
        }

        return module;
    }

    const map = function(transform) {
        let rest = pipeline;
        pipeline = function* () {
            for (let value of rest()) {
                console.log('from map', value);
                yield transform(value);
            }
        }

        return module;
    }

    const run = function(consume) {
        for (let value of pipeline()) {
            console.log('from run', value);
            consume(value);
        }
    }

    const module = {
        filter,
        map,
        run
    }

    return module;
}

O([1,2,3,4,5,6])
    .filter(v => v % 2 === 0)
    .map(v => v + 1)
    .run(v => console.log('final', v));