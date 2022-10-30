import {
    createStore
} from 'vuex'
import axios from 'axios';

export default createStore({

    // STATE 
    state: {
        budapest: {},
        london: {},
        newyork: {},
        tokyo: {},
    },

    // GETTERS
    getters: {

        // budapest
        budapestDays: state => {
            // convert the date format
            let budapestDays = state.budapest.daily?.time.map(items => {
                return items.replace(/-/g, '. ');
            });
            return budapestDays;
        },

        budapestTemp: state => {
            // calculate the average from the daily minimum and maximum temperature
            let bpTempMin = state.budapest.daily?.temperature_2m_min;
            let bpTempMax = state.budapest.daily?.temperature_2m_max;
            let bpTempAvg = [];

            if (bpTempMin && bpTempMax) {
                for (let i = 0; i < bpTempMin.length; i++) {
                    bpTempAvg.push(Math.round((bpTempMin[i] + bpTempMax[i]) / 2));
                };
            }
            return bpTempAvg;
        },

        // london
        londonDays: state => {
            // convert the date format
            let londonDays = state.london.daily?.time.map(items => {
                return items.replace(/-/g, '. ');
            });
            return londonDays;
        },

        londonTemp: state => {
            // calculate the average from the daily minimum and maximum temperature
            let lndnTempMin = state.london.daily?.temperature_2m_min;
            let lndnTempMax = state.london.daily?.temperature_2m_max;
            let lndnTempAvg = [];

            if (lndnTempMin && lndnTempMax) {
                for (let i = 0; i < lndnTempMin.length; i++) {
                    lndnTempAvg.push(Math.round((lndnTempMin[i] + lndnTempMax[i]) / 2));
                };
            }
            return lndnTempAvg;
        },

        // New York
        newyorkDays: state => {
            // convert the date format
            let newyorkDays = state.newyork.daily?.time.map(items => {
                return items.replace(/-/g, '. ');
            });
            return newyorkDays;
        },

        newyorkTemp: state => {
            // calculate the average from the daily minimum and maximum temperature
            let nyTempMin = state.newyork.daily?.temperature_2m_min;
            let nyTempMax = state.newyork.daily?.temperature_2m_max;
            let nyTempAvg = [];

            if (nyTempMin && nyTempMax) {
                for (let i = 0; i < nyTempMin.length; i++) {
                    nyTempAvg.push(Math.round((nyTempMin[i] + nyTempMax[i]) / 2));
                };
            }
            return nyTempAvg;
        },

        // Tokyo
        tokyoDays: state => {
            // convert the date format
            let tokyoDays = state.tokyo.daily?.time.map(items => {
                return items.replace(/-/g, '. ');
            });
            return tokyoDays;
        },

        tokyoTemp: state => {
            // calculate the average from the daily minimum and maximum temperature
            let tkyTempMin = state.tokyo.daily?.temperature_2m_min;
            let tkyTempMax = state.tokyo.daily?.temperature_2m_max;
            let tkyTempAvg = [];

            if (tkyTempMin && tkyTempMax) {
                for (let i = 0; i < tkyTempMin.length; i++) {
                    tkyTempAvg.push(Math.round((tkyTempMin[i] + tkyTempMax[i]) / 2));
                };
            }
            return tkyTempAvg;
        },
    },

    // MUTATIONS 
    mutations: {
        changeBudapest(state, data) {
            state.budapest = data;
        },
        changeLondon(state, data) {
            state.london = data;
        },
        changeNewYork(state, data) {
            state.newyork = data;
        },
        changeTokyo(state, data) {
            state.tokyo = data;
        },
    },

    // ACTIONS 
    actions: {
        fetchBudapest() {
            axios('https://api.open-meteo.com/v1/forecast?latitude=47.4984&longitude=19.0408&timezone=Europe/Budapest&daily=rain_sum,temperature_2m_max,temperature_2m_min')
                .then(response => {
                    this.commit('changeBudapest', response.data)
                })
        },
        fetchLondon() {
            axios('https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262&timezone=Etc/Greenwich&daily=rain_sum,temperature_2m_max,temperature_2m_min')
                .then(response => {
                    this.commit('changeLondon', response.data)
                })
        },
        fetchNewYork() {
            axios('https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&timezone=America/New_York&daily=rain_sum,temperature_2m_max,temperature_2m_min')
                .then(response => {
                    this.commit('changeNewYork', response.data)
                })
        },
        fetchTokyo() {
            axios('https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&timezone=Asia/Tokyo&daily=rain_sum,temperature_2m_max,temperature_2m_min')
                .then(response => {
                    this.commit('changeTokyo', response.data)
                })
        },
    },

    modules: {}
})
