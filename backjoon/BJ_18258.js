// 큐2
const data = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
let N = Number(data.shift());
const queue = new Queue();
const answer = [];
while (N) {
  const order = data.shift();
  if (order.includes('push')) {
    queue.push(Number(order.split(/\s/)[1]));
  } else if (order.includes('pop')) {
    answer.push(queue.pop());
  } else if (order.includes('size')) {
    console.log(queue.length);
  } else if (order.includes('empty')) {
    if (queue.length === 0) {
      console.log('1');
    } else {
      console.log('0');
    }
  } else if (order.includes('front')) {
    if (queue.length === 0) {
      console.log('-1');
    } else {
      console.log(queue[0]);
    }
  } else if (order.includes('back')) {
    if (queue.length === 0) {
      console.log('-1');
    } else {
      console.log(queue[queue.length - 1]);
    }
  }
  N--;
}