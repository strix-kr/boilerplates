const api = {
  posts(id, param) {
    const endPoint = 'posts';
    const url = (id) ? `${endPoint}/${id}` : endPoint;
    return {
      endPoint,
      url,
      param,
    };
  },
  comments(id) {
    const endPoint = 'comments';
    return {
      endPoint,
      url: `${endPoint}?postId=${id}`,
    };
  },
  users(id, param) {
    const endPoint = 'users';
    const url = (id) ? `${endPoint}/${id}` : endPoint;
    return {
      endPoint,
      url,
      param,
    };
  },
};

export default api;
