<template>
    <v-row>
        <v-col>
            <v-text-field
                label="Search for a job"
                filled
                rounded
            ></v-text-field>

            <v-card>
                <v-list
                    avatar
                    rounded
                >
                    <v-list-item
                        v-for="(job, index) in jobs"
                        :key="index"
                        @click="$router.push({ name: 'jobs-id', params: { id: job.id } })"
                    >
                        <v-list-item-avatar v-if="job.company_logo">
                            <v-img :src="job.company_logo"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{ job.title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ job.company }} - <v-chip>{{ job.type }}</v-chip> </v-list-item-subtitle>
                        </v-list-item-content> 
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data: () => ({
        baseUrl: process.env.baseUrl,
    }), 
    
    created () {
        this.GET_JOBS()
        console.log(this.$router)
    },
    
    methods: mapActions({
        GET_JOBS: 'jobs/fetch'
    }),

    computed: mapGetters({
        jobs: 'jobs/getJobs'
    })
}
</script>
