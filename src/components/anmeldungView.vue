<template>
<div >
  <b-progress v-if="loadingVal" height="2px" :value="loadingVal" max="60" class="w-100" variant="secondary"></b-progress>
   <div class="col-12">
     
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="box">   
            <b-form-group id="fieldset-1" label="Passwort:"  label-for="input-1" valid-feedback="Thank you!" :invalid-feedback="invalidFeedback" :state="state">
              <b-form-input @keyup.enter="loadData"  id="input-1" v-model="password" type="password" :state="state" trim></b-form-input>
            </b-form-group>
            <div><b-button @click="loadData">Bestätigen</b-button></div>
          </div>
        </div>
        <div class="col-12 col-md-6">
           <div class="box">  

               
          <h4>Statistik</h4>
            <p>Nötige Mitfahrplätze vs. Mitfahrgelegenheiten
            <b-progress class="w-100" :max="maxVal" >
            <b-progress-bar :value="plusMitfahr - minusMitfahr" style="background-color: #dddddd"></b-progress-bar>
            <b-progress-bar :value="minusMitfahr" variant="danger">{{ minusMitfahr }}</b-progress-bar>
            <b-progress-bar :value="plusMitfahr" variant="success">{{ plusMitfahr }}</b-progress-bar>
            <b-progress-bar :value="minusMitfahr - plusMitfahr" style="background-color: #dddddd"></b-progress-bar>
            </b-progress></p>
          <p><strong>Anzahl Desserts:</strong><b-progress class="w-100" max="10" >
            <b-progress-bar :value="dessertVal" variant="success">{{ dessertVal }}</b-progress-bar>
            </b-progress> </p>
            <div class="row">
              <div class="col-12 col-md-6">
                <p><strong>Total Angemeldet:</strong> <span class="big">{{ totalVal }}</span></p>
                <p><strong>Geladene Angemeldet:</strong> <span class="big">{{ geladeneVal }}</span></p>
                <p><strong>Nicht Geladene Angemeldet:</strong> <span class="big">{{ nGeladeneVal }}</span></p>
              </div>
              <div class="col-12 col-md-6">
                <p><strong>Vegi:</strong> <span class="big">{{ vegiCount }}</span></p>
                <p><strong>Vegan:</strong> <span class="big">{{ veganCount }}</span></p>
                <p><strong>mit Fleisch:</strong> <span class="big">{{ meatCount }}</span></p>
              </div>
            </div>
           
           </div>
        </div>
      
      </div>

  <div v-if="displayData" class="row">
    
     <div  v-for="(f, index) in displayData" :key="index" class="box">
       
       <b-badge class="badge"  v-if="f.abmeldung == 3" variant="warning">Wunsch erfüllt</b-badge><b-badge class="badge"  v-if="f.abmeldung == 0" variant="success">Anmeldung</b-badge><b-badge v-if="f.abmeldung == 1" variant="danger">Abmeldung</b-badge>
       
       
       <h3>{{ f.vorname }} {{ f.name }}</h3>
       <hr>
       <div class="row">
         <div class="col-12 col-md-4">
           <h4>Personendaten</h4>
           <div><strong>E-Mail:</strong> {{ f.email }}</div>
           <div v-if="f.abmeldung == 0"><strong>Adresse:</strong> {{ f.adresse }} {{ f.hausnr }}, {{ f.plz}} {{ f.ort }}</div>
           <div v-if="f.anz_personen > 0"><strong>Zusätzliche Personen:</strong> {{ f.anz_personen }}</div>
         </div>
         <div v-if="f.geladen == 1" class="col-12 col-md-4">
           <h4>Geladen</h4>
           <div v-if="f.ben_mitfahr == 1"><strong>Benötige Mitfahrgelegenheit</strong></div>
           <div v-if="f.hab_mitfahr > 0"><strong>Habe Plätze zum Mitfahren:</strong> {{ f.hab_mitfahr }} </div>
            <div ><strong>Essenswunsch:</strong> {{ f.essenstyp }}</div>
            <div v-if="f.dessert == 1"><strong>Bringt ein Dessert</strong></div>
           <div v-if="f.allergie"><strong>Allergie:</strong> {{ f.allergie }}</div>
         </div>
         <div  class="col-12 col-md-4">
            <h4 v-if="f.wishes.length > 0" >Wünsche erfüllt</h4>
            <div v-for="(t, index) in f.wishes" :key="index">
              
              <p>{{ t }}</p>
              


              
            </div>
         </div>
       </div>

     </div>
     
   </div>
  </div>
