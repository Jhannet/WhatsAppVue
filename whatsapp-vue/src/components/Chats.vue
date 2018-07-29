<template>
 <div class="body-chats">
      <div class="chats-list">
        <div v-for="chat in chats" class="chat-user" @click="showChat(chat.Id)">
              <img :src="chat.ProfileImage">
              <label>{{chat.NameContact}}</label>
              <span>{{chat.LastMessage}}</span>
              <span>{{chat.LastDatetime}}</span>
        </div>
      </div>
        <div class="row chats-button">
          <div class="col-10">
            <button type="button" name="button">
              <i class="material-icons">insert_invitation</i>
              <a href="new-event.html">new</a>
            </button>
          </div>
        </div>
    </div>
</template>

<script>
import Chats from '../services/chats';
export default {
    name: 'chats',
    mounted() {
        this.getChats();
    },
    data() {
            return {
            chats: ''
        }
    },
    methods: {
	  getChats() {
		  Chats.getChats()
		    .then(data => {
		      console.log(data);		        
		      this.chats = data.chats;
		    })
		    .catch(error => {
		      console.log(error);
		      alert(error);
		  })
    },
    showChat(chatId) {
      this.$router.push({
          name: 'detailChat',
          params: { id: chatId }
      });
    }
	}
};
</script>

<style>
.chat-user {
  height: 50px;
  cursor: pointer;
}
</style>

