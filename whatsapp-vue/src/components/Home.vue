<template>
  <div class="home">
    <h1>WhatsApp</h1>
    <ul>
      <li><a href="" target="_blank">search</a></li>
      <li><a href="" target="_blank">options</a></li>
    </ul>
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >{{ tab }}</button>
    <!-- <router-view style="border:3px solid blue;"/> -->
    <component
      v-bind:is="currentTabComponent"
      class="tab"
    ></component>
  </div>
</template>

<script>

import Chats from './Chats.vue';
import States from './States.vue';
import Calls from './Calls.vue';

export default {
  name: 'home',
  data() {
    return {
      currentTab: 'chats',
      tabs: ['CHATS', 'STATES', 'CALLS'],
    }
  },
  components: {
    Chats,
    States,
    Calls,
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab.toLowerCase();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
