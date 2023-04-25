<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diseño Curricular

    .row.justify-content-center.align-items-center
      .col-6.col-lg-2.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt="alt")      
      .col-lg-10
        p La noción de diseño puede emplearse para nombrar a la delineación de algo (un proyecto, una obra, etc.). Curricular, por su parte, es aquello vinculado a un currículo: un programa de estudios.

        p La idea de diseño curricular, por lo tanto, hace referencia a un proceso que permite organizar y desarrollar un plan educativo. A través de esta estructuración se busca satisfacer las necesidades formativas de los estudiantes.

        p El diseño curricular se plasma en un documento que presenta la estructura del plan de educación, detallando las características y proyectando los alcances de la formación. En este documento se mencionan los objetivos del currículo, las competencias que se buscan desarrollar, los resultados que se persiguen y la certificación que se brinda.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Objetivos de la planificación
    
    .row.justify-content-center.my-5

      p Gracias al diseño curricular, es posible aseverar que la formación es pertinente de acuerdo al grado de formación. Los docentes encuentran en él una guía para llevar adelante la labor pedagógica.

    .row
      .col-lg-7.mb-4
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Puede decirse que el diseño curricular define:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen')
          
        h4.text-center Qué
        p.text-center 

      .col-md.tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img7.png', alt='Texto que describa la imagen')
          
        h4.text-center.texto-negro Cómo
        p.text-center.texto-negro 

      .col-md.tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img8.png', alt='Texto que describa la imagen')
          
        h4.text-center Cuándo
        p.text-center 

      .col-md.tarjeta.color-primario.p-4
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img9.png', alt='Texto que describa la imagen')
          
        h4.text-center.texto-negro Donde
        p.text-center.texto-negro 

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Cómo se realiza el diseño curricular

    p Para poder llevar adelante un diseño curricular se hace necesario tener claro que hay que llevar adelante una serie de tareas como son las siguientes:

    .tarjeta--morada.p-4.mb-5.mt-5
      .row
        .col-lg-5.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img11.svg', alt='Texto que describa la imagen').img-11    

        .col-lg-7
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span a
              | El diagnóstico de problemas y necesidades en cuanto a lo que es el contexto y la situación existente. En concreto, esta labor se compone de tres etapas fundamentales: el estudio de lo que es el marco teórico, la exploración de situaciones reales y la determinación de problemas y necesidades.
            
            li 
              .lista-ol--cuadro__vineta
                span b
              | La modelación del currículum, en la que, por ejemplo, se determinan los contenidos necesarios para alcanzar los objetivos deseados.

            li 
              .lista-ol--cuadro__vineta
                span c
              | La estructuración curricular, donde se elige, por ejemplo, el orden en el que se va a desarrollar el diseño curricular.

            li 
              .lista-ol--cuadro__vineta
                span d
              | La organización para la puesta en práctica, es decir, el establecimiento de medidas para garantizar lo que es la puesta en práctica del proyecto curricular.
            
            li 
              .lista-ol--cuadro__vineta
                span 
              | El diseño de la evaluación curricular, que debe tener como punto de partida lo que son objetivos de tipo terminal.

    .row.mt-5
      p El diseño curricular, en definitiva, es el procedimiento que posibilita la planificación general de las actividades académicas. El currículo, una vez definido, luego se adapta a las condiciones particulares de cada establecimiento educativo, siempre respetando los principios establecidos en el diseño. De esta manera se pretende garantizar que cada uno de los estudiantes pueda desarrollar su potencial, formarse y concluir el proceso educativo preparado para integrarse a un nivel superior o al universo laboral.


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
