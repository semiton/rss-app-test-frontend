<template>
    <div class="page-container">
        <md-app md-mode="reveal">
            <md-app-content>
                <router-view/>
            </md-app-content>
        </md-app>
    </div>
</template>

<style scoped lang="scss">
    .md-app {
        min-height: 100vh;
        max-height: 100vh;
        border: 1px solid rgba(#000, .12);
    }
</style>

<script>
export default {
    name: 'defaultLayout',
};
</script>
