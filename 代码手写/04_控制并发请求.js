function withConcurrency(request, { max = 5 } = {}) {
  const queue = [];
  let running = 0;
  let currentRunning = 0;
  function newReqest(options) {
    queue.push(options);
    next();
  }

  newReqest.getCurrentRunning = function () {
    return currentRunning;
  }

  function next() {
    if (running >= max) {
      return;
    }
    if (queue.length === 0) {
      return;
    }
    running++;
    currentRunning++;
    const options = queue.shift();
    const complete = () => {
      options.complete && options.complete();
      running--;
      next();
    }
    request({
      ...options,
      complete,
    });
    next();
  }
  return newReqest;
}


// 并发请求函数
const concurrencyRequest = (urls, maxNum) => {
  return new Promise((resolve) => {
      if (urls.length === 0) {
          resolve([]);
          return;
      }
      const results = [];
      let index = 0; // 下一个请求的下标
      let count = 0; // 当前请求完成的数量

      // 发送请求
      async function request() {
          if (index === urls.length) return;
          const i = index; // 保存序号，使result和urls相对应
          const url = urls[index];
          index++;
          console.log(url);
          try {
              const resp = await fetch(url);
              // resp 加入到results
              results[i] = resp;
          } catch (err) {
              // err 加入到results
              results[i] = err;
          } finally {
              count++;
              // 判断是否所有的请求都已完成
              if (count === urls.length) {
                  console.log('完成了');
                  resolve(results);
              }
              request();
          }
      }

      // maxNum和urls.length取最小进行调用
      const times = Math.min(maxNum, urls.length);
      for(let i = 0; i < times; i++) {
          request();
      }
  })
}
// 测试
const urls = [];
for (let i = 1; i <= 20; i++) {
    urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`);
}
concurrencyRequest(urls, 3).then(res => {
    console.log(res);
})
