<template>
    <div>
        <div class="curtain" v-if="modalShown">
            <div class="container">
                <span @click="closeModal">Oh, no! Close it!😨</span>
                <iframe width="854" height="480" :src="iFrameUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        <ul>
            <li v-for="video in srbVideosFormatted"
                v-bind:key="video.youtubeId">
                <img :src="video.thumbnail">
                <p @click="openModal(video.embed)">{{ video.title }}</p>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'English',
        data() {
            return {
                srbVideos: [],
                modalShown: false,
                iFrameUrl: ""
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
                    // eslint-disable-next-line
                    videos[key].embed = youtube.generateEmbedUrl(video.youtubeId);
                });
                return videos;
            }
        },
        methods: {
            openModal: function(embed) {
                this.iFrameUrl = embed;
                this.modalShown = true;
            },
            closeModal() {
                this.modalShown = false;
            }
        }
    }

</script>

<style scoped>

</style>