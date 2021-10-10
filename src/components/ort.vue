<template>
<div class="container">
  <div class="row">
    <div class="col-12">

      <h4>Trauung</h4>
      <br>
      <p>Unsere Trauung findet am 22. Januar 2022 um 13:00 Uhr in der ref. Kirche Rüti ZH statt. Zu dieser und dem anschliessenden Apéro seid ihr alle herzlich eingeladen.</p>
      <p>Die reformierte Kirche Rüti ZH liegt inmitten des schönen Dorfkerns von Rüti. Du kannst mit der Bahn über den nordöstlich gelegenen Bahnhof anreisen. Mit dem Auto kommst du von der westlich gelegenen Autobahn via Spitalstrasse zur Kirche.</p>
      
      <iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=8.845008015632631%2C47.25715167432957%2C8.852893710136415%2C47.261371285221266&amp;layer=mapnik&amp;marker=47.259263000859285%2C8.848953188862652" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=47.25926&amp;mlon=8.84895#map=18/47.25926/8.84895">Größere Karte anzeigen</a></small>  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Mainpage',
  props: {
    msg: String,
    
  },
  data: function () {
    return {
      days: 100,
      hours: '20',
      minutes: '5',
      seconds: '4',
      countDown: 10,
      end: new Date('02/22/2022 13:00'),
    }
  },
  methods: {
   
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: 40px;
  text-align: center;
}

.container {
    margin-top: 40px;
}



</style>
