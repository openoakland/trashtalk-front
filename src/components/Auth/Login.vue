<template>
    <div class="container">
      <form class="form-signin">
        <h2 class="form-signin-heading">Login</h2>
        <div class="input-group">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        </div>
        <div class="input-group">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
      </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      msg: 'Hello Header',
    };
  },
  computed: mapGetters({
    // Example to get info not needing api call
    // user: 'userInfo',
  }),
  methods: mapActions([
    // perform login uses api call
    'login',
  ]),
  created() {
    // example for fetch user info via api call
    // this.$store.dispatch('getUserInfo');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form-signin{
        max-width: 300px;
        margin: 0 auto;
    }
    .input-group{
        margin-bottom: 3px;
    }
</style>
