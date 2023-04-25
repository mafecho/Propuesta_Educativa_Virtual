<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Creación y configuración del LMS - Moodle

    .row.justify-content-center.align-items-center
      .col-6.col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/imag2.png', alt="alt")      
      .col-lg-8
        p La plataforma virtual educativa para el aprendizaje online fácil de usar, pero no la más simple
        p Es una plataforma digital de gestión del aprendizaje online fácil de usar y polivalente con el que puedes impartir, evaluar y analizar tus cursos de formación online
        p Todo tipo de contenidos: vídeo, audio, tests y mucho más

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Gestiona y centraliza tu formación

    .row.mb-5
      ul.lista-ul--color
        li 
          i.fas.fa-check
          | Plataforma para dar clases online alojada en la nube
        li 
          i.fas.fa-check
          | Intégrala con tu web, ecommerce, sistema de RRHH, etc.
        li 
          i.fas.fa-check
          | Escalable al número de alumnos que tengas
        li 
          i.fas.fa-check
          | Inscribe y archiva a los alumnos de forma individual o masiva
        li 
          i.fas.fa-check
          | Controla los permisos y accesos a los contenidos
        li 
          i.fas.fa-check
          | Válida para formación síncrona o asíncrona






    .row.justify-content-center.align-items-center
      .col-6.col-lg-1.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/img2.png', alt="alt")      
      .col-11
        p Los encargados de las pruebas de control de calidad en un estudio de videojuegos (QA, #[i Quality Assurance]) buscan los problemas y los puntos débiles que se pueden pulir antes de lanzar el producto al público, además, deben asegurarse, a través de diversas técnicas, que aspectos como la conectividad emocional con el juego o el nivel de diversión estén en óptimas condiciones.

    p.mt-3
      A continuación, detallamos algunas de las técnicas más comunes utilizadas por los estudios de videojuegos y los QA #[i testers] especialistas en pruebas de control de calidad de juegos:

    .tarjeta.tarjeta--azul.p-4.tema1-bg1
      SlyderA(tipo="b").p-5
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Pruebas de Funcionalidad
            p La función de esta técnica de pruebas de juegos es comprobar si el videojuego funciona de acuerdo con las especificaciones. Algunos de los problemas que sigue la técnica de pruebas de funcionalidad son los gráficos genéricos, la interfaz, la estabilidad o los problemas mecánicos. Además, con esta técnica se pueden resolver errores como el freezing, el crashing o los bloqueos de progresión.

            p Los testers del juego están atentos a cualquier fallo gráfico en la interfaz, como gráficos ausentes, colores faltantes, problemas de ubicación o problemas de animación y recortes. Después de identificar todos los fallos y errores, los #[i testers] del juego hacen una lista y los envían a los desarrolladores del juego para que los arreglen. Una vez que los desarrolladores resuelven los problemas, envían el juego al equipo de control de calidad para que lo vuelvan a probar.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img3.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Pruebas Combinatorias
            p Con esta técnica de pruebas de juegos, se puede comprobar inicialmente cuántas pruebas necesita el juego. La técnica de pruebas combinatorias analiza y escudriña todas las salidas y entradas del juego para que pueda obtener una imagen clara sobre las distintas combinaciones y resultados concebibles. Este hallazgo tiene importantes implicaciones para las pruebas, ya que sugiere que probar combinaciones de parámetros puede proporcionar una detección de fallos muy eficaz.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Pruebas Ad Hoc
            p Este método no es algo formal, sino que, por el contrario, todos los procedimientos se realizan de forma aleatoria. Esta técnica de pruebas de juego también se denomina “adivinación de errores” y consiste en detectar los fallos mediante un enfoque aleatorio. Por lo tanto, no es necesaria ninguna documentación especial, como documentos de requisitos, planes de pruebas, casos de prueba, ni una planificación adecuada de las pruebas en cuanto a su calendario y orden de realización.

            p Dado que las pruebas ad hoc son más bien una técnica de prueba “salvaje” que no tiene que estar estructurada, la recomendación general es que se realicen después de la ejecución del conjunto de pruebas correspondiente. Otro punto de vista es que se puede realizar cuando no se pueden realizar pruebas detalladas por falta de tiempo.
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Pruebas de Compatibilidad
            p Esta técnica de prueba de juegos te ayuda a validar si la interfaz de usuario es compatible con todos los tamaños de pantalla en los que se puede jugar. Cada dispositivo es único y puede presentar diferentes problemas, como el uso del hardware, los detalles gráficos, el tamaño de la pantalla o las aplicaciones de fondo. 

            p Tras la verificación, el videojuego debe cumplir los requisitos esenciales del #[i software], el hardware y los gráficos. Realizar las pruebas de compatibilidad en dispositivos físicos es la mejor manera de determinar el rendimiento con precisión y conocer la experiencia del usuario final.
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Pruebas de Cleanroom
            p La técnica de pruebas de cleanroom válida y mejora el rendimiento de la consistencia y la fiabilidad del #[i software] de juegos. Mediante el uso de las pruebas de cleanroom, se puede identificar la causa principal detrás de los <i>bugs</i> y pequeños errores. 

            p El plan es que los #[i testers] de juegos creen pruebas que jueguen al juego igual que los jugadores. Lo que significa que les resultará más fácil averiguar qué hacen los jugadores.
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Pruebas de Regresión
            p El propósito de esta técnica de prueba del juego es comprobar de nuevo si las funciones del juego operan de forma óptima, lo que ayuda a controlar la calidad que es tan importante para la experiencia de los jugadores. En la práctica, los #[i testers] de juegos vuelven a comprobar el juego y comparan los resultados actuales con los obtenidos en las pruebas. Quieren ver si se han producido nuevos errores debido a los cambios y ver si hay algún fallo antiguo.
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen')


    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Métodos de prueba de juegos

    p Aquí es donde entramos en uno de los puntos más relevantes y nos centramos en los diferentes tipos de metodologías de prueba de control de calidad de juegos disponibles.

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Pruebas de funcionalidad del juego

    .row.mb-5
      p Las pruebas funcionales son una actividad que tiene como objetivo determinar si un juego funciona de acuerdo con las especificaciones e identificar cualquier error o problema que pueda afectar negativamente la experiencia del jugador. Esto se aplica tanto a las pruebas de juegos móviles como a las de otras plataformas, incluidas PC, consolas, web y VR/AR. 

      p Podemos ordenar las pruebas en múltiples subtipos:

    .tarjeta.tarjeta--morada.p-4
      SlyderA(tipo="a")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-6.col-lg-2.mb-5
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')

          .col-md-9.mb-4.mb-md-0
            .tarjeta--blanca.bordered 
              .tabla-a.bordered 
                table
                  thead
                  tbody
                    tr.text-center
                      td #[b Subtipos]
                      td #[b Descripción]
                      td #[b Cuándo se necesita]

                  tbody
                    tr
                      td #[b Pruebas de juego de interoperabilidad]
                      td Se utiliza para probar cómo un juego interactúa con otras aplicaciones. Los probadores buscan cualquier problema de compatibilidad, incluida la inaccesibilidad de las funciones, el bajo rendimiento y los retrasos en la comunicación.
                      td Se utiliza principalmente para juegos multijugador y aquellos que hacen uso de funciones avanzadas del dispositivo (por ejemplo, enlace ascendente de #[i Internet, Bluetooth,] cámara, etc.).

        .row.justify-content-center.align-items-center.my-lg-4
          .col-6.col-lg-2.mb-5
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')

          .col-md-9.mb-4.mb-md-0
            .tarjeta--blanca.bordered 
              .tabla-a.bordered 
                table
                  thead
                  tbody
                    tr.text-center
                      td #[b Subtipos]
                      td #[b Descripción]
                      td #[b Cuándo se necesita]

                  tbody
                    tr.text-center
                      td #[b Pruebas de juegos de regresión]
                      td Este ciclo se aplica después de las principales actualizaciones de código para asegurarse de que la actualización no haya afectado negativamente la funcionalidad existente (por ejemplo, rompiendo una función, agregando numerosos errores nuevos, etc.). El objetivo es asegurarse de que el código aún funcione.
                      td Esta es una práctica muy común tanto durante el desarrollo (cuando se crean nuevas compilaciones) como en el período posterior al lanzamiento, cuando se implementan el mantenimiento y las actualizaciones. Puede automatizar muchas de estas pruebas.


        .row.justify-content-center.align-items-center.my-lg-4
          .col-6.col-lg-2.mb-5
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')

          .col-md-9.mb-4.mb-md-0
            .tarjeta--blanca.bordered 
              .tabla-a.bordered 
                table
                  thead
                  tbody
                    tr.text-center
                      td #[b Subtipos]
                      td #[b Descripción]
                      td #[b Cuándo se necesita]

                  tbody
                    tr
                      td #[b Pruebas de juegos de humo]
                      td La prueba de humo se trata de verificar la estabilidad después de una actualización de código. Sin embargo, tiende a ser una evaluación realmente simple, verificando cosas básicas como si el juego se inicia, si la interfaz de usuario sigue respondiendo. Puede ser realizado tanto por desarrolladores como por probadores.
                      td La prueba de humo tiende a realizarse justo antes de la prueba de regresión, por lo que podemos decir que es igual de común y esencial para todos los proyectos. Se considera una buena práctica para realizar todos los días del proyecto.

        .row.justify-content-center.align-items-center.my-lg-4
          .col-6.col-lg-2.mb-5
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')

          .col-md-9.mb-4.mb-md-0
            .tarjeta--blanca.bordered 
              .tabla-a.bordered 
                table
                  thead
                  tbody
                    tr.text-center
                      td #[b Subtipos]
                      td #[b Descripción]
                      td #[b Cuándo se necesita]

                  tbody
                    tr
                      td #[b Pruebas de juego de localización]
                      td Este método tiene como objetivo garantizar que un juego sea totalmente utilizable y agradable para los jugadores de diferentes países y regiones. En primer lugar, todas las mismas características y funcionalidades deben ser accesibles en diferentes ubicaciones (a menos que se planifique lo contrario). En segundo lugar, el contenido debe adaptarse a los idiomas y culturas donde se presenta.
                      td Este tipo de prueba es vital si planeas lanzar tu juego en varios idiomas, o si planeas hacer que el contenido esté disponible en diferentes regiones. Por lo tanto, es preferible que los evaluadores tengan un amplio conocimiento de los idiomas/culturas asociados antes de comenzar a evaluar el #[i software].

        .row.justify-content-center.align-items-center.my-lg-4
          .col-6.col-lg-2.mb-5
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')

          .col-md-9.mb-4.mb-md-0
            .tarjeta--blanca.bordered 
              .tabla-a.bordered 
                table
                  thead
                  tbody
                    tr.text-center
                      td #[b Subtipos]
                      td #[b Descripción]
                      td #[b Cuándo se necesita]

                  tbody
                    tr
                      td #[b Pruebas de juego de control de acceso de seguridad]
                      td Una práctica muy importante que verifica si existen lagunas o puertas de enlace no autorizadas que puedan permitir que alguien acceda al #[i backend] del juego o a elementos/características que de otro modo estarían restringidas. Por ejemplo, algunos jugadores intentan piratear juegos para obtener recompensas o dinero gratis en el juego, hacerse invencibles, etc. y el control de acceso lo impide o al menos reduce la probabilidad.
                      td Aunque esta forma de prueba rara vez conduce a cambios que afecten la experiencia del usuario o que sean incluso perceptibles, se recomienda realizarla al menos una vez antes del lanzamiento y cada actualización posterior al lanzamiento. Puede ser realizado por ingenieros generales de control de calidad del juego o probadores de pluma (penetración) experimentados.

        .row.justify-content-center.align-items-center.my-lg-4
          .col-6.col-lg-2.mb-5
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')

          .col-md-9.mb-4.mb-md-0
            .tarjeta--blanca.bordered 
              .tabla-a.bordered 
                table
                  thead
                  tbody
                    tr.text-center
                      td #[b Subtipos]
                      td #[b Descripción]
                      td #[b Cuándo se necesita]

                  tbody
                    tr
                      td #[b Pruebas de juego de aceptación del usuario]
                      td Esta es una de las últimas etapas de prueba antes de lanzar un juego en producción. A veces, se lleva a cabo como una prueba beta, atrayendo a jugadores fuera del equipo de desarrollo. Rara vez se encuentran grandes problemas, por lo que la atención se centra principalmente en pulir los errores menores restantes y realizar pequeñas mejoras en la experiencia del usuario.
                      td Al involucrar a probadores beta externos, puede obtener una nueva perspectiva sobre la experiencia del jugador y recopilar comentarios valiosos sobre posibles mejoras que el equipo de desarrollo no conocía o no prestó suficiente atención. Por ejemplo, las pruebas beta de juegos móviles pueden atraer a un grupo de edad con ideas y deseos únicos que su equipo de pruebas de adultos no tuvo en cuenta.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3  ¿Qué es la automatización de pruebas de juegos?

    .row.my-5
      p La automatización se da en dos enfoques: en el control de calidad del juego y el otro es la prueba manual. Con la automatización, ciertas pruebas de rendimiento se pueden realizar muchas veces seguidas sin la participación del evaluador, esto ahorra tiempo y hace que sea mucho más probable detectar errores.
      p Aunque este enfoque es más conveniente que pedirles a los probadores que completen los mismos niveles muchas veces de forma manual, es bastante difícil crear herramientas de automatización adaptadas a una aplicación individual. 

    .row.justify-content-center.mb-4
      .col-lg-8
        .cajon.color-secundario.p-4
          .row.justify-content-center
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img10.svg', alt='Texto que describa la imagen') 
            .col-lg-10
              p Según una encuesta de empresas de desarrollo de juegos, la mayoría prefiere probar manualmente sus juegos, citando la falta de recursos y tiempo para crear #[i software] de automatización.         

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4  ¿Qué hacen los QA #[i testers] de juegos?

    .row.my-5
      p Muchos jóvenes sueñan con convertirse en probadores de juegos porque pueden jugar todo el día, pero esto solo rasca la superficie de las responsabilidades del puesto. Aparte de revisar la mecánica del juego, tienen tareas menos románticas y dinámicas como:

    .tarjeta--morada.p-4
      .row
        .col-lg-5.mb-4
          figure
            img(src='@/assets/curso/temas/tema1/img11.svg', alt='Texto que describa la imagen').img-11    

        .col-lg-7
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span a
              | Navegación y muestreo de todas las opciones del menú.
            li 
              .lista-ol--cuadro__vineta
                span b
              | Ejecución de análisis de rendimiento y CPU.
            li 
              .lista-ol--cuadro__vineta
                span c
              | Muestreo de todas las opciones de personalización.
            li 
              .lista-ol--cuadro__vineta
                span d
              | Fallar intencionalmente en el juego y probar obstáculos.
              li 
              .lista-ol--cuadro__vineta
                span e
              | Comprobación y análisis de las especificaciones del sistema.
            li 
              .lista-ol--cuadro__vineta
                span f
              | Compilar informes y completar formularios de comentarios.
            li 
              .lista-ol--cuadro__vineta
                span g
              | Ejecución de scripts de prueba y casos de prueba para aplicaciones de juegos.

    .row.my-5
      p Como se puede observar, hay muchas repeticiones involucradas en las pruebas de funcionalidad del juego y los expertos tienen que dedicar gran parte de su tiempo a otras tareas como hacer informes y trabajar con código y scripts. Para cualquiera que esté considerando este tipo de trabajo, no solo debe amar los juegos, sino también estar preparado para verlos desde un punto de vista analítico y constructivo.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5  ¿Cómo funciona la prueba de juegos?

    .row.my-5
      p Como mencionamos anteriormente, las pruebas de juegos implican más que solo iniciar un juego y jugarlo de principio a fin para asegurarse de que funcione sin problemas. Hay docenas de complejidades en el proceso de prueba del juego, así que echemos un vistazo más de cerca.

    .row
      .col-lg-7.mb-4
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Etapas de la prueba del juego

      p.mb-5 La estructura general del proceso de control de calidad es simple, esto es:

      .col-lg-5.my-4
        figure
          img(src='@/assets/curso/temas/tema1/img12.svg', alt='Texto que describa la imagen')      

      .col-lg-7
        p Sin embargo, #[b ¿dónde encaja la revisión de control de calidad en el gran esquema de desarrollo?] Durante las fases iniciales de desarrollo (planificación y producción), los ingenieros de control de calidad tienden a tener muy poca participación. Estas etapas son manejadas principalmente por gerentes de proyecto, expertos en desarrollo comercial y desarrolladores. Aun así, se les puede pedir comentarios sobre cosas como la lógica y el flujo del juego, el diseño de UX y el diseño de interacción.

        .bloque-texto-f.color-secundario.pt-4.px-4.mt-5
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/temas/tema1/img13.svg', alt='Texto que describa la imagen')

          p.text-regular.bloque-texto-f__texto.mb-3 #[b La mayor parte del trabajo realizado por los ingenieros comienza cuando está lista una compilación jugable de la aplicación. Esto a veces se denomina prueba alfa de videojuegos.] 
          p.text-regular.bloque-texto-f__texto #[b La revisión se lleva a cabo dentro de los límites de una empresa, con el objetivo de solucionar la mayoría de los problemas y brindar una experiencia de juego completa y de alta calidad]

      p Algunas compañías optan por agregar también juegos de prueba beta al expediente. Con este enfoque, se pide a personas ajenas a la empresa que realicen una vista previa y una prueba beta de los juegos y lanzamientos de PC en otras plataformas (las consolas también son comunes). Esto brinda una comprensión mucho mejor de la impresión general que se puede esperar de los jugadores que la que una empresa podría obtener de unos pocos ingenieros de control de calidad.

    separador
    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6  Métricas clave de las pruebas funcionales de control de calidad

    .row.my-5
      p La retroalimentación sobre la calidad del juego no es algo formulado ampliamente como "El juego funciona sin problemas". Incluye cifras concretas, estadísticas y terminología que ofrece información mucho más útil.
      p Repasemos algunas de las métricas clave de control de calidad del juego:

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img14.svg')})`}")
            .tarjeta-flip__contenido.p-3.p-xl-3
              .row.justify-content-center
                .col-6.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img15.png', alt='Texto que describa la imagen') 
              h4.text-center Eficacia de la prueba
              p.text-center Esta métrica se recopila en función de docenas de otras medidas, incluida la cantidad de pruebas realizadas, la cantidad de errores encontrados/corregidos y la cantidad de problemas que persisten después de la corrección. 

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img16.svg')})`}")
            .tarjeta-flip__contenido.p-3.p-xl-3
              .row.justify-content-center
                .col-6.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img17.png', alt='Texto que describa la imagen') 
              
              h4.text-center Variables económicas
              p.text-center Esta métrica se refiere al costo general de las pruebas y el costo por corrección de errores, la variación del costo planificado y real, y la diferencia entre el tiempo planificado y el tiempo real.
              
      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img18.svg')})`}")
            .tarjeta-flip__contenido.p-3.p-xl-3
              .row.justify-content-center
                .col-6.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img19.png', alt='Texto que describa la imagen')               
                    
              h4.text-center Métricas del equipo
              p.text-center En este caso, se mide el trabajo del equipo de pruebas, tanto como unidad única como individualmente.

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img20.svg')})`}")
            .tarjeta-flip__contenido.p-3.p-xl-3
              .row.justify-content-center
                .col-6.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img21.png', alt='Texto que describa la imagen')               
             
              h4.text-center Variables económicas          
              p.text-center Los cambios aplicados durante las pruebas se analizan para determinar cuántos problemas se solucionaron, qué nuevos problemas surgieron y cuántos, y otros cambios estadísticamente significativos a lo largo del tiempo.

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img22.svg')})`}")
            .tarjeta-flip__contenido.p-3.p-xl-3
              .row.justify-content-center
                .col-6.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img23.png', alt='Texto que describa la imagen')               
              
              h4.text-center Y muchos otros            
              p.text-center Dependiendo de a quién le pregunte, puede haber hasta cientos de métricas que una empresa registra y analiza.

    separador
    #t_1_7.titulo-segundo.color-acento-contenido
      h2 1.7  Informes de errores

    .row.mb-5.justify-content-center
      .col-5.col-lg-1.my-3
        figure
          img(src='@/assets/curso/temas/tema1/img24.svg', alt='Texto que describa la imagen')     

      .col-lg-11
        p Los informes de errores son una parte indeleble de la revisión de control de calidad y representan la información/los comentarios recopilados en función de las pruebas de los ingenieros que se pueden utilizar para realizar mejoras adicionales.
        p Un informe de error tradicional incluirá los siguientes detalles:

    .row.mb-5.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img25.svg', alt='Texto que describa la imagen')       


    separador
    #t_1_8.titulo-segundo.color-acento-contenido
      h2 1.8  Tipos principales de métodos de prueba de juegos

    .row.my-5
      p Cada empresa tiene sus propias percepciones sobre qué pruebas son necesarias para un juego, y la lista incluso puede variar de un proyecto a otro. Aun así, podemos delinear las pruebas más comunes, dividiéndolas en funcionales (pruebas de funcionalidad del juego) y no funcionales (asociadas con el rendimiento general y UX), veamos esto de una manera más detallada:

    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.mb-5
          .tabla-b__header.color-acento-contenido
            h4.mb-0 Principales métodos de testing
          table
            tr.tr1
              td.text-center Pruebas funcionales
              td.text-center Pruebas no funcionales
            tr.tr2
              td.ps-4 Componente/módulo (comprobación del rendimiento de las unidades de #[i software] más pequeñas).
              td.ps-4 Rendimiento (velocidad de carga del juego en tiempo real).
            tr
              td.ps-4 Integración (encontrar defectos en interfaces e interacciones de componentes).
              td.ps-4 Carga/Estrés (comprobación del rendimiento en condiciones de gran actividad/tráfico de usuarios).
            tr.tr2
              td.ps-4 Humo (determinando la estabilidad de construcción).
              td.ps-4 Instalación (qué tan bien se guarda el juego en diferentes dispositivos).
            tr
              td.ps-4 Regresión (verificación de correcciones de errores).
              td.ps-4 Usabilidad (conveniencia de los mecanismos de juego).
            tr.tr2
              td.ps-4 Localización (verificación de la consistencia del contenido traducido).
              td.ps-4 Recuperación (cómo funciona la aplicación después de fallar).
            tr
              td.ps-4 Seguridad y control de acceso (identificación de vulnerabilidades y verificación de permisos de usuarios).
              td.ps-4 

    separador
    #t_1_9.titulo-segundo.color-acento-contenido
      h2 1.9  Cómo funcionan las pruebas en diferentes plataformas

    .row.my-5
      p Los juegos a menudo se lanzan en varias plataformas a la vez e incluso dentro del alcance de una plataforma, los evaluadores deben asegurarse de que todo funcione en diferentes dispositivos. Por lo tanto, hay muchas peculiaridades en lo que respecta a la revisión de control de calidad en diferentes plataformas, esto se entenderá de manera más detallada a continuación:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="PC / Ordenador Personal" :icono="require('@/assets/curso/temas/tema1/img26.png')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 PC / Ordenador Personal
            p Los dispositivos de escritorio tienden a tener más potencia y más flexibilidad en términos de resolución de pantalla/gráficos. Por lo tanto, si un juego se crea con varias opciones de personalización y optimización en mente, gran parte del trabajo de prueba del juego de PC se centra en asegurarse de que cada jugador con el hardware compatible con el juego pueda elegir las opciones de personalización (o configurarlas automáticamente) para aprovechar al máximo la experiencia.
            p Además, los juegos de escritorio a menudo aprovechan los teclados grandes al admitir docenas de combinaciones de teclas. El trabajo de un probador de juegos de computadora es asegurarse de que estos comandos funcionan de manera consistente en computadoras con diferentes nombres y composiciones de teclas (por ejemplo, dispositivos macOS, Linux y Windows).
        
          .col-md-4.mt-5
            figure
              img(src='@/assets/curso/temas/tema1/img27.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Consola" :icono="require('@/assets/curso/temas/tema1/img28.png')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Consola
            p Los dos aspectos únicos más importantes de la revisión por parte de un probador de consolas de juegos son: 1) garantizar el cumplimiento y la compatibilidad con los estándares de los fabricantes de consolas; 2) brindar una experiencia de juego uniforme en todas las plataformas y generaciones de consolas. En el primer caso, Xbox, Sony y Nintendo tienen pautas estrictas sobre los parámetros y el contenido de los juegos que se pueden ejecutar en su plataforma, por lo que los evaluadores deben asegurarse de que el producto cumpla con todos los requisitos.
            p En lo que respecta a la jugabilidad multiplataforma y multi generacional, recientemente hemos visto un ejemplo de trabajo deficiente por parte de un probador de videojuegos de PlayStation con el lanzamiento de Cyberpunk 2077 en PS4. Los desarrolladores tienen un trabajo muy difícil para asegurarse que su aplicación se ejecute tanto en las consolas de generación anterior más débiles, como en la próxima generación, sin mencionar los lanzamientos multiplataforma que son varias veces más complejos.
            p A su vez, un probador de juegos funcional puede pasar meses eliminando los errores y problemas de rendimiento que surgen antes y después del lanzamiento.
        
          .col-md-4.mt-5
            figure
              img(src='@/assets/curso/temas/tema1/img29.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Móvil" :icono="require('@/assets/curso/temas/tema1/img30.png')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Móvil
            p Una de las mayores dificultades en el desarrollo para dispositivos móviles es hacer uso del espacio de pantalla limitado, por lo que cualquier persona que pruebe juegos móviles de AB debe trabajar duro para verificar que los jugadores puedan acceder a todas las funciones del juego incluso en las pantallas de teléfonos inteligentes más pequeñas.
            p Otra peculiaridad de estas aplicaciones es que suelen tener funciones multijugador y de redes sociales, que son notoriamente difíciles de desarrollar correctamente. Por lo tanto, las pruebas de carga de juegos móviles y la evaluación multiplataforma son parte integral de la experiencia de control de calidad móvil tradicional.
            p Por último, es más probable que las aplicaciones móviles utilicen código y elementos de fuente abierta que otras plataformas, lo que las deja vulnerables a piratas informáticos y actores malintencionados. Los desarrolladores a menudo desconocen estos problemas, pero el probador de control de calidad del juego móvil debe estar atento para encontrar y cubrir cualquier vulnerabilidad.
        
          .col-md-4.mt-5
            figure
              img(src='@/assets/curso/temas/tema1/img31.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="VR/AR/MR" :icono="require('@/assets/curso/temas/tema1/img32.png')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 VR/AR/MR
            p Las aplicaciones inmersivas presentan desafíos únicos para los probadores, pero que se pueden superar. Por ejemplo, el elemento de movimiento de la mayoría de los juegos de realidad virtual puede causar mareos y mareos en algunos jugadores, lo que los desarrolladores a menudo no tienen en cuenta. 
            p Además de eso, quienes prueban los juegos de realidad virtual deben asegurarse de que el juego transmita adecuadamente las recomendaciones de seguridad, como despejar el área donde el usuario está jugando. De lo contrario, existe la posibilidad de que se lastimen.
        
          .col-md-4.mt-3
            figure
              img(src='@/assets/curso/temas/tema1/img33.png', alt='Texto que describa la imagen')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
