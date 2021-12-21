<template>
<div class="container">
  <div class="row">
    <div class="col-12">

      <h4>Corona-Massnahmen</h4>
      <br>
      <p>In den letzten Wochen hat sich unsere Vorfreude in Unsicherheit und viel Ungewissheit verwandelt, da der Bundesrat immer wieder neue Massnahmen in die Vernehmlassung schickte. Seit Freitag, 17. Dez. 2021 haben wir mehr Gewissheit.</p>
      <p>Nachdem wir abgewogen haben, ob wir die Hochzeit 2G durchführen oder doch lieber verschieben wollen, waren v.a. diese drei Faktoren ausschlaggebend:</p>
      <ul>
        <li>Das Verschieben würde sehr viel organisatorischen, finanziellen und auch emotionalen Aufwand mit sich bringen.</li>
        <li>Wenn wir die Hochzeit verschieben würden und diesen Aufwand auf uns nehmen würden, können wir trotzdem nicht mit Sicherheit sagen, dass es in einigen Monaten nicht wieder, oder immer noch, gleich sein wird und ebenfalls noch viele Corona-Massnahmen gelten.</li>
        <li>Der grösste Teil der Gäste ist geimpft.</li>
      </ul>

      <p>Somit haben wir uns entschieden unsere Hochzeit 2G durchzuführen. Wir sind uns bewusst, dass dadurch leider einige von euch ausgeschlossen werden. Wir hoffen sehr, dass ihr das verstehen oder zumindest akzeptieren könnt. Die Situation ist für alle doof und wir haben uns entschieden, diesen Weg zu gehen.</p>
      
      <p>An unserer Hochzeit gilt <strong>Maskenpflicht</strong>. Wir haben genügend Masken in den Hochzeitsfarben organisiert. Du kannst dir vor dem Kircheneingang eine weisse, rosafarbene, pinke oder schwarze Maske aussuchen.</p>
      <p>Vor der Kirche werden die <strong>Zertifikate</strong> und die <strong>Daten</strong> überprüft. Bitte halte dein Zertifikat und einen <strong> Ausweis</strong> bereit. </p>

      <p>In welcher Form der Apéro durchführbar sein wird, ist noch unklar. </p>

      <p>Danke für euer Verständnis.</p>

      <p>Nun hoffen wir sehr, dass die Massnahmen bis am 22. Januar 22 so bleiben und nicht nochmals verschärft werden. </p>

      <p>Bei Fragen kannst du dich gerne via folgende Mail-Adresse an uns wenden. <a href="mailto:brautpaar@mirjam-marius.ch">brautpaar@mirjam-marius.ch</a></p>
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
