export default {
  global: {
    componenteFormativo: 'NUESTROS SERVICIOS',
    descripcionCurso: '',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Configuración LMS',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de técnicas de pruebas de juegos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Métodos de prueba de juegos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '¿Qué es la automatización de pruebas de juegos?',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: ' ¿Qué hacen los QA <i>testers</i> de juegos?',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: '¿Cómo funciona la prueba de juegos?',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño curricular',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseño gráfico y Guión',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Maquetación y gamificación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Cómo iniciar las pruebas o <i>testing</i> en un videojuego',
      referencia: 'Unity Manual. (s.f.). <i>Unity Test Framework overview.</i>',
      tipo: '[otro]',
      link:
        'https://docs.unity3d.com/Packages/com.unity.test-framework@1.3/manual/index.html',
    },
    {
      tema: '4. Pruebas del sistema',
      referencia: 'Kodeco. (2019). <i>Introduction To Unity Unit Testing</i>',
      tipo: '[otro]',
      link: 'https://www.kodeco.com/9454-introduction-to-unity-unit-testing',
    },
    {
      tema: '4. Pruebas del sistema',
      referencia: 'Unity Learn. (s,f.). <i>Unit 10 - Testing</i>',
      tipo: '[otro]',
      link: 'https://learn.unity.com/tutorial/unit-10-testing',
    },
  ],
  glosario: [
    {
      termino: 'Ad Hoc',
      significado:
        'que es apropiado, adecuado o especialmente dispuesto para un determinado fin',
    },
    {
      termino: 'CPU',
      significado:
        'una unidad central de procesamiento o CPU, es una pieza de hardware que permite que tu computadora interactúe con todas las aplicaciones y programas instalados.',
    },
    {
      termino: '<i>Framework</i>',
      significado:
        'es un esquema o marco de trabajo que ofrece una estructura base para elaborar un proyecto con objetivos específicos, una especie de plantilla que sirve como punto de partida para la organización y desarrollo de <i>software</i>.',
    },
    {
      termino: 'QA',
      significado:
        'un QA <i>(Quality Assurance)</i> o analista QA es el profesional responsable de asegurar la calidad del <i>software</i> y de prevenir fallos en él.',
    },
    {
      termino: '<i>SetUp</i>',
      significado:
        'es una herramienta de los sistemas operativos y los programas informáticos que permite configurar diversas opciones de acuerdo a las necesidades del usuario',
    },
    {
      termino: 'Teastear /<i>testing</i>',
      significado:
        'testear es obtener la información necesaria para mejorar el sistema que se está probando, pero también para mejorar los propios procesos de desarrollo y de pruebas. Hay diferentes objetivos en el <i>testing</i>: Buscar los defectos. Ganar confianza respecto al nivel de calidad.',
    },
    {
      termino: '<i>Test Runner</i>',
      significado:
        'un <i>test runner</i> es una utilidad que nos permite escribir y correr <i>tests</i> para una aplicación. Existen gran variedad de <i>tests runner</i> como por ejemplo mocha.',
    },
    {
      termino: 'UX',
      significado:
        'el diseño UX se refiere al término «diseño de experiencia de usuario», mientras que UI significa «diseño de interfaz de usuario».',
    },
  ],
  referencias: [
    {
      referencia: 'Awad, W. (2021). <i>Game Testing Automation Guidance.</i>',
      link:
        'https://www.theseus.fi/bitstream/handle/10024/505977/Game%20Testing%20Automation%20Guidance.pdf?sequence=2&isAllowed=y',
    },
    {
      referencia:
        'Da Silva Lima, G. et al. (2021). <i>Devops methodology in game development with Unity 3D.</i>',
      link:
        'https://www.ihci-conf.org/wp-content/uploads/2021/07/04_202105C029_Lima.pdf',
    },
    {
      referencia:
        'Koepke, B, Pelletier, B., Adair, D., Jhawar, R., Macaulay, I. & Bielecki, T. (2013). <i>Agile Game Development.</i>',
      link:
        'http://kremer.cpsc.ucalgary.ca/courses/seng403/W2013/papers/05GameDevelopment.pdf',
    },
    {
      referencia:
        'Paduraru, C., Paduraru, C. & Stefanescu, A. (2021). <i>Automated game testing using computer vision methods.</i>',
      link:
        'https://ieeexplore.ieee.org/abstract/document/9680292/authors#authors',
    },
    {
      referencia:
        'Scandinaro, D. (2021). <i>On-Demand QA Testing with Unity Automated QA.</i>',
      link:
        '. https://blog.unity.com/games/on-demand-qa-testing-with-unity-automated-qa',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
