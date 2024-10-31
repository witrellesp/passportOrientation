<script>
import StudentService from '@/services/StudentService';
import jsPDF from 'jspdf';
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
            date: '',
            errors:{}
        }
    },
    methods: {
        validateData(){
            this.errors = {};
            if (!this.name) this.errors.name = 'Le prénom est requis.';
            if (!this.lastname) this.errors.lastname = 'Le nom est requis.';
            if (!this.classe) this.errors.classe = 'Le champ classe est requis.';
            if (!this.age) this.errors.age = 'L\'âge est requise';
            if (!this.note1 || this.note1 >6 ||this.note1<0) this.errors.note1 = 'La note est incorrecte.';
            if (!this.note2 || this.note2 >6 ||this.note2<0) this.errors.note2 = 'La note est incorrecte.';
            if (!this.note3 || this.note3 >6 ||this.note3<0) this.errors.note3 = 'La note est incorrecte.';
            if (!this.note4 || this.note4 >6 ||this.note4<0) this.errors.note4 = 'La note est incorrecte.';
            if (!this.specialisation) this.errors.specialisation = 'La spécialisation est requise.';
            if (!this.comment) this.errors.comment = 'Le commentaire est requis.';
            if (!this.date) this.errors.date = 'La date est requise.';
            
            return Object.keys(this.errors).length === 0;
            
        },


        onSubmit() {
            if (!this.validateData()) {
            console.log('Des champs requis sont vides');
            return;
            }
            
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
        },


        generatePDF() {
            
            if (!this.validateData()) {
            console.log('Des champs requis sont vides');
            return;
            }

            const doc = new jsPDF();

            doc.text("Informations Personnelles", 10, 10);
            doc.text(`Prénom: ${this.name}`, 10, 20);
            doc.text(`Nom: ${this.lastname}`, 10, 30);
            doc.text(`Classe: ${this.classe}`, 10, 40);
            doc.text(`Âge: ${this.age}`, 10, 50);

            doc.text("Notes des modules", 10, 70);
            doc.text(`Note1: ${this.note1}`, 10, 80);
            doc.text(`Note2: ${this.note2}`, 10, 90);
            doc.text(`Note3: ${this.note3}`, 10, 100);
            doc.text(`Note4: ${this.note4}`, 10, 110);

            doc.text("Mon choix", 10, 130);
            doc.text(`Spécialisation: ${this.specialisation}`, 10, 140);
            doc.text(`Commentaire: ${this.comment}`, 10, 150);
            doc.text(`Date: ${this.date}`, 10, 160);

            doc.save("infoStudent.pdf");
        }
    }
}
</script>

<template>
    <form action="" @submit.prevent="onSubmit">
        <h2>Informations Personnelles</h2>

        <label for="name">Prénom: </label>
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
        <input type="text" id="name" v-model="name"><br>
        

        <label for="lastname">Nom: </label>
        <span v-if="errors.lastname" class="error">{{ errors.lastname }}</span>
        <input type="text" id="lastname" v-model="lastname"><br>
        


        <label for="class">Classe: </label>
        <span v-if="errors.classe" class="error">{{ errors.classe }}</span>
        <select id="class" v-model="classe">
            <option value="CIN1A">CIN1A</option>
            <option value="CIN1B">CIN1A</option>
            <option value="CIN1C">CIN1C</option>
            <option value="CIN1D">CIN1D</option>
        </select><br>
       

        <label for="age">Âge: </label>
        <span v-if="errors.age" class="error" color="red">{{ errors.age }}</span>
        <input type="age" id="age" v-model="age"><br>
        

        <h2>Notes des modules</h2>
        <label for="note1">Note1</label>
        <span v-if="errors.note1" class="error">{{ errors.note1 }}</span>
        <input type="" id="note1" v-model.number="note1">
        

        <label for="note2">Note2</label>
        <span v-if="errors.note2" class="error">{{ errors.note2 }}</span>
        <input type="" id="note2" v-model.number="note2">


        <label for="note3">Note3</label>
        <span v-if="errors.note3" class="error">{{ errors.note3}}</span>
        <input type="" id="note3" v-model.number="note3">
        

        <label for="note4">Note4</label>
        <span v-if="errors.note4" class="error">{{ errors.note4 }}</span>
        <input type="" id="note4" v-model.number="note4">
       

        <h2>Mon choix</h2>
        <span v-if="errors.specialisation" class="error">{{ errors.specialisation }}</span>
        <label for="dev">DEV</label>
        <input type="radio" v-model="specialisation" name="specialisation" id="dev" value="DEV">

        <label for="infra">INFRA</label>
        <input type="radio" v-model="specialisation" name="specialisation" id="infra" value="INFRA">

       

        <label for="comment">Merci de confirmer votre soutien par un commentaire</label>
        <span v-if="errors.comment" class="error">{{ errors.comment}}</span>
        <textarea id="comment" name="comment" rows="4" cols="50" v-model="comment" placeholder="A remplir par le/les représentant(s) légal(égaux).
        Si vous ête majeur remplissez le vous-même."></textarea>
        

        <label for="date">Date: </label>
        <span v-if="errors.date" class="error">{{ errors.date }}</span>
        <input type="date" v-model="date" id="date">
        

        <input  class="button" type="submit" value="Valider">

        <input class="button" type="submit" @click.prevent="generatePDF" value="Génerer PDF">




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
