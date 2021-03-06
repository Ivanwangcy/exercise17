/*
 * @Author: kael
 * @Date: 2018-02-01 17:41:25
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */
//  发布订阅模式
module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    if (!this.subscribers[type])
      this.subscribers[type] = []

    this.subscribers[type].push(fn)
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    let subscribers = this.subscribers[type]
    if (!subscribers) return

    subscribers.forEach((val, index) => {
      if(fn == val)
        subscribers.splice(index, 1)
    })
  }

  publish(type, ...args) {
    // todo publish
    // console.log('publish', args);
    if (!this.subscribers[type]) return

    this.subscribers[type].forEach((fn) => {
        fn(args[0])
    })
  }

}
