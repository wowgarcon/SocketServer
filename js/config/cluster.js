const cluster = require('cluster');
const os = require('os');

module.exports = app => {
    if (cluster.isMaster) {
        console.log('==== Master ====');
        //CPU의 갯수만큼 워커 생성
        // os.cpus().forEach(function (cpu) {
            cluster.fork();
        // });

        cluster.on('online', function (worker) {
            console.log(`Worker '${worker.process.pid}' is Running`);
        });
        
        //워커 사망
        cluster.on('exit', function(worker, code, signal) {
            console.log(`Worker '${worker.id}'is Exit`);
            //종료 코드가 200인 경우, 워커 재생성
            if (code == 200) cluster.fork();
        });
        return false;
    }else{
        return true;
    }
}