<template>
<div class="container">
  <div class="row">
    <div class="col-12">

      <h4>Videoaufnahme der Trauung nachschauen</h4>
      <p>Um das Video anschauen zu können benötigst du ein Passwort. Dieses haben wir per Mail an alle Gäste verschickt. Solltest du das Passwort nicht bekommen haben, kannst du dich gerne per Mail (<a href="mailto:brautpaar@mirjam-marius.ch">brautpaar@mirjam-marius.ch</a>) bei uns melden.</p>
        
      <iframe src="https://player.vimeo.com/video/670347869?h=88d461d958" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

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
      passwort: '',
      end: new Date('02/22/2022 13:00'),
    }
  },
  computed:{
    passwordCorrect() {
      if (this.passwort == "CrazyLittleThingCalledLove"){
        return true;
      }
      return false;
      
  },

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
