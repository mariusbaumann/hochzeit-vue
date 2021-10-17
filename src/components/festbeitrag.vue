<template>
  <div class="container">
    <div class="row">
        <div class="col-12">
            <h3>Anmeldung Festbeitrag</h3>
            <p>Dieses Formular dient der Anmeldung eines Beitrags am Fest (für Geladene) oder eines Spaliers (nach kirchlicher Trauung). Die teilnehmenden Personen sind gebeten, trotzdem das <a href="#/anmeldung">Anmeldeformular</a> auszufüllen. <br><br>
            Bei Fragen zu den Beiträgen, wende dich bitte direkt an die Trauzeugen: <a href="mailto:trauzeugen@mirjam-marius.ch" target="_blank"> trauzeugen@mirjam-marius.ch</a> / Chantal Wildhaber 079 463 76 83 / Bernhard Tschanz 076 592 93 33</p>

<div v-if="!submitted">

                  <b-form-group label="" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="eventTypeSelected" :aria-describedby="ariaDescribedby" name="some-radios" value="Spalier">Ich/wir möchten einen Spalier organisieren </b-form-radio>
      <b-form-radio v-model="eventTypeSelected" :aria-describedby="ariaDescribedby" name="some-radios" value="Beitrag">Ich/wir möchten einen Beitrag organisieren</b-form-radio>
    </b-form-group>

            <hr>
            <h4> Kontaktangaben</h4>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div>
                        <label for="tags-basic">Namen (Vor und Nachname) aller Beteiligten</label>
                        <b-form-tags input-id="tags-basic" placeholder="" duplicateTagText="Der Name existiert bereits" v-model="beteiligte" separator="," addButtonText="Hinzufügen" remove-on-delete></b-form-tags>
                        <b-form-invalid-feedback id="feedback">
                            Feld darf nicht leer sein.
                        </b-form-invalid-feedback>
                        <b-form-text id="tags-remove-on-delete-help" class="mt-2">
                            Gib die Namen kommagetrennt ein, oder drücke Enter nach jedem Namen. 
                        </b-form-text>
                        
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <b-form-group id="fieldset-2" description="" label="Ansprechsperson" label-for="input-2"  :invalid-feedback="ansprechspersonInvalidMsg" >
                        <b-form-input id="input-2" v-model="ansprechsperson" :state="ansprechspersonState" trim></b-form-input>
                    </b-form-group>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <b-form-group id="fieldset-3" description="" label="E-Mail" label-for="input-3" :invalid-feedback="eMailInvalidMsg" >
                        <b-form-input id="input-3" v-model="eMail" :state="eMailState" trim></b-form-input>
                    </b-form-group>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <b-form-group id="fieldset-4" description="" label="Telefon" label-for="input-4"  :invalid-feedback="telefonInvalidMsg" >
                        <b-form-input id="input-4" v-model="telefon" :state="telefonState" trim></b-form-input>
                    </b-form-group>
                </div>
                <div class="col-12 col-md-6">
                    <b-form-group id="fieldset-5" description="" label="Handy-Nr" label-for="input-5"  :invalid-feedback="handyNrInvalidMsg" >
                        <b-form-input id="input-5" v-model="handy" :state="handyNrState" trim></b-form-input>
                    </b-form-group>
                </div>
            </div>
            <div class="row">
                <div class="col-12 ">
                    <b-form-group label="Detaillierte Beschreibung des Beitrags/Spaliers:" label-for="textarea-formatter"  class="mb-0">
                        <b-form-textarea id="textarea" v-model="detailbeschreibung" placeholder="" rows="3" max-rows="6" :state="detailbeschreibung.length > 0"></b-form-textarea>
                        <b-form-invalid-feedback id="input-live-feedback">
                            Feld darf nicht leer sein.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </div>
            </div>
             <hr>
            <h4> Zeit</h4>

            <div class="row">
                <div class="col-12 col-md-6">
                    <b-form-group id="fieldset-4" label="Dauer des Beitrags"  description="Angabe in Minuten"  label-for="input-4"  :invalid-feedback="dauerBeitragInvalidMsg" >
                        <b-form-input id="input-4" v-model="dauerBeitrag" :state="dauerBeitragState" trim></b-form-input>
                    </b-form-group>
                </div>
                <div class="col-12 col-md-6">
                    <b-form-group id="fieldset-5" label="Erforderliche Vorbereitungszeit am Hochzeitstag" description="Angabe in Minuten"  label-for="input-5"  :invalid-feedback="dauerVorbereitungInvalidMsg" >
                        <b-form-input id="input-5" v-model="dauerVorbereitung" :state="dauerVorbereitungState" trim></b-form-input>
                    </b-form-group>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <b-form-group label="Erforderliches Material der Trauzeugen:" v-slot="{ ariaDescribedby }">
                        <b-form-checkbox-group id="checkbox-group-1" v-model="trauzeugenMat" :options="options" :aria-describedby="ariaDescribedby" name="flavour-1"></b-form-checkbox-group>
                    </b-form-group>
                </div>
            </div>

            <label for="tags-basic">Eigenes Material</label>
                        <b-form-tags input-id="tags-basic" placeholder="" v-model="eigenesMat" separator="," :state="eigenesMatState" duplicateTagText="Der Eintrag existiert bereits" addButtonText="Hinzufügen" remove-on-delete></b-form-tags>
                        <b-form-invalid-feedback id="feedback-eigenes-Mat">
                            Feld darf nicht leer sein.
                        </b-form-invalid-feedback>
                        <b-form-text id="tags-remove-on-delete-help" class="mt-2">
                            Gib die Gegenstände kommagetrennt ein, oder drücke Enter nach jedem Gegenstand.  
                        </b-form-text>
            <hr>
            <div class="row">
                <div class="col-12">
                    <p v-if="errored" class="alert alert-danger">Es ist ein Fehler aufgetreten! Diene Beitrags-Anmeldung konnte nicht gespeichert werden. Bitte informiere uns per Mail unter: <a href="mailto:brautpaar@mirjam-marius.ch">brautpaar@mirjam-marius.ch</a> ({{ errorMSG }})</p>
                    <b-button block variant="primary" :disabled="buttonDisabled" @click="formSend()">Beitrag anmelden</b-button>
                </div>
            </div>
            </div>
           <p v-if="submitted" class="alert alert-success">Deine Beitrags-Anmeldung wurde gespeichert! Wir haben dir ein E-Mail zur Erinnerung geschickt.</p>
            <br>
            <br>
        </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'

