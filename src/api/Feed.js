import Api from './Api';

class Feed extends Api {
    /**
     * @param url
     * @returns {Promise<*[]|*>}
     */
    static async getFeed(url) {
        return this.request(`/api/feed?url=${url}`);
    }
}

export default Feed;
