<template>
    <ul>
        <li v-for="video in srbVideosFormatted"
            v-bind:key="video.youtubeId">
            <img :src="video.thumbnail">
            <a :href="video.url">{{ video.title }}</a>
        </li>
    </ul>
</template>

<script>

    export default {
        name: 'English',
        data() {
            return {
                srbVideos: []
            }
        },
        mounted() {
            this.axios.get('https://api.myjson.com/bins/99ixh')
                .then((response => (this.srbVideos = response.data.videos)));
        },
        computed: {
            srbVideosFormatted() {
                var videos = this.srbVideos;
                videos.forEach((video, key) => {
                    // eslint-disable-next-line
                    videos[key].url = youtube.generateWatchUrl(video.youtubeId);
                    // eslint-disable-next-line
                    videos[key].thumbnail = youtube.generateThumbnailUrl(video.youtubeId);
                });
                return videos;
            }
        }
    }

</script>

<style scoped>

</style>