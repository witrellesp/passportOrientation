<script>
export default {
    data() {
        return {
            name: '',
            lastname: '',
            classe: '',
            age: '',
            note1: '',
            note2: '',
            note3: '',
            note4: '',
        }
    },
    methods: {
        onSubmit() {
            let infoStudent = {
                name: this.name,
                lastname: this.lastname


            }
            this.$emit('info-submitted', infoStudent)
            this.name = '';
            this.lastname = '';
        }
    }
}
</script>

<template>
    <form action="" @submit.prevent="onSubmit">
        <h2>Informations Personnelles</h2>
        <label for="name">Prénom: </label>
        <input type="text" id="name" v-model="name"><br>



        <label for="lastname">Nom: </label>
        <input type="text" id="lastname" v-model="lastname"><br>

        <label for="class">Classe: </label>
        <select id="class" v-model="classe">

            <option value=""></option>
            <option value="CIN1A">CIN1A</option>
            <option value="CIN1B">CIN2A</option>
            <option value="CIN1C">CIN2C</option>
            <option value="CIN1D">CIN2D</option>
        </select><br>

        <label for="age">Âge: </label>
        <input type="age" id="age" v-model="age"><br>

        <h2>Notes des modules</h2>
        <label for="note1">Note1</label>
        <input type="" id="note1" v-model.number="note1">

        <label for="note2">Note2</label>
        <input type="" id="note2" v-model.number="note2">

        <label for="note3">Note3</label>
        <input type="" id="note3" v-model.number="note3">

        <label for="note4">Note4</label>
        <input type="" id="note4" v-model.number="note4">

        <input class="button" type="submit" value="Valider">

    </form>
</template>