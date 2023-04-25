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
        p Los recursos digitales ofrecen nuevas oportunidades en los procesos de enseñanza y aprendizaje al incorporar la imagen, el sonido y la interactividad como elementos que refuerzan la comprensión y motivación del aprendiz.
          span.texto-azul #[b Los recursos educativos digitales son la herramienta base para la creación de buenos e innovadores ambientes de aprendizaje].

        p Actualmente las empresas manejan su plan de capacitación y selección de personal por medio de herramientas y material didactico evaluativo, que permita tener un mayor alcance en sus procesos de selección de personal y en sus procesos de capacitación, convirtiendo en un activo de gran importancia sus plataformas de capacitación.


    .row.my-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/RrteEnhzyHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



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
