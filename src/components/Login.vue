<template>
    <div id="login">
        <button @click="login">login</button>
    </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    login: function() {
      this.$store.dispatch("login");
      this.$router.push({path: '/index'});
      this.jsonpTest();
    },
    jsonpTest: function() {
      this.$.ajax({
        type: "get",
        // url:
        //   "https://movie.douban.com/j/search_tags?type=tv&source=index?callback=jsonpCallback",
        // url:'https://api.coindesk.com/v1/bpi/currentprice.json?callback=jsonpCallback',
        url:'http://172.20.49.106:3000/jsonp?callback=jsonpCallback',
        // data: '',
        dataType: "jsonp",
        crossDomain: true,
        success: function(msg) {
          console.log(msg);
        },
        error: function(msg) {
          console.log(msg);
        },
        jsonpCallback: function(msg) {
          console.log(msg);
        }
      });
    }
  }
};
</script>