</div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Wishlist',
  props: {
    msg: String,
    
  },
  data: function() {
    return {
      data: {data: [{"error":""}]},
      taker: {data: [{"error":""}]},

      wishlist: {data: [{"error":""}]},

      password: "",
      error: [{"error":"wrong password"}],
      loadingVal: null,
     
    }
  },
  mounted() {
    
   

    
  },
  computed: {

  vegiCount() {
    var counter = 0;
      this.data.data.forEach(element => {
        if (element.essenstyp == "vegetarisch") {
        counter = counter + 1 + parseInt(element.anz_personen);
        }
      });
      return counter;
  },
  veganCount() {
    var counter = 0;
      this.data.data.forEach(element => {
        if (element.essenstyp == "vegan") {
        counter = counter + 1 + parseInt(element.anz_personen);
        }
      });
      return counter;
  },
  meatCount() {
    var counter = 0;
      this.data.data.forEach(element => {
        if (element.essenstyp == "mit fleisch") {
          console.log(element.name)
         counter = counter + 1 + parseInt(element.anz_personen);
        }
      });
      return counter;
  },
    
   displayData(){
     var displayData = new Object();
     var takerData = new Object();
     var wishlistData = new Object;
     var indicator = false;
      displayData = this.data.data;
      takerData = this.taker.data;
      wishlistData = this.wishlist.data;
      
      for (var t2 = 0; t2 < takerData.length; t2++){
        indicator = false;
        for (var i2 = 0; i2 < displayData.length; i2++){
           if (displayData[i2].email == takerData[t2].takerEmail){
             indicator = true;
            
           }
        }
        if (indicator == false ){
          var transfer = new Object();
          transfer.vorname = takerData[t2].firstname;
          transfer.name = takerData[t2].name;
          transfer.email = takerData[t2].takerEmail;
          transfer.abmeldung = 3;
          transfer.ben_mitfahr = 0;
          transfer.hab_mitfahr = 0;
          transfer.dessert = 0;
          
          displayData.push(transfer);
        }
        }


      for (var f = 0; f < displayData.length; f++){
        displayData[f].wishes = [];
      }

      for (var i = 0; i < displayData.length; i++){
        for (var t = 0; t < takerData.length; t++){
          if (displayData[i].email == takerData[t].takerEmail){
            for (var w = 0; w < wishlistData.length; w++){
              if (takerData[t].wishTakenID == wishlistData[w].id){
                displayData[i].wishes.push(wishlistData[w].title);
              }
          }
        }
      }
      
    }
      
      return displayData;
      
   },

    selectedItem: function () {
      for (var i = 0; i < this.info.data.length ; i++) {
        if (this.info.data[i].id == this.selectedID) {
          return this.info.data[i];
        }
        
      }
      return 0;
    },
    state() {
      if (this.data.data[0].error == "wrong password"){
        return false;
      }
      return null;
    },
    invalidFeedback() {
      if (this.data.data[0].error == "wrong password"){
        return "Passwort falsch";
      }
      return "";
    },
    plusMitfahr() {
      var counter = 0;
      this.data.data.forEach(element => {
        counter = counter + parseInt(element.hab_mitfahr);
      });
      return counter;
    },
    minusMitfahr() {
      var counter = 0;
      this.data.data.forEach(element => {
        if (parseInt(element.ben_mitfahr)) {
        counter = counter + 1 + parseInt(element.anz_personen);
        }
      });
      return counter;
    },
    maxVal() {
      if (this.minusMitfahr > this.plusMitfahr) {
        return this.minusMitfahr * 2;
      }
      if (this.minusMitfahr < this.plusMitfahr) {
        return this.plusMitfahr * 2;
      }
      return 0;
    },
    dessertVal() {
      var counter = 0;
      this.data.data.forEach(element => {
        counter = counter + parseInt(element.dessert);
      });
      return counter;
    },
    totalVal() {
      var counter = 0;
      this.data.data.forEach(element => {
        if (element.abmeldung == 0) {
          counter = counter + parseInt(element.anz_personen) + 1
        }
      });
      return counter;
    },
    geladeneVal() {
      var counter = 0;
      this.data.data.forEach(element => {
        if (element.geladen == 1) {
          counter = counter + parseInt(element.anz_personen) + 1;
        }
        
      });
      return counter;
    },
    nGeladeneVal() {
      
      return this.totalVal - this.geladeneVal ;
    },
  },
  methods: {
     wish(takenID){
      return takenID;
    },
    

 countDown(){
   this.loadingVal = this.loadingVal + 1;
 },
  
  
    
      reloadData() {
        
        const formData = new FormData();
        formData.append('password', this.password);
        
        axios
        .post('https://mirjam-marius.ch/anmeldung', formData)
        .then(response => (this.data = response));

        axios
        .post('https://mirjam-marius.ch/taker', formData)
        .then(response => (this.taker = response));

        axios
        .get('https://mirjam-marius.ch/wishes')
        .then(response => (this.wishlist = response));

        this.loadingVal = 0;
       

      },

      loadData() {
        this.reloadData();
     window.setInterval(() => {
         this.reloadData();
      }, 60000)
window.setInterval(() => {
         this.countDown();
      }, 1000)
      }
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wish-img {
  width: 100%;
}

.progress {
  margin-bottom: 3px;
  margin-right: 4px;
  float: left;
}

.container {
  margin-top: 50px;
}

.badge {
  margin-bottom: 15px;
}

.big {
  font-size: 20px;
}

p {
  font-size: 16px;
}
</style>
