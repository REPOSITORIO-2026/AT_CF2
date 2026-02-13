export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción a los sistemas productivos agropecuarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición y componentes de un sistema productivo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Variables clave en el monitoreo agrícola',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Importancia de la caracterización de sistemas productivos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Papel de la sostenibilidad en los sistemas productivos modernos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Variables en sistemas productivos y su monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Importancia de las variables en los sistemas productivos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación de variables en sistemas productivos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Monitoreo de variables en sistemas productivos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Estrategias de monitoreo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Beneficios del monitoreo de variables',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Retos en el monitoreo de variables',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Automatización en el monitoreo de sistemas productivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Introducción a la automatización en la agricultura',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Componentes de un sistema automatizado',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Modelos de Implementación de la Automatización',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ventajas de la automatización en el monitoreo',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Retos en la implementación de la automatización',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Impacto de la automatización en la sostenibilidad',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de variabilidad espacial y temporal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Variabilidad espacial y temporal en la agricultura',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Concepto de variabilidad espacial y temporal',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Impacto de la variabilidad espacial y temporal en los sistemas productivos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Estrategias de manejo específico por sitio (MSS)',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Uso de tecnologías para la gestión de la variabilidad',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Beneficios de la gestión de la variabilidad',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas y métodos de análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Importancia de la planificación basada en datos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Modelos de gestión integrada de recursos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Optimización de recursos en sistemas productivos automatizados',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Aplicación práctica del monitoreo y automatización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Estudios de caso: implementación exitosa de sistemas automatizados',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Monitoreo de variables y análisis de resultados',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Vigilancia tecnológica y GNSS en sistemas productivos',
            hash: 't_6_3',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/232100_CF02_DU.pdf',
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
  global: {
    Name: 'Automatización y monitoreo de sistemas productivos agropecuarios',
    Description:
      'Este componente ofrece una introducción comprehensiva al modelamiento y gestión de datos para sistemas de inteligencia artificial. Abarca los fundamentos de estructuras de datos, técnicas de calidad y tratamiento, sistemas de gestión de bases de datos y conceptos básicos de IA. Proporciona las bases teóricas necesarias para comprender cómo los datos se transforman en información valiosa para modelos de IA.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
}
