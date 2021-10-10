<template>
  <div class="container">
    <div class="row">
        <div class="col-12">
            <h3>Anmeldung</h3>
            <p>Wir können leider noch nicht abschätzen, wie die Covid-19-Situation im Januar sein wird. Die Wahrscheinlichkeit ist gross, dass bei unserer Hochzeit die Zertifikatspflicht gilt. Daher bitten wir dich, dich über dieses 
                Anmeldeformular anzumelden. So können wir dich kurz vor unserer Hochzeit genauer informieren. Melde dich bitte auch für die kirchliche Trauung und den Apero an.</p>
<div v-if="!submitted">
                  <b-form-group label="" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="abmeldenSelected" :aria-describedby="ariaDescribedby" name="some-radios" value="Anmelden" >Ich melde mich an</b-form-radio>
      <b-form-radio v-model="abmeldenSelected" :aria-describedby="ariaDescribedby" name="some-radios" value="Abmelden">Ich melde mich ab</b-form-radio>
    </b-form-group>

            <hr>
            <h4> Persönliche Angaben</h4>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div role="group">
                        <b-form-group id="fieldset-1"  description="" label="Vorname" label-for="input-1" :invalid-feedback="vornameInvalidMsg" >
                            <b-form-input id="input-1" v-model="vorname" :state="vornameState"  aria-describedby="input-live-help input-live-feedback" trim></b-form-input>
                        </b-form-group>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <b-form-group id="fieldset-2" description="" label="Nachname" label-for="input-2"  :invalid-feedback="nachnameInvalidMsg" >
                        <b-form-input id="input-2" v-model="nachname" :state="nachnameState" trim></b-form-input>
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
            <hr>
            <div v-if="(abmeldenSelected == 'Anmelden')">
            <h4> Adresse</h4>
            <div class="row">
                <div class="col-8 col-md-10">
                    <b-form-group id="fieldset-4" description="" label="Strasse" label-for="input-4"  :invalid-feedback="streetInvalidMsg" >
                        <b-form-input id="input-4" v-model="strasse" :state="streetState" trim></b-form-input>
                    </b-form-group>
                </div>
                <div class="col-4 col-md-2">
                    <b-form-group id="fieldset-5" description="" label="Haus-Nr." label-for="input-5"  :invalid-feedback="hausNrInvalidMsg" >
                        <b-form-input id="input-5" v-model="hausNr" :state="hausNrState" trim></b-form-input>
                    </b-form-group>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <b-form-group id="fieldset-6" description="" label="PLZ" label-for="input-6"  :invalid-feedback="plzInvalidMsg" >
                        <b-form-input id="input-6" v-model="plz" :state="plzState" trim></b-form-input>
                    </b-form-group>
                </div>
                <div class="col-8">
                    <b-form-group id="fieldset-7" description="" label="Ort" label-for="input-7"  :invalid-feedback="ortInvalidMsg" >
                        <b-form-input id="input-7" v-model="ort" :state="ortState" trim></b-form-input>
                    </b-form-group>
                </div>
            </div>
            <hr>
            <h4> Weitere Angaben</h4>
            <div class="row">
                <div class="col-12 ">
                    <b-form-group id="fieldset-8" description="" label="Anzahl Personen die mit mir mitkommen (Familienmitglieder)"  label-for="input-8" :invalid-feedback="personCountInvalidMsg" >
                        <b-form-input id="input-8" type="number" v-model="personCount"  trim></b-form-input>
                    </b-form-group>
                </div>
                <div class="col-12 ">
                    <b-form-checkbox id="checkbox-1" v-model="geladenStatus" name="checkbox-1" >
                        Ich bin geladener Gast
                    </b-form-checkbox>
                   
                </div>
            </div> 
            <div v-if="geladenStatus">
            <hr>
            <h4> Geladen</h4>
           
            <div class="row">
                <div class="col-12 col-md-6">
                    <b-form-checkbox id="checkbox-2" v-model="mitfahrStatus" name="checkbox-2">
                        Ich benötige eine Mitfahrgelegenheit von der Kirche zum Festort.
                    </b-form-checkbox>
                    
                </div>
                
                <div class="col-12 col-md-6">
                    <div v-if="!mitfahrStatus">
                    <b-form-group id="fieldset-9" description="" label="Anzahl freie Sitzplätze in meinem Auto für die Fahrt von Kirche zum Festort:" label-for="input-9"  >
                        <b-form-input type="number" id="input-9" v-model="mitfahrCount"  trim></b-form-input>
                    </b-form-group>
                     </div>
                </div>  
               
        
            </div>
              
            <div class="row">
                <div class="col-12 col-md-6">
                    <b-form-group id="fieldset-10" description="" label="Ich esse:" label-for="input-10" :invalid-feedback="eatTypeInvalidMsg" >
                        <b-form-select v-model="eatType" :state="eatTypeState" :options="essenoptions"></b-form-select>
                    </b-form-group>  
                </div>
                <div class="col-12 col-md-6">
                    <b-form-group id="fieldset-11" description="Wenn nicht, leer lassen" label="Ich habe eine Speiseallergie:" label-for="input-11"     >
                        <b-form-input id="input-11" v-model="eatAllergie"  trim></b-form-input>
                    </b-form-group>
                </div>
                
            </div>
            <div class="row" v-if="dessertShow">
                <div class="col-12 col-md-6">
                    <b-form-checkbox id="checkbox-3" v-model="dessertStatus" name="checkbox-3">
                        Ich bringe einen Dessert für 8-10 Personen mit.
                    </b-form-checkbox>
                </div>
            </div>
            </div>
            <br>
            </div>
            <div class="row">
                <div class="col-12">
                    
                    <p v-if="errored" class="alert alert-danger">Es ist ein Fehler aufgetreten! Diene Anmeldung konnte nicht gespeichert werden. Bitte informiere uns per Mail unter: <a href="mailto:brautpaar@mirjam-marius.ch" target="_blank">brautpaar@mirjam-marius.ch</a> ({{ errorMSG }})</p>
                    <b-button block variant="primary" :disabled="buttonDisabled" @click="formSend">{{ abmeldenSelected }}</b-button>
                </div>
            </div>
            <br>
            <br>
        </div>
        <p v-if="submitted" class="alert alert-success">Deine Anmeldung wurde gespeichert! Wir haben dir ein E-Mail zur Erinnerung geschickt.</p>
        </div>
        
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Anmeldung',
  
  props: {
    msg: String
  },
  data: function() {
      return {
          url: "https://mirjam-marius.ch/storage/",
          essenoptions: [
              { value: 'mit fleisch', text: "Mit Fleisch"},
              { value: 'vegetarisch', text: "Vegetarisch"},
              { value: 'vegan', text: "Vegan"},
          ],
          abmeldenSelected: 'Anmelden',
          geladenStatus: false,
          dessertStatus: false,
          vorname: "",
          nachname: "",
          eMail: "",
          strasse: "",
          hausNr: "",
          plz: "",
          ort: "",
          personCount: 0,
          mitfahrCount: 0,
          mitfahrStatus: 0,
          eatType: "",
          eatAllergie: "",
          errorMSG: null, 
          info: null,
          errored: false,
          submitted: false,
          dessertShow: null,
    }   
  },
