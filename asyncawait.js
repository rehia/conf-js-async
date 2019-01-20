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

async function run() {
    const file = await openFile('myfile');
    const lines = await readFile(file);
    const newFile = await createFile('otherFile');
    lines.reverse();
    await Promise.all(lines.map(line =>
        writeLine(line + ' 🤪', newFile)
    ));
    await closeFile(newFile);
}

run();
