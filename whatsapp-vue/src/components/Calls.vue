<template>
  <div class="calls">
      <div class="calls-list">
        <div v-for="call in calls" id="call">
            <img :src="call.ProfileImage">
            <label>{{call.NameContact}}</label>
            <span>{{call.LastTime}}</span>
        </div>
      </div>
  </div>
</template>

<script>
import Calls from '../services/calls';
export default {
    name: 'calls',
    mounted() {
        this.getCalls();
    },
    data() {
            return {
            calls: ''
        }
    },
    methods: {
	  getCalls() {
		  Calls.getCalls()
		    .then(data => {
		      console.log(data);		        
		      this.calls = data.calls;
		    })
		    .catch(error => {
		      console.log(error);
		      alert(error);
		  })
	  }
	}
};
</script>

