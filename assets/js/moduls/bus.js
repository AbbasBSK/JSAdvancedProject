// bus.js
// یک eventBus ساده (Publish/Subscribe) و یک cartService خیلی کوچک (Singleton-like)

export const eventBus = (() => {
  const handlers = {};
  return {
    on(evt, h){
      (handlers[evt] ||= []).push(h);
    },
    emit(evt, payload){
      (handlers[evt] || []).forEach(h => { try { h(payload); } catch(e){ console.error(e); }});
    }
  };
})();

// cartService: یک instance ساده که وضعیت شمارنده را نگه می‌دارد
export const cartService = (() => {
  let itemsCount = 0;
  return {
    addOne(){
      itemsCount += 1;
      eventBus.emit('cart:changed', itemsCount);
    },
    getCount(){ return itemsCount; }
  };
})();