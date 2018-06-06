<template>
    <div>
        <div class="curtain" v-if="modalShown">
            <div class="container">
                <span @click="closeModal">Oh, no! Close it!😨</span>
                <iframe width="854" height="480" :src="iFrameUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        <ul>
            <li v-for="video in engVideosFormatted"
                v-bind:key="video.youtubeId">
                <img :src="video.thumbnail">
                <p @click="openModal(video.embed)">{{ video.title }}</p>
            </li>
        </ul>
    </div>
</template>
<!--<iframe width="854" height="480" src="https://www.youtube.com/embed/7I0vkKy504U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>-->

<script>

export default {
    name: 'English',
    data() {
        return {
            engVideos: [],
            modalShown: false,
            iFrameUrl: ""
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

<style>
    ul {
        margin: 0px;
    }

    ul li {
         display: flex;
         justify-content: center;
         flex-direction: column;
         width: 120px;
         margin: auto;
         padding: 10px 2px;
     }

    img {
        display: block;
        width: 120px;
    }

    p {
        padding-top: 4px;
        text-decoration: none;
        color: #666;
        cursor: pointer;
    }

    p:hover {
        color: #aaa;
    }

    .curtain {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        top: 0;
        left: 0;
        z-index: 1;
    }

    .container {
        display: block;
        background-color: whitesmoke;
        width: 900px;
        height: 520px;
        padding: 10px;
        border-radius: 1px;
        margin-left: auto;
        margin-right: auto;
        margin-top: calc((100vh - 520px) / 2 );
    }

    .container iframe {
        display: block;
        margin: auto;
    }

    .container span {
        text-decoration: underline;
        color: #333;
        float: right;
        cursor: pointer;
        padding-bottom: 4px;
    }

    .container span:hover {
        color: #222;
    }
</style>