<template>
        <div class="modal fade" id="bookletDetailModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" style="font-size: 14px">{{ $t('Booklet') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                     aria-label="Close"></button>
                </div>
                <div class="modal-body">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  props: {
    booklet: Object
  },
    methods: {
        openModal() {
            this.uniqueModal = new Modal(document.getElementById("bookletDetailModal"), { keyboard: false });
            this.uniqueModal.show();
        }
    }
}
</script>