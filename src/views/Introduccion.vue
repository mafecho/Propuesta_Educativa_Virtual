<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.texto-blanco
      h1 Introducción
    
    .row.justify-content-center
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/introduccion/img-1.svg", alt="alt")

      .col-lg-10.mt-5
        p.mb-0 Estimado aprendiz, continuando con este maravilloso aprendizaje, reflexione sobre lo siguiente: 
          span.texto-azul #[b Antes de que una mariposa pueda tomar su primer vuelo, debe empujar y luchar para salir de un capullo. Sin este desafiante obstáculo, sería demasiado débil para sobrevivir en el mundo exterior.] 
          |  ¿Qué tiene esto que ver con las pruebas de juego? Bueno, como una mariposa, cada juego debe someterse a una prueba seria que lo fortalezca antes de lanzarlo al mundo. Por lo anterior le invitamos a revisar el siguiente video para identificar el contexto de aprendizaje de este componente formativo:

    .row.my-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
