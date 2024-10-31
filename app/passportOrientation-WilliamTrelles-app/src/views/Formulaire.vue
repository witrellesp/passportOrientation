<script>
import StudentService from '@/services/StudentService';
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
            specialisation: '',
            comment: '',
            date: ''
        }
    },
    methods: {
        onSubmit() {
            let infoStudent = {
                name: this.name,
                lastname: this.lastname,
                classe: this.classe,
                age: this.age,
                note1: this.note1,
                note2: this.note2,
                note3: this.note3,
                note4: this.note4,
                specialisation: this.specialisation,
                comment: this.comment,
                date: this.date
            }


            StudentService.postStudent(infoStudent)
                .then(response => {
                    console.log('Student added:', response.data);
                    this.name = '';
                    this.lastname = '';
                    this.classe = '';
                    this.age = '';
                    this.note1 = '';
                    this.note2 = '';
                    this.note3 = '';
                    this.note4 = '';
                    this.specialisation = '';
                    this.comment = '';
                    this.date = '';

                })
                .catch(error => {
                    console.error('Error to add the student informations', error);
                });
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
            <option value="CIN1B">CIN1A</option>
            <option value="CIN1C">CIN1C</option>
            <option value="CIN1D">CIN1D</option>
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

        <h2>Mon choix</h2>
        <label for="dev">DEV</label>
        <input type="radio" v-model="specialisation" name="specialisation" id="dev">

        <label for="infra">INFRA</label>
        <input type="radio" v-model="specialisation" name="specialisation" id="infra">

        <label for="comment">Merci de confirmer votre soutien par un commentaire</label>
        <textarea id="comment" name="comment" rows="4" cols="50" v-model="comment" placeholder="A remplir par le/les représentant(s) légal(égaux).
        Si vous ête majeur remplissez le vous-même."></textarea>

        <label for="date">Date: </label>
        <input type="date" v-model="date" id="date">


        <input class="button" type="submit" value="Valider">






    </form>
</template>

<style scoped>
form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;

}

h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

label {
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="age"],
input[type="date"],
input[type="radio"],
select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
}

input[type="radio"] {
    width: auto;
    margin-right: 10px;
}

input[type="submit"] {
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    align-self: center;
}

input[type="submit"]:hover {
    background-color: #45a049;
}

.button {
    margin-top: 20px;
}

select {
    padding: 6px;
}

input[type="text"],
input[type="age"],
input[type="date"],
select {
    width: 100%;
}
</style>
