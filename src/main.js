import Vue from 'vue'
import App from './App.vue'

// 透過實作一個 eventBus，並讓要互相溝通的 components 在 eventBus 上進行 $emit（事件觸發） 與 $on（事件監聽）的動作達到不依靠 parent 進行資料交換的目的！
// 注意：由於是要給後續的components一起使用，所以絕對要先建立好！否則會報錯！
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
