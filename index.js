const {VM} = require('vm2');

const sandbox = {
    lib: require('./lib'),
    yeah: 'yeah!' + new Date()
}

const code = `
(function script() {
    var result = lib('hello');
    console.log('value from lib: ' + result)
})()
`;

const vm = new VM({
    timeout: 1000,
    sandbox: sandbox
});

vm.run(code);

