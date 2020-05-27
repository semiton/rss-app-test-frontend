<template>
    <div>
        <md-toolbar>
            <div class="md-toolbar-row">
                <div class="md-toolbar-section-start">
                    <md-field>
                        <md-input name="url" id="url" placeholder="Enter URL" v-model="url" :disabled="loading" />
                    </md-field>
                </div>
                <div class="md-toolbar-section-end">
                    <md-button class="md-dense md-raised md-primary" @click="update" :disabled="loading">
                        <md-icon>refresh</md-icon>
                        Update
                    </md-button>
                </div>
            </div>
        </md-toolbar>

        <md-progress-bar md-mode="indeterminate" v-if="loading" />

        <md-divider></md-divider>

        <div v-if="!loading && feed.id">

            <h2 class="feed-title">{{ feed.title }}</h2>

            <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-33" v-for="post in feed.posts" v-bind:key="post.id"
                     @click="openLink(post.link)">
                    <md-card v-if="post.image || post.thumbnail" md-with-hover>
                        <md-card-media-cover>
                            <md-card-media v-if="post.image">
                                <img :src="post.image.url" alt="image">
                            </md-card-media>
                            <md-card-media v-if="post.thumbnail">
                                <img :src="post.thumbnail.url" alt="video">
                            </md-card-media>
                            <md-card-area>
                                <md-card-header>
                                    <md-icon v-if="post.thumbnail">play_circle_filled</md-icon>
                                    <div class="md-title">{{ post.title }}</div>
                                </md-card-header>
                            </md-card-area>
                        </md-card-media-cover>
                        <md-card-content>{{ post.description }}</md-card-content>
                        <md-card-content>
                            <small class="md-caption">
                                <span v-if="post.author">{{ post.author }} - </span>
                                {{ displayDate(post.date) }}
                            </small>
                        </md-card-content>
                    </md-card>
                    <md-card v-if="!post.image" md-with-hover>
                        <md-card-header>
                            <div class="md-title">{{ post.title }}</div>
                        </md-card-header>
                        <md-card-content>{{ post.description }}</md-card-content>
                        <md-card-content>
                            <small class="md-caption">
                                <span v-if="post.author">{{ post.author }} - </span>
                                {{ displayDate(post.date) }}
                            </small>
                        </md-card-content>
                    </md-card>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .md-card-header .md-title {
        font-size: 1.4em;
        font-weight: bold;
    }
    .feed-title {
        text-align: center;
    }
</style>

<script>
import { formatDistance } from 'date-fns';

export default {
    name: 'feed',
    data() {
        return {
            url: '',
        };
    },
    computed: {
        loading() {
            return this.$store.state.loading;
        },
        feed() {
            return this.$store.state.feed.feed;
        },
    },
    methods: {
        update() {
            const url = this.url;
            if (!url.length) {
                return;
            }

            this.$store.dispatch('feed/update', { url }).then();
        },
        displayDate(value) {
            return formatDistance(new Date(value), new Date());
        },
        openLink(url) {
            window.open(url, '_blank');
        },
    },
};
</script>
