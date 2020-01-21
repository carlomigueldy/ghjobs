import axios from 'axios'

export const state = () => ({
    jobs: []
})

export const mutations = {
    SET_JOBS: (state, jobs) => state.jobs = jobs,
}

export const actions = {
    async fetch ({ commit }) {
        const res = await axios.get(`${process.env.baseUrl}/positions.json`)

        commit('SET_JOBS', res.data)
        console.log('fetch', res.data)
    },
}

export const getters = {
    getJobs: state => state.jobs,
}