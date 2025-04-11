class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, cb) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event).push(cb);
  }

  emit(event, data) {
    if (!this.events.has(event)) {
      return null;
    }
    this.events[event].forEach((cb) => cb(data));
    this.events.get(event).forEach((cb) => cb(data));
  }

  off(event, cb) {
    if (!this.events.has(event)) {
      return null;
    }
    if (!cb) {
      this.events.delete(event);
    } else {
      this.events.set(
        event,
        this.events.get(event).filter((cbs) => cbs !== cb)
      );
    }
  }

  once(event, cb) {
    const onceWrapper = (...args) => {//定义监听事件
      this.off(event, onceWrapper);//卸载onceWrapper监听事件
      cb.apply(this,args);//执行onceWrapper
    };
    this.on(event, onceWrapper);//监听新定义的事件
  }
}

// 示例
// Example usage
const eventBus = new EventEmitter();

// 监听事件
// Listen to an event
// eventBus.on('test', (msg) => console.log('test event:', msg));

// // 触发事件
// Trigger the event
// eventBus.emit('test', 'Hello, World!');

// // 监听一次事件
// Listen to an event once
eventBus.once("once", (msg) => {
  console.log("once event:", msg);
});

// // 触发一次性事件
// Trigger the once event
eventBus.emit("once", "This should appear once");
eventBus.emit("once", "This should not appear");

// // 停止监听事件
// Stop listening to an event
// eventBus.off('test');

// // 触发事件（已经移除监听）
// Trigger the event (already removed listener)
// eventBus.emit('test', 'This should not appear');
