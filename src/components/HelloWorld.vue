<template>
  <div class="hello">
  </div>
</template>

<script>

export default {
    name: 'HelloWorld',
    props: {},
    data() {
        return {
            engVideos: [],
            srbVideos: [],
            english: true
        }
    },
    mounted() {
        this.axios.get('https://api.myjson.com/bins/13mms5')
            .then((response) => {
                this.engVideos = response.data.videos;
            }
        );
        this.axios.get('https://api.myjson.com/bins/99ixh')
            .then((response => (this.srbVideos = response.data.videos)));
    },
    computed: {
        fullLinkArrEng() {
            var fullLinkArrEng = [];
            for (var i = 0; i < this.engVideos.length; i++) {
                // eslint-disable-next-line
                fullLinkArrEng[i] = youtube.generateWatchUrl(this.engVideos[i].youtubeId);
            }
            return fullLinkArrEng;
        }
    },
    methods: {
    }
}


</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
