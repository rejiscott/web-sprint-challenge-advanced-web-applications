const articleService = ()=> {
  return axiosWithAuth()
  .get('http://localhost:5000/api/articles/${id}')
  .then((res) => {
      console.log("articleService", res);
      props.setArticles(res.data)
      push('/articles')
  })
  .catch((err) => {console.log(err);
  })
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.