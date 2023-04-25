<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Pruebas del sistema

    .row
      figure
        img(src='@/assets/curso/temas/tema4/img1.png', alt='Texto que describa la imagen')

      p.mt-5 Se dividieron las pruebas de sistema en tres bloques diferenciados atendiendo a los requisitos no funcionalidades establecidos previamente en este documento, como son: 

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Pruebas de portabilidad

    .row.justify-content-center.align-items-center
      .col-2
        figure
          img(src='@/assets/curso/temas/tema4/img2.png', alt="alt")      
      .col-10
        p En cuanto a la portabilidad se había pedido que el juego pudiera ser ejecutado de manera multiplataforma. Se seleccionaron entre las plataformas disponibles las más usadas en el mundo de la informática hoy en día. Estas plataformas son los ordenadores y los dispositivos móviles como teléfonos o tabletas. De entre esta gran variedad de plataformas se decidió que, en cuanto al ordenador, el juego pudiera ser ejecutado en entornos Windows y que en móviles pudiera ser ejecutado en entornos Android, a pesar de que hay otras alternativas como MacOS para sobremesa o IOS en móviles. 

        p Para garantizar el cumplimiento de estos requisitos no funcionales se estableció que la prueba consistiría en que se pudiera ejecutar correctamente el juego en la plataforma deseada. Después de poder ejecutar el juego en las distintas plataformas sin ningún problema se concluyó que la prueba estaba superada. 

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Pruebas de compatibilidad

    .row.justify-content-center.align-items-center
      .col-2
        figure
          img(src='@/assets/curso/temas/tema4/img3.png', alt="alt")      
      .col-10
        p En cuanto a la compatibilidad lo que se buscaba era que, al tratarse de un juego multijugador, éste permitiera que se jugará desde distintos dispositivos la misma partida. A esto se le denomina, en el argot de los videojuegos, juego cruzado. Para realizar estas pruebas se procedió a crear una partida con dos jugadores. 

        p Uno accedió al juego vía ordenador y el segundo desde su dispositivo móvil Android. Se jugó la partida completa y se concluyó entonces que la partida podía ser jugada sin ningún problema, puesto que no se produjo ningún error. Para el juego es indistinto que una persona se conecte desde un dispositivo u otro. 

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Pruebas de rendimiento

    .row.justify-content-center.align-items-center
      .col-2
        figure

      .col-10
        p Para realizar y analizar las pruebas de rendimiento se hizo uso de la herramienta Profiler de #[i Unity]. El Profiler ayuda a optimizar el juego. Se trata de un reporte en ejecución que calcula el tiempo empleado en la ejecución distintas áreas del juego o los recursos consumidos, esto lo puede revisar de manera más detallada en el video que se expone a continuación:


    .row.my-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Pruebas de aceptación

    .row.justify-content-center.align-items-center
      .col-1
        figure
          img(src='@/assets/curso/temas/tema4/img4.png', alt="alt")      
      .col-10
        p Una vez finalizado el juego se deben realizar, también, las pruebas de aceptación. Para realizar dichas pruebas se debe acudir mínimo a dos fuentes, con el objetivo de que prueben el juego y den sus impresiones sobre la apariencia física del mismo. Esto proporcionará nuevos reportes y añadirá una nueva dimensión a las pruebas de aceptación. Una nueva dimensión que será tenida en cuenta para trabajos próximos.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
