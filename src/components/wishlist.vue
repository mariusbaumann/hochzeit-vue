<template>
  <div class="row">
   <div class="col-12"  >
     <div v-for="(item, index) in info.data" :key="index">
    <div v-if="item.taken == 0" class="box" >
    
    <div v-if="item.taken == 0" class="row">
      <div class="col-md-3 col-12">
        <img :src="imgprefix + item.picture" class="wish-img" />
      </div>
      <div class="col-md-6 col-12">
        <h3>{{item.title}}</h3>
        <p>{{item.description}}</p>
        <h4 v-if="item.item_type == 'paypart'">{{ parseFloat(item.price).toFixed(2)}}</h4>
        <button @click="showModal(item.id)" v-if="item.item_type == 'paypart'" class="btn btn-primary">Anteil schenken</button>
        <button @click="showModal(item.id)" v-if="item.item_type == 'object'" class="btn btn-primary">Artikel schenken</button>
      </div>
      <div class="col-md-3 col-12">
        <div v-if="item.item_type == 'paypart'">
          <p>{{ item.splits_taken }} von {{ item.split_count }} Anteilen geschenkt</p>
          <div v-for="number in parseInt(item.splits_taken)" :key="'tile' + number" class="progress">
            <div class="progress-bar" role="progressbar" style="width: 3em" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div v-for="number in parseInt(item.split_count - item.splits_taken)" :key="number" class="progress" style="width: 3em">
            <div class="progress-bar" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
   </div>
  <!-- Modals -->


<!-- Modal 
 <div>

    <b-modal id="my-modal" ref="my-modal" hide-footer title="Deine Angaben">
      <div class="d-block">
        <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-1" label="Vorname" label-for="input-1" description="">
          <b-form-input id="input-1" v-model="form.email" type="text" placeholder="Vorname eingeben" required >
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Nachname" label-for="input-2" description="">
          <b-form-input id="input-2" v-model="form.email" type="text" placeholder="Nachname eingeben" required>  
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Email address:" label-for="input-3" description="Wird benötigt um dir die Kontoangaben zu senden.">
          <b-form-input id="input-3" v-model="form.email" type="email" placeholder="E-Mail-Adresse angeben" required>
          </b-form-input>
        </b-form-group>
        </b-form>

        <b-button type="submit" variant="primary">Schenken</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Abbrechen</b-button>
    </b-modal>
  </div>
-->

<div>
   

    <b-modal ref="my-modal" hide-footer title="Deine Angaben">
      <p>Du hast dich für diesen Wunsch entschieden:</p>
      <p ><span v-if="selectedItem.item_type == 'paypart'" >Anteil am Wunsch </span> <strong>{{ selectedItem.title }}</strong> <span v-if="selectedItem.item_type == 'paypart'">für {{ parseFloat(selectedItem.price).toFixed(2) }} Franken</span></p>
      <p>Nun brauchen wir noch deine Angaben, damit wir dir eine Bestätigung <span v-if="selectedItem.item_type == 'paypart'"> sowie unsere Kontoangaben </span> per E-Mail senden können.</p>
      <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Vorname" label-for="input-1" description="">
          <b-form-input id="input-1" v-model="takerFirstname" type="text" placeholder="Vorname eingeben" required >
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Nachname" label-for="input-2" description="">
          <b-form-input id="input-2" v-model="takerName" type="text" placeholder="Nachname eingeben" required>  
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="E-Mail-Adresse:" label-for="input-3" description="Wird benötigt um dir die Kontoangaben zu senden.">
          <b-form-input id="input-3" v-model="takerEmail" type="email" placeholder="E-Mail-Adresse angeben" required>
          </b-form-input>
        </b-form-group>
      </b-form>
      <p>{{ this.errorMessage }}</p>
      <b-button class="mt-2" variant="primary" block @click="takeWish">Schenken</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Abbrechen</b-button>
      
    </b-modal>
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
      imgprefix: "https://mirjam-marius.ch/storage/",
      form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
      show: "",
      selectedID: 0,
      itemTitle: "",
      takerName: "",
      takerFirstname: "",
      takerEmail: "",
      storeresult: "",
      errorMessage: "",
      info: "",
      offset: 0,
     
    }
  },
  mounted() {
    this.reloadData();
     window.setInterval(() => {
         this.reloadData();
      }, 30000)
    
  },
  computed: {
    selectedItem: function () {
      for (var i = 0; i < this.info.data.length ; i++) {
        if (this.info.data[i].id == this.selectedID) {
          return this.info.data[i];
        }
        
      }
      return 0;
    },
  },
  methods: {
    showModal(id) {
        this.errorMessage = "";
        this.$refs['my-modal'].show();
        this.selectedID = id;

      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
      onSubmit() {

      },
      onReset() {

      },
      takeWish() {
        var data = {
          "wishId": this.selectedID,
          "takerName": this.takerName,
          "takerFirstname": this.takerFirstname,
          "takerEmail": this.takerEmail,
          }
        axios
        .post('https://mirjam-marius.ch/wishes/take', data)
        .then(response => (this.storeresult = response))
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        })
        if (!this.errorMessage) {
          this.errorMessage = "Erfolgreich gespeichert";
          setTimeout(() => {  this.$refs['my-modal'].hide(); }, 3000);
          
        }

        setTimeout(() => {  this.reloadData() }, 3000);
      
      },
      reloadData() {
        axios
        .get('https://mirjam-marius.ch/wishes')
        .then(response => (this.info = response));
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

</style>
