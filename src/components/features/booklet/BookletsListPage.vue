<template>
    <div>
        <div class="container-fluid">
            <div v-for="booklet in booklets" :key="booklet.id">
                <BookletItem :booklet="booklet" 
                @bookletDetailCallback="bookletDetailHandler" />
            </div>
        </div>
    </div>

    <div class="modal fade" id="bookletModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="bookletModalLabel" style="font-size: 14px;">Create new booklet</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="handleNewItemModelClose"></button>
                </div>
                <div class="modal-body">
                    <CreateBooklet @hide="handleNewItemModelClose" />
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="showModel" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" style="font-size: 14px">{{ $t('Booklet') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="handleShowModelClose"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <span style="font-size: 12px;">
                                    {{ $t('Title') }}: <span style="font-size: 15px;">
                                        {{ selectedBooklet.title }}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" style="font-size: 14px">Edit booklet</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="handleEditModelClose"></button>
                </div>
                <div class="modal-body">
                    <EditBookletTitle :booklet="booklet" @hide="handleEditModelClose"></EditBookletTitle>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body p-4">
                    <DeleteBookletPermanently :booklet="booklet" @hide="handleDeletePermanentlyModelClose">
                    </DeleteBookletPermanently>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import BookletItem from './BookletItem.vue';
import axios from 'axios';
import { Modal } from 'bootstrap';

export default {
    components: {
        BookletItem
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
                // const url = `/v1.1/booklets?pageNumber=${params.pageNumber}&pageSize=${params.pageSize}&isDeleted=${params.isDeleted}&searchValue=${params.searchValue}`;
                const baseUrl = import.meta.env.VITE_APP_MEMORY_SERVICE_URL;
                
                const url = `/v1.1/booklets?pageNumber=1&pageSize=5&isDeleted=false&searchValue=`;

                const response = await axios.get(baseUrl + url);
                this.booklets = Array.from(response.data.items);
            } catch (error) {
                console.error('Error fetching booklets:', error);
            }
        },
        bookletDetailHandler(payload) {
            this.selectedBooklet = payload;
            
            this.uniqueModal = new Modal(document.getElementById("showModel"), { keyboard: false });
            this.uniqueModal.show();
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
