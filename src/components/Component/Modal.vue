<template>
    <div>
        <b-btn v-b-modal.modal1 class="bg-transparent text-dark border-0">{{title}}</b-btn>
  <!-- Modal Component -->
            <b-modal id="modal1" :title="title">
            <p class="my-4">{{content}}</p>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'Modal'
    }
</script>

<style scoped>

</style>