<template>
    <div class="row px-2 py-2">
        <div class="d-flex gap-2">
            <button  class="btn btn-outline-primary btn-sm" >
                <span class="item-auto-visible" @click="createBookletHandler">New Booklet</span>
            </button>
        </div>
    </div>
    <div class="row px-2 py-2">
        <div class="container-fluid">
            <div v-for="booklet in booklets" :key="booklet.id">
                <BookletItem :booklet="booklet" @bookletDetailCallback="bookletDetailHandler" />
            </div>
        </div>
    </div>

    <CreateBookletModal ref="createBookletModal" />
    <BookletDetailModal ref="bookletDetailModal" :booklet="selectedBooklet" />
</template>
  
<script>
import BookletItem from './BookletItem.vue';
import BookletDetailModal from './BookletDetailModal.vue';
import CreateBookletModal from './CreateBookletModal.vue';
import { getBooklets } from '../../../services/booklet_api_service.js';

export default {
    components: {
        BookletItem,
        BookletDetailModal,
        CreateBookletModal
    },
    props: {

    },
    data() {
        return {
            // booklets: [
            //     { id: 1, title: 'Booklet 1' },
            //     { id: 2, title: 'Booklet 2' },
            //     { id: 3, title: 'Booklet 3' },
            // ]
            booklets: [
            ],
            selectedBooklet: Object
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        search(value) {
            this.searchValue = value;
        },
        async fetchData() {
            try {
                this.booklets = await getBooklets();
            } catch (error) {
                console.error('Error fetching booklet:', error);
            }
        },
        createBookletHandler() {
            this.$refs.createBookletModal.openModal();
        },
        bookletDetailHandler(booklet) {
            this.selectedBooklet = booklet;

            this.$refs.bookletDetailModal.openModal();
        },
        editBookletHandler() {
        },
        deleteBookletHandler() {
        },
        handleNewItemModelShow() {
        }
    }
};
</script>
  
<style scoped></style>
