<template>
  <div>
    <u-infinite-list :items="items" :item-height="80" #default="{ sliceItems }">
      <u-list :items="items"></u-list>  
    </u-infinite-list>
   
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import UList from "../components/UList.vue";
import UInfiniteList from "../../../components/UInfiniteList.vue";
const { mapState, mapActions } = createNamespacedHelpers("topic");

export default {
  name: "hot-top",
  props: ["type"],
  components: {
    UList,
    UInfiniteList
  },
  computed: {
    ...mapState({
      items: state => state[state.activeType].items
    })
  },
  created(){
    this.asyncData({
        store: this.$store,
        route: this.$route,
      })
  },
  mounted() {    
  },
  watch: {
    type(type) {
      this.fetchData({ type });
    }
  },
  methods: {
    ...mapActions({
      fetchData: "FETCH_LIST_DATA"
    }),
    fetchNext() {
      const { type } = this;
      this.fetchData({ type });
    },
    asyncData({ store, route }) {
      return store
        .dispatch("topic/FETCH_LIST_DATA", {
          type: route.name
        })
        .catch(e => console.error(e));
    }
  }
};
</script>

<style scoped>
</style>