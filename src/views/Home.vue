<template>
  <div class="home">
    Hello, {{user.given_name}}
  </div>
</template>

<script>


export default {
  name: 'home',
  // Set props from App.vue 
  props:{
    auth: Object
  },
  data:function(){
    return {
      user:{
        given_name:""
      }
    }
  },
  mounted:function(){
    // Uses function from AuthService.js with auth prop to receive profile info
    this.auth.getProfile((err, user) => {
      console.log({err, user});
      this.user = user;
    })
  }
};
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
}
</style>

