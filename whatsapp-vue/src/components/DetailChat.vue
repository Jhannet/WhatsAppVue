<template>
  <div class="detail-chat">
    <div class="header">
        <img :src="chat.ProfileImage">
        <h5>{{chat.NameContact}}</h5>
        <span>{{chat.LastDatetime}}</span>
        <ul>
            <li><a href="" target="_blank">call</a></li>
            <li><a href="" target="_blank">options</a></li>
        </ul>
    </div>
    <div class="messageList">
        <div v-for="msg in chat.Messages" class="msg">
            <label>{{msg}}</label>
        </div>
    </div>
  </div>
</template>

<script>
import Chats from '../services/chats.js';
export default {
  name: 'detailChat',
  data() {
    return {
      chat: {},
    }
  },
  props: {
    id: Number,
  },
  mounted() {
        this.getChat(1);
  },
  methods: {
	  getChat(chatId) {
		  Chats.getChat(chatId)
		    .then(data => {
		      console.log(data);		        
		      this.chat = data.chat;
		    })
		    .catch(error => {
		      console.log(error);
		      alert(error);
		  })
        },
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
</style>
