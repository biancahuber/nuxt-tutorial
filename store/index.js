import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null,
    },
    mutations: {
      setPosts(state, posts){
        state.loadedPosts = posts
      },
      addPost(state, post){
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost){
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token){
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context){
        return axios.get('https://tutorial-nuxt-6f9a8-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
          .then(res => {
            const postsAres = []
            for (const key in res.data) {
              postsAres.push({...res.data[key], id: key})
            }
            vuexContext.commit('setPosts', postsAres)
          })
          .catch(e => context.error(e))
      },
      setPosts(vuexContext, posts){
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, post){
        const createdPost = {...post, updatedDate: new Date()}
        return axios.post('https://tutorial-nuxt-6f9a8-default-rtdb.europe-west1.firebasedatabase.app/posts.json?auth=' +
        vuexContext.state.token, createdPost)
          .then(
            result => {
              vuexContext.commit('addPost', {...createdPost, id: result.data.name})}
            )
          .catch(e => console.log(e))      },
      editPost(vuexContext, editedPost){
        return axios.put('https://tutorial-nuxt-6f9a8-default-rtdb.europe-west1.firebasedatabase.app/posts/' +
        editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
          .then(res => vuexContext.commit('editPost', editedPost))
          .catch(e => console.log(e))
      },
      authenticateUser(vuexContent, authData){
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
        if (!authData.isLogin) {
          authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
        }
        return axios.post(authUrl + process.env.fbAPIKey, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
        ).then(result => {
          vuexContent.commit('setToken', result.data.idToken)
          localStorage.setItem('token', result.data.idToken)
          Cookie.set('jwt', result.data.idToken)
          localStorage.setItem('tokenExpiration', new Date().getTime() + +result.data.expiresIn * 1000)
          Cookie.set('tokenExpiration', new Date().getTime() + +result.data.expiresIn * 1000)
          return axios.post('http://localhost:3000/api/track-data', {data: 'Authenticated!!'})
        }).
        catch(e => console.log(e))
      },
      initAuth(vuexContext, req){
        let token;
        let tokenExpiration;
        if(req){
          if (req){
            if (!req.headers.cookie) {
              return;
            }
            const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith("jwt="))
            if (!jwtCookie) {
              return;
            }
            token = jwtCookie.split('=')[1]
            tokenExpiration = req.headers.cookie.split(';').find(c => c.trim().startsWith("tokenExpiration=")).split('=')[1]
          }
        } else {
          token =  localStorage.getItem('token');
          tokenExpiration =  localStorage.getItem('tokenExpiration');
        }

        if (new Date().getTime() > +tokenExpiration || !token){
          console.log('No or invalid token.')
          vuexContext.dispatch('logout')
          return;
        }
        vuexContext.commit("setToken", token)
      },
      logout(vuexContent){
        vuexContent.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('tokenExpiration')
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        }
      }
    },
    getters: {
      loadedPosts(state){
        return state.loadedPosts
      },
      isAuthenticated(state){
        return state.token != null
      }
    }
  }
  )
}


export default createStore
