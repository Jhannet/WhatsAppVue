import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Chats from './components/Chats.vue';
import DetailChat from './components/DetailChat.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/chats',
          name: 'chats',
          component: Chats,
        },
      ],
    },
    {
      path: 'detail-chat/:id',
      name: 'detailChat',
      component: DetailChat,
    },
  ],
});
