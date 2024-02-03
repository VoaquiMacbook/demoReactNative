import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'https://65bd2c98b51f9b29e9330ae6.mockapi.io/'
    });

    axiosInstance.interceptors.request.use(
        async (config) => {
            // const token = await AsyncStorage.getItem('token');
            const token = '';
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;