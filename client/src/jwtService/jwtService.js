import axios from 'axios';
import jwtDecode from 'jwt-decode';
import FuseUtils from '@fuse/FuseUtils';

class jwtService extends FuseUtils.EventEmitter {

    init() {
        this.setInterceptors();
        this.handleAuthentication();
    }

    setInterceptors = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
                    console.log('error JWTSERVICES', err)
                    // if you ever get an unauthorized response, logout the user
                    this.emit('onAutoLogout', 'Invalid access_token');
                    this.setSession(null);
                }
                throw err;
            });
        });
    };

    logout = () => {
        this.setSession(null);
        const pathname = this.props.location.state && this.props.location.state.redirectUrl ? this.props.location.state.redirectUrl : '/';
        this.props.history.push({
            pathname
        });
    };

    handleAuthentication = () => {

        let access_token = this.getAccessToken();

        if (!access_token) {
            return;
        }

        if (this.isAuthTokenValid(access_token)) {
            this.setSession(access_token);
            this.emit('onAutoLogin', true);
        }
        else {
            this.setSession(null);
            this.emit('onAutoLogout', 'access_token expired');
        }
    };

    createUser = (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            axios.post('users/sign_up', { user: { username: data.displayName, password: data.password, email: data.email } })
                .then(response => {
                    console.log("signup", response);
                    if (response.data) {
                        const pathname = this.props.location.state && this.props.location.state.redirectUrl ? this.props.location.state.redirectUrl : '/';
                        this.props.history.push({
                            pathname
                        });
                        resolve(response.data);
                    }
                    else {
                        reject(response);
                    }
                });
        });
    };

    signInWithEmailAndPassword = (email, password) => {
        return new Promise((resolve, reject) => {
            axios.post('users/sign_in', { user: { password: password, email: email } }
            ).then(response => {
                console.log("login", response);
                if (response.data) {
                    const tokenSansBearer = response.headers.authorization.replace("Bearer ", "")
                    this.setSession(tokenSansBearer);
                    const pathname = this.props.location.state && this.props.location.state.redirectUrl ? this.props.location.state.redirectUrl : '/';
                    this.props.history.push({
                        pathname
                    });
                    resolve(response.data);
                }
                else {
                    reject(response);
                }
            });
        });
    };

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios.get('/api/users')
                .then(response => {
                    console.log("auth", response);
                    if (response.data) {
                        resolve(response.data);
                    }
                    else {
                        reject(response);
                    }
                    const pathname = this.props.location.state && this.props.location.state.redirectUrl ? this.props.location.state.redirectUrl : '/';
                    this.props.history.push({
                        pathname
                    });
                });
        });
    };
    /* 
        updateUserData = (user) => {
            return axios.post('/api/auth/user/update', {
                user: user
            });
        };*/

    setSession = access_token => {
        if (access_token) {
            localStorage.setItem('jwt_access_token', access_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        }
        else {
            localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    isAuthTokenValid = access_token => {
        if (!access_token) {
            return false;
        }
        const decoded = jwtDecode(access_token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            console.warn('access token expired');
            return false;
        }
        else {
            return true;
        }
    };

    getAccessToken = () => {
        return window.localStorage.getItem('jwt_access_token');
    };
}

const instance = new jwtService();

export default instance;
