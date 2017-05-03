const Docker = require('dockerode');

const myDocker = new Docker();

myDocker.listContainers({
  all: true
})
.then(containers => console.log(containers))
.catch(err => console.log(err));