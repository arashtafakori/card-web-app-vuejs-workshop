<template>
  <div>
    <div class="border-bottom">
      <div class="row gx-2">
        <div class="col-auto">
          <p @click="showDetail(booklet.id)">{{ booklet.title }}</p>
        </div>
        <div class="col-auto ms-auto">
          <button class="btn btn-icon fa-sm" title="View" @click="goToBookletDetail"><i class="fas fa-eye"></i></button>
          <button class="btn btn-icon fa-sm" title="Edit" @click="goToEditBooklet"><i class="fas fa-edit"></i></button>
          <button class="btn btn-icon fa-sm" title="Delete" @click="goToDeleteBooklet"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    booklet: Object,
    isLoading: Boolean
  },
  created() {

  },
  methods: {
    showDetail(id) {
      this.$router.push({ path: `/booklet/${id}` });
    },
    goToBookletDetail() {
      this.$emit('bookletDetailCallback', this.booklet);
    },
    goToBookletEdit() {
      this.$emit('editBookletCallback', this.booklet);
    },
    goToBookletDelete() {
      this.$emit('deleteBookletCallback', this.booklet);
    }
  }
}
</script>

<style scoped>
</style>


 