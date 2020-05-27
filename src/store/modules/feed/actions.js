import Feed from '../../../api/Feed';

export default {
    async update({ state, commit, rootState }, { url }) {
        rootState.loading = true;
        const feed = await Feed.getFeed(url);
        commit('update', feed);
        rootState.loading = false;
    },
};
