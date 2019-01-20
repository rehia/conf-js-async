const O = (a) => {
    let pipeline = function* () {
        for (let v of a) {
            yield v;
        }
    };

    const filter = function(p) {
        let rest = pipeline;
        pipeline = function* () {
            for (let v of rest()) {
                if (p(v)) {
                    yield v;
                }
            }
        }

        return m;
    }

    const map = function(t) {
        let rest = pipeline;
        pipeline = function* () {
            for (let v of rest()) {
                yield t(v);
            }
        }

        return m;
    }

    const run = function(r) {
        for (let v of pipeline()) {
            r(v);
        }
    }

    const m = {
        filter,
        map,
        run
    }

    return m;
}

O([1,2,3,4,5,6])
    .filter(v => v % 2 === 0)
    .map(v => v + 1)
    .run(v => console.log(v));