<template>
    <ul>
        <li v-for="video in engVideosFormatted"
            v-bind:key="video.youtubeId">
            <a :href="video.url">{{ video.title }}</a>
        </li>
    </ul>
</template>

<script>

export default {
    name: 'English',
    data() {
        return {
            engVideos: []
        }
    },
    mounted() {
        this.axios.get('https://api.myjson.com/bins/13mms5')
            .then((response => (this.engVideos = response.data.videos)));
    },
    computed: {
        engVideosFormatted() {
            var videos = this.engVideos;
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