export default {

  name: 'Festbeitrag',
  props: {
    msg: String
  },
  data: function() {
      return {
          url: "https://mirjam-marius.ch/storage/",
          essenoptions: [
              { value: 'mitfleisch', text: "Mit Fleisch"},
              { value: 'vegetarisch', text: "Vegetarisch"},
              { value: 'vegan', text: "Vegan"},
          ],
          options: [
          { text: 'Stereoanlage mit Mikrofon', value: 'Stereoanlage mit Mikrofon' },
          { text: 'Computer', value: 'Computer' },
          { text: 'Beamer', value: 'Beamer' },
            ],
          eventTypeSelected: 'Spalier',
          beteiligte: [],
          ansprechsperson: "",
          eMail: "",
          telefon: "",
          detailbeschreibung: "",
          handy: "",
          trauzeugenMat: [],
          eigenesMat: [],
          dauerBeitrag: "",
          dauerVorbereitung: "",
          submitted: false,
          errored: false,
          errorMSG: null,
          eigenesMatState: null,
    }   
  },
  methods: {
      formSend() {
          const formData = new FormData();
          formData.append('spalier', this.eventTypeSelected);
          formData.append('beteiligte', this.beteiligte);
          formData.append('ansprechsperson', this.ansprechsperson);
          formData.append('email', this.eMail);
          formData.append('telefon', this.telefon);
          formData.append('handy', this.handy);
          formData.append('beschreibung', this.detailbeschreibung);
          formData.append('dauerBeitrag', this.dauerBeitrag);
          formData.append('dauerVorbereitung', this.dauerVorbereitung);
          formData.append('trauzeugenMat', this.trauzeugenMat);
          formData.append('eigenesMat', this.eigenesMat);

           axios
        .post('https://mirjam-marius.ch/beitrag/create', formData)
        .then(response => {this.info = response.data; this.submitted = true})
        .catch(error => {
            this.errored = true;
            this.errorMSG = error.message;
            console.error("There was an error!", error);
        });

      }
  },
  computed: {
      buttonDisabled() {
          if (this.ansprechspersonState && this.eMailState && this.dauerBeitragState && this.dauerVorbereitungState) {
              return false;
          }
          return true;
      },
      ansprechspersonState() {
          return this.ansprechsperson.length > 1 ? true : false;
      },
      ansprechspersonInvalidMsg() {
          if (this.ansprechsperson.length < 1 ){
              return "Feld darf nicht leer sein";
          }
          return "";
      },

      eMailState() {
          if (this.eMail.length < 1 ){
              return false;
          }
          if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]+/.test(this.eMail)){
            return false;
          }
          return true;
      },
      eMailInvalidMsg() {
          if (this.eMail.length < 1 ){
              return "Feld darf nicht leer sein";
          }
          if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]+/.test(this.eMail)){
            return "Ungültige e-Mail-Adresse";
          }
            return "";
      },

      telefonState() {
        
          if (!/^[0-9+ ]+$/.test(this.telefon) && this.telefon.length != 0){
            return false;
          }
          
          return null;

      },
      telefonInvalidMsg() {
        
          if (!/^[0-9+ ]+$/.test(this.telefon)){
            return "Muss eine Zahl sein";
          }
          return "";
      },

      handyNrState() {
        
          if (!/^[0-9+ ]+$/.test(this.handy) && this.handy.length != 0){
            return false;
          }
          return null;

      },
      handyNrInvalidMsg() {
         
          if (!/^[0-9+ ]+$/.test(this.handy)){
            return "Muss eine Zahl sein";
          }
          return "";
      },

      dauerBeitragState() {
          if (this.dauerBeitrag.length < 1 ){
              return false;
          }
          return true;

      },
      dauerBeitragInvalidMsg() {
          if (this.dauerBeitrag.length < 1 ){
              return "Feld darf nicht leer sein";
          }
          return "";
      },

      dauerVorbereitungState() {
          if (this.dauerVorbereitung.length < 1 ){
              return false;
          }
          return true;

      },
      dauerVorbereitungInvalidMsg() {
          if (this.dauerVorbereitung.length < 1 ){
              return "Feld darf nicht leer sein";
          }
          return "";
      },
      

     

      
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    margin-top: 40px;
}
</style>
