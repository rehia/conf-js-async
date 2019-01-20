const co = require('co');

function openFile(file) {
    return Promise.resolve(myfile);
}

function readFile(file) {
    return Promise.resolve(file.lines);
}

function createFile(name) {
    return Promise.resolve({lines: [] });
}

function writeLine(line, file) {
    file.lines.push(line);
    console.log(line);
    return Promise.resolve();
}

function closeFile(file) {
    console.log('end. 🤪');
    return Promise.resolve();
}

const myfile = {
    lines: [
        'This is a first line',
        'This is a second line',
        'This is a third line',
    ]
};

openFile('myfile')
    .then(readFile)
    .then((lines) =>
            createFile('otherFile')
                .then((newFile) => {
                    lines.reverse();
                    return Promise.all(lines.map(line =>
                        writeLine(line + ' 🤪', newFile)
                    ))
                    .then(() => newFile);
                })
                .then(closeFile)
        );
