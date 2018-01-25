<template>
    <div id="header" class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link :to="{path: '/'}" class="navbar-brand">TrashTalk</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link :to="{path: '/cleanups-list'}" class="nav-link">All Cleanups</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{path: '/login'}" class="nav-link">Login </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{path: '/signup'}" class="nav-link">signup</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'Hello Header',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
#header{
    height: 50px;
    color: #FFF;
    padding: 0 0;
}

#header nav{
    background-color: #333;
}
</style>
