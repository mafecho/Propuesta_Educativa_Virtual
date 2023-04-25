<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cómo iniciar las pruebas o testing en un videojuego

    .row.justify-content-center.align-items-center
      .col-6.col-lg-2.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt="alt")      
      .col-lg-10
        p En teoría, cualquiera puede aprender a probar un juego, incluso si no está capacitado para ser un ingeniero de control de calidad. Sin embargo, tener éxito y eficacia en las pruebas es otra cuestión, y los proyectos a gran escala generalmente necesitan evaluadores calificados para tener éxito. Por lo tanto, puede considerar contratar a estos profesionales o delegar las pruebas a una empresa con amplia experiencia en el campo.
        p Cualquiera que sea la opción que elija, el proceso de prueba será más o menos el mismo. Entendemos que las docenas de tipos de pruebas que enumeramos son únicas y requieren #[i software], metodología y conocimientos diferentes, pero las etapas de las pruebas suelen ser uniformes como se observa a continuación:

    .row.justify-content-center.my-5
      .col-lg-8
        PasosA.color-acento-contenido.my-5(tipo="n")
          .row
            .col-md-8.mb-4.mb-md-0
              h3 Planificación
              p Tienes que caminar antes de correr y las pruebas no son diferentes. En lugar de probar cuando surge la necesidad, puede hacer que el proceso sea más eficiente creando un plan integral con una lista de casos de prueba y cronología.
            .col-md-4.mt-4
              figure
                img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen')

          .row
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')
            .col-md-8
              h3 Pruebas
              p No hay mucho que decir sobre esta etapa. Una prueba puede durar entre unos minutos y varios días. No es raro que se realicen varias pruebas simultáneamente.
              

          .row
            .col-md-8.mb-4.mb-md-0
              h3 Informes de errores y correcciones
              p Los ingenieros de control de calidad encuentran muchos tipos de errores en las pruebas de juegos y es su trabajo documentarlos todos. Los datos de la prueba y los errores/problemas identificados se empaquetan en un informe de errores y se envían a los desarrolladores para que los corrijan en una compilación futura.
          
            .col-md-4.mt-4
              figure
                img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')

          .row
            .col-md-8.mb-4.mb-md-0
              h3 Informes de errores y correcciones
              p Los ingenieros de control de calidad encuentran muchos tipos de errores en las pruebas de juegos y es su trabajo documentarlos todos. Los datos de la prueba y los errores/problemas identificados se empaquetan en un informe de errores y se envían a los desarrolladores para que los corrijan en una compilación futura.
          
            .col-md-4.mt-4
              figure
                img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen')

    .row
      .col-lg-7.mb-4
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Evaluación y pruebas

      p.mb-5 Este apartado tiene como objetivo comentar las pruebas realizadas en el juego desarrollado. Las pruebas son un elemento fundamental en un desarrollo #[i software] y deben realizarse siempre para evitar fallos no deseados. Existen los siguientes tipos de pruebas: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen')
          
        h4.text-center Pruebas unitarias
        p.text-center Estas pruebas tienen como objetivo verificar la funcionalidad y estructura de cada componente individual de código realizado. Son pruebas a nivel de métodos codificados.


      .col-md.tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img7.png', alt='Texto que describa la imagen')
          
        h4.text-center.texto-negro Pruebas de integración
        p.text-center.texto-negro Su objetivo es comprobar el correcto ensamblaje entre los distintos componentes del código, cubren la funcionalidad establecida y se ajustan, en mayor medida, a los requisitos funcionales.


      .col-md.tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img8.png', alt='Texto que describa la imagen')
          
        h4.text-center Pruebas de sistema
        p.text-center Están destinadas a probar el sistema como un todo y se centran en los requisitos no funcionales como por ejemplo la gestión de recursos, compatibilidad, usabilidad. Suelen estar enfocadas a la gestión de los recursos como el procesador o la memoria. 

      .col-md.tarjeta.color-primario.p-4
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img9.png', alt='Texto que describa la imagen')
          
        h4.text-center.texto-negro Pruebas de aceptación
        p.text-center.texto-negro Se usan para validar que el sistema cumple con el funcionamiento esperado y permitir al usuario del sistema que determine su aceptación sobre la funcionalidad y el rendimiento. 



</template>

<script>
export default {
  name: 'Tema2',
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
