class Http {

  getGithubIntro () {
    return ILib.http.get('/api/user/intro')
  }

}

export default new Http()
