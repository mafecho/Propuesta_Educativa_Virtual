<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Utilizando el #[i Framework Test Runner - Unit testing en unity]

    .row.justify-content-center.mb-5
      .col-8.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Texto que describa la imagen')        

      .col-lg-9
        p Se ha decidido crear un solo epígrafe para las pruebas tanto unitarias como de integración dado que, por la naturaleza del propio programa, #[i unity] y de los juegos como #[i software] desarrollado es casi imposible encontrar elementos aislados de código que funcionen sin depender de otros.
        p Es importante mencionar que en este apartado aparte de las pruebas realizadas también se han considerado como pruebas los logs generados durante el desarrollo del proyecto, así como las ejecuciones en el editor como parte de la integración porque al tratarse de un juego, los elementos debían coordinarse a la perfección para no obtener <i>bugs</i> indeseados.

      p De esta manera se subsanan errores que aparecían al producirse excepciones en el código. Para llevar a cabo estas pruebas se ha hecho uso de una funcionalidad implementada por #[i unity] llamada #[i Test Runner] que permite su configuración y ejecución. 


    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img2.png')})`}"
          )
          .bloque-texto-g1__texto.p-3
            p.mb-4 Algo que la mayoría de las veces solemos dejar completamente de lado a la hora de desarrollar nuevas #[i features] en nuestros juegos son, sin duda, los Unit Tests.
            p El #[i unity Test Runner] hace uso de la #[b librería #[i NUnit] que es una librería de pruebas de #[i software] libre para lenguajes .Net.] El #[i Test Runner] permite ejecutar los test tanto en modo editor (edit mode) como en modo de juego (play mode). 

    .row.mb-5
      p Sin embargo, el uso de estas herramientas que proporciona el #[i software] de #[i unity] 3D se deja casi siempre de lado ya sea por poco conocimiento sobre el uso de este #[i framework,] ya que este posee muchas bondades. De esta manera cabe resaltar que la implementación de estos test en nuestros proyectos siempre nos va a demandar un buen gasto de tiempo y esfuerzo extra que no siempre podemos o estamos dispuestos a perder, sumado a la falsa sensación de pérdida de tiempo por estar invirtiendo una parte importante de nuestro trabajo en desarrollar código que ni siquiera pertenece al producto final, puede que el hacer un repaso de algunos de sus pros y contras nos haga verlo de otro modo. Al respecto:

    .row.mb-5
      .col-lg-6
        .tarjeta-morada.p-4
          .row.justify-content-center
            .col-6.col-lg-3.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img3.svg', alt='Texto que describa la imagen').animacion-img-3

          h4.text-center.texto-blanco Ventajas 

          ul.lista-ul--color
            li
              i.fas.fa-plus.color-vineta1
              span.texto-blanco
                | Aplicar test en nuestro código nos da seguridad y confianza en el comportamiento esperado de las lógicas que implementamos.]
            li
              i.fas.fa-plus.color-vineta1
              span.texto-blanco
                | Algo muy importante es que sirve como documentación para nuevos desarrolladores que trabajen en tu código.
            li
              i.fas.fa-plus.color-vineta1
              span.texto-blanco
                | Nos obliga a implementar las cosas enfocándonos siempre a su testeo.
            li
              i.fas.fa-plus.color-vineta1
              span.texto-blanco
                | Nos ayuda a anticipar y localizar posibles <i>bugs</i> de manera más rápida y eficiente.
            li
              i.fas.fa-plus.color-vineta1
              span.texto-blanco
                | Nos convierte en mejores profesionales.



      .col-lg-6
        .tarjeta-azul.p-4
          .row.justify-content-center
            .col-6.col-lg-3.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img3.svg', alt='Texto que describa la imagen').animacion-img-3

            h4.text-center Desventajas 

          ul.lista-ul--color
            li
              i.fas.fa-times.color-vineta2
              | Inversión de tiempo extra de desarrollo (a veces puede llegar a ser demasiado).
            li
              i.fas.fa-times.color-vineta2
              | No siempre es fácil testear todo (por ejemplo, comportamientos de UI).
            li
              i.fas.fa-times.color-vineta2
              | No implementarlos de manera adecuada puede crearnos una falsa seguridad que puede ser peligrosa.

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-secundario.p-3
          .row.justify-content-center
            .col-6.col-lg-2.mt-5
              figure
                img(src='@/assets/curso/temas/tema3/img5.svg', alt='Texto que describa la imagen') 
            .col-lg-10
              p La clave está en mantener el equilibrio que las propias circunstancias de nuestro proyecto nos permitan. No se trata de hacer #[i testing] de todo o de nada, siempre va a ser mejor hacerlo de algunas partes que no hacerlo de nada. 
              p Por ello, creo que es posible buscar siempre un balance que nos permita llevar adelante el desarrollo de nuestro proyecto de manera que encaje en tiempos/planificaciones y, a su vez, tenga en cuenta la implementación de test en la medida de lo posible (un enfoque correcto sería por ejemplo priorizar #[i Unit testing] para aquellas mecánicas que consideremos más importantes o prioritarias).

    .row.mb-5
      .col-lg-7.mb-4
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Configurar #[i Test Runner]

    .row.mb-5
      p Antes de comenzar a desarrollar el código para los respectivos tests, se debe inicialmente configurar #[i Test Runner], que es la herramienta que viene integrada con #[i unity] para gestionar todo lo relacionado con Unit #[i testing] y la cual utiliza el #[i framework NUnit]. Veamos los siguientes pasos:

    .row.my-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bg1

      .row.mb-5
        p #[b Ejercicio práctico:] querido aprendiz, con el fin de iniciar la práctica de los temas que se abordan y las herramientas, le invitamos a desarrollar este ejercicio, atendiendo los siguientes puntos:

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.tarjeta--blanca.text-center.p-4
            b Es momento de abrir su propio scrip
              span.texto-azul  #[i «CheckPointTests»]
              |  y limpiarlo para partir de cero, así:

            .row.justify-content-center.my-5
              .col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema3/img6.svg', alt='Texto que describa la imagen')             

      .row.justify-content-center.mb-5
        .col-6.col-lg-2.mt-3
          figure
            img(src='@/assets/curso/temas/tema3/img7.svg', alt='Texto que describa la imagen').img7-tm3      

        .col-lg-5
          p.mt-3 En este ejercicio, a modo de ejemplo, se abordará la implementación de los siguientes casos de prueba que, aunque por definición no puedan considerarse 100 % tests unitarios, ya que contemplan el testeo de #[i features] más generales, son perfectamente válidos y servirán para ilustrar el desarrollo de tests (queda a criterio propio el plantear todos los casos que estimes necesarios):

        .col-lg-5
          .cajon.color-secundario.p-3
            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check.color-vineta2
                | Caso de prueba para que un #[i CheckPoint] se cree correctamente.
              li
                i.fas.fa-check.color-vineta2
                | Caso de prueba para que un #[i CheckPoint] sea activado por el #[i player] correctamente.     
              li
                i.fas.fa-check.color-vineta2
                | Caso de prueba para que el #[i player], tras morir, sea teletransportado al último #[i CheckPoint] activado.

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.tarjeta--blanca.text-center.p-4
            b Debe iniciar entonces por declarar dentro de la clase, las siguientes variables que son necesarias a lo largo de las pruebas:

            .row.justify-content-center.my-4
              .col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema3/img8.svg', alt='Texto que describa la imagen') 

      .row.mb-5
        p Antes de iniciar a escribir el código del primer caso de prueba conviene señalar la existencia de 2 atributos especiales que van a ser útiles a la hora de implementar sus funciones de test en #[i unity].

      .row.mb-5
        h4 Se trata de 
          span.texto-azul   <i>[SetUp] y [TearDown].</i>

    .row.justify-content-center.mb-5
      .col-6.col-lg-1.my-4
        figure
          img(src='@/assets/curso/temas/tema3/img9.svg', alt='Texto que describa la imagen')

      .col-lg-11
        p
          span.texto-azul <b><i>[SetUp]:</i></b>
          |  este atributo, colocado encima de una de las funciones de su script de tests, específica a #[i unity] que dicha función debe ser ejecutada antes de la ejecución de cada una de las funciones de test normales. 

        p Esto permite, por ejemplo, crear e inicializar objetos comunes a todas las pruebas sin tener que estar realizándose al inicio de cada prueba. Por tanto, empiece por crear la función de #[i SetUp:]

    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema3/img10.svg', alt='Texto que describa la imagen')      

    .row.mb-5
      p En este caso se hace lo siguiente:

    .tarjeta--morada.p-4.mb-5
      .row
        .col-lg-5.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img11.svg', alt='Texto que describa la imagen').img-11    

        .col-lg-7
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span a
              | Instanciar el #[i prefab] del #[i player] en el punto (0, 0, 0) de la escena.
            li 
              .lista-ol--cuadro__vineta
                span b
              | Desactivar la gravedad (esto se hace para facilitar las pruebas, ya que en esta escena de prueba no se cuenta con un suelo).
            li 
              .lista-ol--cuadro__vineta
                span c
              | Instanciar el #[i prefab] del enemigo en un punto alejado al #[i player] (200, 0, 0).
            li 
              .lista-ol--cuadro__vineta
                span d
              | Desactivar la gravedad (por el mismo motivo de antes).

    .row.justify-content-center.mb-5
      .col-6.col-lg-1.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img12.svg', alt='Texto que describa la imagen')

      .col-lg-11
        p
          span.texto-azul <b><i>[TearDown]:</i></b> 
          |  este atributo, colocado encima de una de las funciones del script de tests, específica a #[i unity] que dicha función debe ser ejecutada después de la ejecución de cada una de las funciones de test normales. Esto permite, por ejemplo, destruir o limpiar objetos comunes a todas las pruebas sin tener que estar realizándose al final de cada prueba. Por tanto, debe crear la función de TearDown:

    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema3/img13.svg', alt='Texto que describa la imagen')      

    .row.mb-5
      p En este caso se hace lo siguiente:

    .tarjeta--morada.p-4.mb-5
      .row
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/img14.svg', alt='Texto que describa la imagen').img-14   

        .col-lg-8.mt-5.ps-lg-5
          ol.lista-ol--cuadro
            li.ps-lg-5 
              .lista-ol--cuadro__vineta
                span a
              | Destruir el objeto instanciado del #[i player].
            li.ps-lg-5 
              .lista-ol--cuadro__vineta
                span b
              | Destruir el objeto instanciado del enemigo.
            li.ps-lg-5  
              .lista-ol--cuadro__vineta
                span c
              | Destruir el objeto instanciado del #[i CheckPoint].
            li.ps-lg-5  
              .lista-ol--cuadro__vineta
                span d
              | Limpiar la lista de #[i CheckPoints] en escena.

    .row.mb-5
      p Bien, ya puede empezar a escribir sus 3 casos de prueba.
      p.mt-4 #[b Empecemos con el primero:] la creación correcta de un #[i CheckPoint] en escena.

    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema3/img15.svg', alt='Texto que describa la imagen')      

    .row.mb-5
      p En este caso se hace lo siguiente:


    .tarjeta--morada.p-4.mb-5
      .row
        .col-lg-5.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img16.svg', alt='Texto que describa la imagen').img-11    

        .col-lg-7
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span a
              | Instanciar el #[i prefab] del #[i CheckPoint] en el punto (100, 0, 0) de la escena, para que no esté tocando al #[i player.]
            li 
              .lista-ol--cuadro__vineta
                span b
              | Obtener su componente #[i CheckPoint], que es donde está el código que se quiere probar del juego (producción).
            li 
              .lista-ol--cuadro__vineta
                span c
              | Esperar 0.1 segundos (esto es bastante común hacerlo en los tests cuando se quiere asegurar de darle tiempo a #[i Unity] para que refleje ciertas operaciones en la escena, en este caso la instancia del #[i checkpoint]).
            li 
              .lista-ol--cuadro__vineta
                span d
              | Una vez instanciado el #[i CheckPoint], realizar los siguientes chequeos:
          ul.lista-ul--color
            li.ps-5
              i.fas.fa-plus.color-vineta1
              span
                | El número de objetos en la lista de #[i CheckPoints] en escena debe ser 1.
            li.ps-5
              i.fas.fa-plus.color-vineta1
              span
                | El nuevo #[i CheckPoint] debe estar desactivado.

    .row.mb-5
      p Sobre lo anterior, veamos el siguiente análisis del código:

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/img17.svg', alt='Texto que describa la imagen')

      .tarjeta.color-tarjeta.p-4(x="13%" y="31%" numero="1")
        h4 1. UnityTest
        p Este atributo lo usará en cada una de las funciones de test y le indica a #[i unity] que es uno de los test y que debe ejecutarlo dentro de su Test Suite correspondiente.

      .tarjeta.color-tarjeta.p-4(x="22%" y="35%" numero="2")
        h4 2. heckPointIsCreatedProperly
        p Es el nombre de la función y siempre es recomendable que los nombres de las funciones referentes a sus tests sean lo más claros e intuitivos posible, por tanto no se preocupe si queda un nombre demasiado largo.

      .tarjeta.color-tarjeta.p-4(x="17%" y="40%" numero="3")
        h4 3. IEnumerator
        p Las funciones de test pueden no devolver nada o pueden también devolver un IEnumerator (convirtiéndose en corrutinas). En este caso hemos necesitado que se comporte como corrutina debido a la espera de 0.1 segundos que hacemos en el paso 3 de nuestra lógica.

      .tarjeta.color-tarjeta.p-4(x="16%" y="56%" numero="4")
        h4 4. Assert
        p Como se puede observar en el paso 4 de nuestra lógica, se hace uso de la clase Assert para realizar los diferentes chequeos de nuestro caso de prueba. Una de las funciones más utilizadas es la de AreEqueal(), ya que con ella puede contemplar la mayoría de casos, pero siéntase libre de explorar todas las opciones que ofrece. Por último, recalcar el último parámetro de tipo string que le pasamos a los assertions: sirve para que la consola del #[i Test Runner] dé un mensaje personalizado cuando un determinado Assert NO se ha cumplido.

    .row.mb-5
      p A partir de ahora ya maneja lo básico y necesario para realizar cualquier tipo de test. Así que acabemos de ver los siguientes casos de prueba: 

    .row.mb-5
      b.text-center «La activación correcta de un #[i CheckPoint]» y «El posicionamiento del #[i player] al último #[i CheckPoint] después de morir»

    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema3/img18.svg', alt='Texto que describa la imagen')      

    .row.justify-content-center.my-5
      .col-lg-8
        .cajon.color-secundario.p-4
          .row.justify-content-center
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img19.svg', alt='Texto que describa la imagen') 
            .col-lg-10
              p #[b Nota:] como vemos, dentro de una función de test, podemos perfectamente hacer llamadas a otras funciones de test siempre y cuando tenga sentido para nuestras pruebas.

    .row.mb-5
      .col-lg-7.mb-4
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Ejecutar #[i tests]

      p En este punto, lo único que nos queda es realizar la ejecución de las pruebas. Para ello, tenga en cuenta lo que se indica en el siguiente video:

    .row.justify-content-center.my-5(data-aos="fade-zoom")
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-5
      h4.text-center.texto-azul ¡Disfruta del #[i testing]!



</template>

<script>
export default {
  name: 'Tema3',
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
