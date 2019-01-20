function openFile(file, callback) {
    callback(null, myfile);
}

function readFile(file, callback) {
    callback(null, file.lines);
}

function createFile(name, callback) {
    callback(null, {lines: [] });
}

function writeLine(line, file, callback) {
    file.lines.push(line);
    console.log(line);
    callback();
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

openFile('myfile', (error, file) => {
    readFile(file, (error, lines) => {
        createFile('otherFile', (error, newFile) => {
            lines.reverse();
            lines.forEach(line => {
                const newLine = line + ' 🤪';
                writeLine(newLine, newFile, (error) => {
                });
            });
            // comment on ferme le fichier ?
        });
    }); 
});
