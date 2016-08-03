var input = "";
var out = {};
var origin;

console.log = (msg) => {
    process.stdout.write(`${msg}\n`);
};

init_results = (bear_name) => {
    origin = bear_name;
    out["results"] = [];
};

add_result = (message, line, column, severity) => {
    var result = {
        "origin": origin,
        "message": message,
        "affected_code": [{
                "file": input["filename"],
                "start": {
                    "column": column,
                    "file": input["filename"],
                    "line": line
                },
                "end": {
                    "column": column+6,
                    "file": input["filename"],
                    "line": line
                }
            }],
        "severity": severity
    };
    out["results"].push(result)
};

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        input += chunk;
    }
});

process.stdin.on('end', () => {
    input = JSON.parse(input);
    init_results("coalaCheckBear");
    for (i in input["file"]) {
        var line = input["file"][i];
        var found = line.indexOf("Coala");
        while (found != -1) {
            add_result("Did you mean 'coala'?", parseInt(i)+1, found+1, 2);
            found = line.indexOf("Coala", found+1)
        }
    }
    console.log(JSON.stringify(out));
});