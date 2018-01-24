<template>
<div class="container">
  <h3>Active Oakland Cleanups</h3>
  <div class="list-group"
      v-for="cleanup in cleanupList"
      v-bind:cleanups="cleanup"
      v-bind:key="cleanup.id">
      <a class='list-group-item list-group-item-action' href='#'>
        <div class='row'>
          <img class='img-fluid img-thumbnail col-4' :src="'@/assets/' + cleanup.image"/>
          <div class="col-8 text-left">
            <h4>{{ cleanup.title }}</h4>
            Host: {{ cleanup.host }}<br>
            Date: {{ cleanup.date }}<br>
            Time: <time>{{ cleanup.event_start }}</time><br>
            Address: {{ cleanup.address }}
        </div>
        </div>
      </a>
    </div>
</div>
</template>

<script>
export default {
  props: ['cleanups'],
  name: 'Cleanuplist',
  data() {
    return {
      cleanupList: [
        { id: 0, image: 'default_broom.png', title: 'Clean Oakland', host: 'Castello', date: '25-Jan-18', event_start: '12:00pm', address: 'City Hall' },
        { id: 1, image: 'default_broom.png', title: 'Pickup Trash', host: 'Abbott', date: '27-Jan-18', event_start: '1:00pm', address: 'Jack London Square' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
