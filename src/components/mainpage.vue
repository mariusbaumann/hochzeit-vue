<template>
  <div class="row">
    <div class="col-12">
      <div class="hello">
        <b-alert class="alert-banner" show variant="danger"> Der Anmeldeschluss ist schon bald. Bitte melde dich spätestens bis am <strong>20. Oktober 2021 <a href="#/anmeldung" class="alert-link">hier</a> an</strong>.</b-alert>
        <h1>Wir heiraten in:</h1>
        <h2>{{ days }} Tagen und {{ hours }}:{{ minutes }}:{{ seconds }} </h2>
        <h4>22. Januar 2022</h4>
      </div>
      
      <div class="cust-img-wrapper">
        <div class="cust-img-overlay-top"></div>
        <b-img src="/img/RGN04428.png" fluid-grow alt="Responsive image" class="cust-img"></b-img>
        <div class="cust-img-overlay-bottom"></div>
        
      </div>
      <div class="text-overlay">
        <h1>Brautpaar</h1>
        <h3> So sind wir zusammengekommen</h3>
        <p class="box">Vor ungefähr 5 Jahren ist Marius mit einigen Freunden aus der EMK Uster im Jugendgottesdienst der EMK Hombrechtikon aufgetaucht, in dem Mirjam in der Band gesungen hatte. In den folgenden zweieinhalb Jahren sind wir uns immer wieder bei verschiedensten Gelegenheiten ungeplant über den Weg gelaufen. Wer denkt, dass wir uns während diesen Jahren nähergekommen sind, hat sich getäuscht. Ende Sommer 2019 wurden wir beide von einem Freund angefragt, zusammen mit ihm und einer weiteren Person im Gottesdienst Musik zu machen. Marius spielte Schlagzeug, Mirjam sang. Bei der Bandprobe hatten wir es sehr lustig miteinander und entschieden uns für einen kurzen z’Mittag in Zürich zu verabreden. Mirjam hatte genau 45min Zeit. In der kommenden Woche wurde dies wiederholt. Dieses Mal für etwa 75min. Als Mirjam Anfangs Herbstferien bei Marius zum z’Mittagessen eingeladen wurde, platzte sie mit der Frage heraus, ob er eigentlich Interesse an ihr hätte. Er fragte zurück, was bei uns beiden ein Herumstammeln auslöste. Schliesslich einigten wir uns darauf, uns näher kennen zu lernen, um dies herauszufinden. Drei Wochen später, am 3. November 2019 kamen wir zusammen.
        </p>
      </div>
    
    <div class="row">
      <div class="col-12 col-md-6" align="center">
        <h4>Mehr über Marius Baumann</h4>
        <p class="box">Marius liebt es im technischen Bereich zu arbeiten. Er hat sich bereits als Kind u.a. für seine Zimmertür eine Klingel gebaut. So ist es auch nicht verwunderlich, dass er eine Lehre als Mulitmedia-Elektroniker bei der SRG absolviert hat. Heute arbeitet er in den Zentralen Diensten der EMK Schweiz im Bereich Kommunikation und IT.</p>
      </div>
      <div class="col-12 col-md-6" align="center">
        <h4>Mehr über Mirjam Willi</h4>
        <p class="box">Mirjam’s Traumberuf seit der Kindheit war Lehrerin, was sie auch in die Tat umsetzte. Die letzten fünf Jahre hat sie als Klassenlehrerin gearbeitet. Diesen Sommer hat sie ein weiteres Studium begonnen um Musiktherapeutin zu werden. Nebenher arbeitet sie weiterhin in einem kleineren Pensum als Primarlehrerin.</p>
      </div>
    </div>
    <div align="center">
      <h1>Trauzeugen</h1>
    </div>
    <div class="row">
      <div class="col-12 col-md-6" align="center">
        <b-img v-bind="mainProps" src="/img/BernhardTschanz.JPG" rounded="circle" alt="Circle image" class="cust-person-img"></b-img>
        <br><br>
        <h4>Bernhard Tschanz</h4>
        <p class="box">Bernhard Tschanz hat mehrere Jahre mit Marius die Gruppenleiter-Ausbildung der Jungschar EMK geleitet. Er arbeitet bei der Post auf der Paketbasis.</p>
      </div>
      <div class="col-12 col-md-6 " align="center">
        
        <b-img v-bind="mainProps" src="/img/ChantalWildhaber.jpg" rounded="circle" alt="Circle image" class="cust-person-img"></b-img>
        <br><br>
        <h4>Chantal Wildhaber</h4>
        <p class="box">Chantal Wildhaber ist seit vielen Jahren eine Freundin von Mirjam. Sie ist als Missionarskind aufgewachsen. Bereits zu dieser Zeit fand ein Briefwechsel zwischen den beiden statt. Sie besucht ebenfalls die EMK Hombrechtikon und arbeitet als Ergotherapeutin.</p>
      </div>
    </div>
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
      end: new Date('01/22/2022 13:00'),
    }
  },
  methods: {
    countDownTimer: function() {
      var now = new Date();
      var distance = this.end - now;

      var days = distance / 1000 / 60 / 60 / 24;
      var resultdays = Math.floor(distance / 1000 / 60 / 60 / 24 );

      var hours = (days - resultdays) * 24; 
      var resulthours = Math.floor(hours);

      var minutes = (hours - resulthours) * 60;
      var resulmintues = Math.floor(minutes);

      var seconds = (minutes - resulmintues) * 60;
      var resultseconds = Math.floor(seconds);

      //var seconds = Math.floor(distance / 1000);
      //var minutes = Math.floor(distance / 1000 / 60);
      
      this.days = resultdays ;
      this.hours = resulthours > 9 ? resulthours : "0" + resulthours;
      this.minutes = resulmintues > 9 ? resulmintues : "0" + resulmintues;
      this.seconds = resultseconds > 9 ? resultseconds : "0" + resultseconds;

      
    }
  },
  created: function () {
      this.countDownTimer()
      setInterval(() => this.countDownTimer(), 1000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: 40px;
  text-align: center;
}

.alert-banner {
  margin-left: 10px;
  margin-right: 10px;
}


</style>
