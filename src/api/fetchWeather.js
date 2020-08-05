import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '03a8e99a60f7eb020af7fa6b569378e9';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'standard',
            APPID: API_KEY,
        }
    });

    return data;
}