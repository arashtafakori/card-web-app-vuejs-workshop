<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <span style="font-size: 12px;">
                    {{ $t('Title') }}: <span style="font-size: 15px;">
                        {{ booklet.title }}</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    created() {
        this.fetchData();
    },
    data() {
        return {
            booklet: Object
        };
    },
    methods: {
        async fetchData() {
            try {
                const baseUrl = import.meta.env.VITE_APP_MEMORY_SERVICE_URL;
                const url = `/v1/booklets/${this.id}`;

                const response = await axios.get(baseUrl + url);
                this.booklet = response.data;
            } catch (error) {
                console.error('Error fetching booklets:', error);
            }
        }
    }
}
</script>

<style scoped></style>
