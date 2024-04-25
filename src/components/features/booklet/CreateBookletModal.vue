<template>
    <div data-bs-backdrop="static" class="modal fade" id="createbookletModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="bookletModalLabel" style="font-size: 14px;">{{ $t('Create new booklet') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col">
                                <form @submit.prevent="handleSubmit" novalidate>
                                    <div class="row mb-3">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="title">{{ $t('Title') }}</label>
                                                <div class="input-group has-validation">
                                                    <input type="text" class="form-control" id="title" name="title"
                                                        v-model="values.title" @input="handleChange"
                                                        :class="{ 'is-invalid': errors.title, 'is-valid': touched.title && !errors.title }"
                                                        :maxlength="title_maxLength" />
                                                    <div class="invalid-feedback">{{ errors.title }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col">
                                            <div class="d-flex justify-content-end gap-3">
 
                                                <button type="button" 
                                                class="btn btn-outline-secondary px-5 px-sm-5"
                                                data-bs-dismiss="modal" :disabled="isLoading">
                                                    {{ $t('Cancel') }}
                                                </button>
                                                <button type="submit" class="btn btn-outline-primary px-5 px-sm-5"
                                                    :disabled="isLoading">
                                                    <span v-if="isLoading" class="spinner-border spinner-border-sm"
                                                        aria-hidden="true"></span>
                                                    {{ $t('Create') }}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
  data() {
    return {
      modalVisible: false,
      values: {
        title: ''
      },
      touched: {},
      errors: {},
      isLoading: false,
      title_maxLength: 100
    };
  },
  methods: {
    openModal() {
            this.uniqueModal = new Modal(document.getElementById("createbookletModal"), { keyboard: false });
            this.uniqueModal.show();
    },
    handleSubmit() {
      // Handle form submission here
    },
    handleChange() {
      // Handle input change here
    } 
  }
};
</script>

<style scoped>
</style>