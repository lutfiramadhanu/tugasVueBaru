<template>
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">List Agenda</h3>
            </div>
            <div class="card-body">
               <div class="form-group">
                   <label for="">Merek Hp</label>
                   <input type="text" v-model="agenda.merekhp" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="">Harga</label>
                <input type="text" v-model="agenda.harga" class="form-control" required>
            </div>
            <div class="form-group">
                <button class="btn btn-danger btn-sm" :disabled="isLoading" @click.prevent="simpan">{{ isLoading ? 'Loading...':'Tambahkan' }}</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'AgendaInput',
    data() {
        return {
            agenda: {
                merekhp: '',
                harga: ''
            }
        }
    },
    methods: {
        simpan() {
            this.$store.dispatch('simpanAgenda', this.agenda)
            this.agenda = {
                merekhp: '',
                harga: ''
            }        
        }
    },
    computed: {
        isLoading() {
            return this.$store.state.isLoading
        }
    }
}
</script>