methods: {
    formSend() {
        console.log("sdlkfjsldkfj");

        const formData = new FormData();
        formData.append('name', this.nachname);
        formData.append('vorname', this.vorname);
        formData.append('anz_personen', this.personCount);
        formData.append('adresse', this.strasse);
        formData.append('email', this.eMail);
        formData.append('handy', '');
        formData.append('abmeldung', this.abmeldenBool  );//
        formData.append('geladen', this.geladenStatusBool);
        formData.append('ben_mitfahr', this.mitfahrStatusBool);
        formData.append('hab_mitfahr', this.mitfahrCount);
        formData.append('dessert', this.dessertStatusBool);
        formData.append('essenstyp', this.eatType);
        formData.append('allergie', this.eatAllergie);
        formData.append('plz', this.plz);
        formData.append('ort', this.ort);
        formData.append('hausnr', this.hausNr);


        //var ErrorMSGLocal = 0;
        axios
        .post('https://mirjam-marius.ch/anmeldung/create', formData)
        .then(response => {this.info = response.data; this.submitted = true})
        .catch(error => {
            this.errored = true;
            this.errorMSG = error.message;
            console.error("There was an error!", error);
        });
        //console.log(ErrorMSGLocal);
        //this.errorMSG = ErrorMSGLocal;
    }
},


  computed: {
      buttonDisabled() {
          if (this.vornameState && this.nachnameState && this.eMailState && this.abmeldenSelected == "Abmelden"){
              return false; //false = button aktiv, klickbar
          }
          if (this.vornameState && this.nachnameState && this.eMailState && this.abmeldenSelected == "Anmelden" && this.streetState && this.hausNrState && this.plzState && this.ortState && this.personCountState && !this.geladenStatus){
              return false; //false = button aktiv, klickbar
          }
          if (this.vornameState && this.nachnameState && this.eMailState && this.abmeldenSelected == "Anmelden" && this.streetState && this.hausNrState && this.plzState && this.ortState && this.personCountState && this.geladenStatus && this.eatTypeState){
              return false; //false = button aktiv, klickbar
          }
          return true; //true = button deaktiviert, nicht klickbar
      },
      vornameState() {
          return this.vorname.length > 1 ? true : false;
      },
      vornameInvalidMsg() {
          if (this.vorname.length < 1 ){
              return "Feld darf nicht leer sein";
          }
          return "";
      },

      nachnameState() {
          return this.nachname.length > 1 ? true : false;
      },
      nachnameInvalidMsg() {
          if (this.vorname.length < 1 ){
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

      streetState() {
          if (this.strasse.length < 1 ){
              return false;
          }
          return true;
      },
      streetInvalidMsg() {
          if (this.strasse.length < 1 ){
              return "Feld darf nicht leer sein";
          }
            return "";
      },

      hausNrState() {
          if (this.hausNr.length < 1 ){
              return false;
          }
          return true;
      },
      hausNrInvalidMsg() {
          if (this.hausNr.length < 1 ){
              return "Feld darf nicht leer sein";
          }
            return "";
      },

      plzState() {
          if (this.plz.length < 1 ){
              return false;
          }
          if (!/^[0-9a-zA-Z-]+$/.test(this.plz)){
            return false;
          }
          
          
          return true;
      },
      plzInvalidMsg() {
          if (this.plz.length < 1 ){
              return "Feld darf nicht leer sein";
          }
          if (!/^[0-9a-zA-Z-]+$/.test(this.plz)){
            return "Muss eine Zahl sein";
          }
          
            return "";
      },

      ortState() {
          if (this.ort.length < 1 ){
              return false;
          }
          return true;
      },
      ortInvalidMsg() {
          if (this.ort.length < 1 ){
              return "Feld darf nicht leer sein";
          }
            return "";
      },

      personCountState() {
          if (this.personCount.length < 1 ){
              return false;
          }
          if (!/^[0-9]+$/.test(this.personCount)){
            return false;
          }
          return true;
      },
      personCountInvalidMsg() {
          if (this.personCount.length < 1 ){
              return "Feld darf nicht leer sein";
          }
          if (!/^[0-9]+$/.test(this.personCount)){
            return "Muss eine Zahl sein";
          }
            return "";
      },

      mitfahrCountState() {
        
          return true;
      },
      mitfahrCountInvalidMsg() {
          return true;
      },

      eatTypeState() {
          if (this.eatType.length < 1 ){
              return false;
          }
          
          return true;
      },
      eatTypeInvalidMsg() {
          if (this.eatType.length < 1 ){
              return "Bitte Auswahl treffen";
          }
          
            return "";
      },
      abmeldenBool() {
          if ( this.abmeldenSelected == "Anmelden") {
              return 0 ;
          }
          return 1;
      },
    geladenStatusBool() {
        if (this.geladenStatus) {
            return 1;
        }
        return 0;
    },
    mitfahrStatusBool() {
         if (this.mitfahrStatus) {
            return 1;
        }
        return 0;
    },
    dessertStatusBool() {
         if (this.dessertStatus) {
            return 1;
        }
        return 0;
    }
  },
  mounted() {
      axios
        .get('https://mirjam-marius.ch/anmeldung/dessert')
        .then(response => {
            //console.log(response.data[1].enough);
            this.dessertShow = !response.data[1].enough;

        });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    margin-top: 40px;
}
</style>
