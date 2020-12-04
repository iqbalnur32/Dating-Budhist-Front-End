import Vue from "vue"
import Vuex from "vuex"
import router from "../router/index"
import server from "../config/server"
import Swal from "sweetalert2"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin: false,
        errMessage: '',
        successMessage: '',
        token: '',
        users: ''
    },
    mutations: {
        SET_ISLOGIN(state, payload){
            state.isLogin = payload
            console.log(state.isLogin = payload)
        }
    },
    actions: {
        login(context, payload){
            server({
                url: 'api/login',
                method: 'POST',
                data: {
                    email: payload.email,
                    password: payload.password
                }
            })
            .then(({data}) => {
                this.commit('SET_ISLOGIN', true)
                localStorage.setItem('token', data.token)
                Swal.fire({
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    width: 200,
                    height: 50,
                    text: `Hallo ${data.data.nama}`
                })

                router.push({
                    name:'Home'
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong email/password', 
                })
                console.log(err)
            })
        },
        logout(context, payload) {
            Swal.fire({
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                width: 200,
                height: 50,
                padding: '2em',
                marginTop:'50px',
              })
              
              router.push({
                name:'Login'
              })
              localStorage.clear()
              this.commit('SET_ISLOGIN', payload)
        }
    }
})