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
import { getBooklet } from '../../../services/booklet_api_service.js';

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
                this.booklet = await getBooklet(this.id);
            } catch (error) {
                console.error('Error fetching booklet:', error);
            }
        }
    }
}
</script>

<style scoped></style>
