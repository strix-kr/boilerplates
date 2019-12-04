const api = {
    posts (id, param) {
        const endPoint = 'posts'
        const url = (id) ? `${endPoint}/${id}` : endPoint
        return {
            endPoint,
            url,
            param,
            child: 'comments',
        }
    },
    comments (id, param) {
        const endPoint = 'comments'
        return {
            endPoint,
            param,
            url: `${endPoint}?postId=${id}`,
        }
    },
    albums (id, param) {
        const endPoint = 'albums'
        const url = (id) ? `${endPoint}/${id}` : endPoint
        return {
            endPoint,
            url,
            param,
            child: 'photos'
        }
    },
    photos (id, param) {
        const endPoint = 'photos'
        return {
            endPoint,
            param,
            url: `${endPoint}?albumId=${id}`,
        }
    },
    todos () {
        const endPoint = 'todos'
        return {
            endPoint,
            url: endPoint,
        }
    },
    users (id, param) {
        const endPoint = 'users'
        const url = (id) ? `${endPoint}/${id}` : endPoint
        return {
            endPoint,
            url,
            param,
        }
    },
}

export default api