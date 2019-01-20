const O = (source) => {
    let current = function () {
        return source;
    };

    const filter = function(predicate) {
        let rest = current;
        current = function () {
            return rest()
                .filter(value => {
                    console.log('from filter', value)
                    return predicate(value);
                });
        };

        return module;
    }

    const map = function(transform) {
        let rest = current;
        current = function () {
            return rest()
                .map(value => {
                    console.log('from map', value)
                    return transform(value);
                });
        };

        return module;
    }

    const run = function(consume) {
        for (let value of current()) {
            console.log('from run', value)
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