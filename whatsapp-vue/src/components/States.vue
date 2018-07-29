<template>
  <div class="states">
      <div>My state</div>
      <div class="states-list">
          <div>
              <h3>Recent</h3>
          </div>
          <div v-for="state in states" id="state">
              <img :src="state.ProfileImage">
              <label>{{state.NameContact}}</label>
              <span>{{state.LastTime}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import States from '../services/states';
export default {
    name: 'states',
    mounted() {
        this.getStates();
    },
    data() {
            return {
            states: ''
        }
    },
    methods: {
	  getStates() {
		  States.getStates()
		    .then(data => {
		      console.log(data);		        
		      this.states = data.states;
		    })
		    .catch(error => {
		      console.log(error);
		      alert(error);
		  })
	  }
	}
};
</script>

