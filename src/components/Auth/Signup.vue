<template>
    <div class="container">
      <form class="form-signin">
        <h2 class="form-signin-heading">Join TrashTalk</h2>
        <div class="input-group">
            <label for="inputUsername" class="sr-only">Username</label>
            <input type="text" id="inputUsername" class="form-control" placeholder="Username" required="">
        </div>
        <div class="input-group">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        </div>
        <div class="input-group">
            <label for="inputPasswordConfirm" class="sr-only">Confirm Password</label>
            <input type="password" id="inputPasswordConfirm" class="form-control" placeholder="Confirm Password" required="">
        </div>
        <div class="input-group">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Signup</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      msg: 'Hello Header',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form-signin{
        max-width: 400px;
        margin: 0 auto;
    }
    .input-group{
        margin-bottom: 3px;
    }
</style>
