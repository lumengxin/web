<template>
    <div class="newslist">
        <div class="container">
            <ul class="media-l">
                <li class="media" v-for="article in articles">
                    <div class="media-left">
                        <a v-bind:href="article.url" target="_blank">
                            <img v-bind:src="article.urlToImage" alt="" class="media-object">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">
                            <a v-bind:href="article.url" target="_blank">{{ article.title }}</a>
                        </h4>
                        <h5><i>by {{ article.author }}</i></h5>
                        <p>{{ article.description }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'newslist',
    props: ['source'],
    data() {
        return {
            articles: []
        }
    },
    methods: {
        updateSource: function(source) {
            this.$http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=f3f5817f3b8f49359768424c35d7502e')
                .then(response => {
                    this.articles = response.data.articles;
                    console.log(source+" articles");
                    console.log(response.data);
                    console.log(this.articles);
                });
        }
    },
    created: function() {
        this.updateSource(this.source);
    },
    watch: {
        source: function(val) {
            this.updateSource(val);
        }
    }
}
</script>

<style scoped>
    .media-object {
        width: 128px;
        height: 100px;
        
    }
    .media {
        border-top: 1px solid lightsalmon;
        padding-top: 20px;
    }
</style>


