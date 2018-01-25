
  <template>
<div class="container">
  <h3>Active Oakland Cleanups</h3>
  <div class="list-group"
      v-for="cleanup in cleanupList"
      v-bind:cleanups="cleanup"
      v-bind:key="cleanup.id">
      <a class='list-group-item list-group-item-action' href='#'>
        <div class='row'>
          <img class='img-fluid img-thumbnail col-4' src="http://127.0.0.1:8000/assets/images/crossed_rakes.png"/>
          <div class="col-8 text-left">
            <h4>{{ cleanup.title }}</h4>
            Host: {{ cleanup.host }}<br>
            Date: {{ cleanup.date }}<br>
            Time: <time>{{ cleanup.start_time }}</time><br>
            Address: {{ cleanup.location.street }}
        </div>
        </div>
      </a>
    </div>
</div>
  </template>

<script>
import axios from 'axios';

export default {
  name: 'CleanupList',

  data() {
    return {
      cleanupList: {},
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      axios.get('http://127.0.0.1:8000/api/v1/cleanups/')
        .then((resp) => {
          this.cleanupList = resp.data;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
