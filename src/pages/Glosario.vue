<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Agricultura de precisión',
          significado:
            'Sistema de gestión agrícola que utiliza tecnologías como GPS, sensores y datos geoespaciales para optimizar el uso de insumos y maximizar la productividad y sostenibilidad.',
        },
        {
          termino: 'AquaCrop',
          significado:
            'Modelo desarrollado por la FAO para simular la productividad del agua en cultivos, optimizando el uso de este recurso en diferentes condiciones climáticas.',
        },
        {
          termino: 'Automatización agrícola',
          significado:
            'Implementación de sistemas tecnológicos, como sensores IoT y plataformas SCADA, para monitorear y controlar automáticamente los procesos productivos.',
        },
        {
          termino: 'Gestión integrada de recursos',
          significado:
            'Enfoque coordinado para administrar agua, suelo, energía y otros insumos en un sistema productivo, buscando equilibrar la productividad con la sostenibilidad.',
        },
        {
          termino: 'GNSS  (Sistema Global de Navegación por Satélite)',
          significado:
            'Tecnología que proporciona datos de ubicación y tiempo precisos, utilizada en la agricultura para siembra y aplicación de insumos con precisión.',
        },
        {
          termino: 'IoT (Internet <em>of Things</em>)',
          significado:
            'Red de dispositivos interconectados que recopilan y comparten datos en tiempo real, permitiendo el monitoreo y la gestión de variables clave en la agricultura.',
        },
        {
          termino: 'LiteFarm',
          significado:
            'Plataforma de gestión agrícola de código abierto que ayuda a los productores a tomar decisiones informadas sobre la salud de su finca y la sostenibilidad.',
        },
        {
          termino: 'Manejo Específico por Sitio (MSS)',
          significado:
            'Estrategia agrícola que ajusta las prácticas de manejo a las condiciones particulares de cada zona dentro de una parcela, optimizando recursos como agua y fertilizantes.',
        },
        {
          termino: 'NDVI (Índice de Vegetación de Diferencia Normalizada)',
          significado:
            'Índice que mide la salud de la vegetación usando datos de luz reflejada, indicando áreas con estrés hídrico o deficiencia de nutrientes.',
        },
        {
          termino: 'Sensores multiespectrales',
          significado:
            'Dispositivos que capturan datos en diferentes longitudes de onda, utilizados principalmente en drones para evaluar la salud de los cultivos mediante índices de vegetación.',
        },
        {
          termino: 'SIG (Sistemas de Información Geográfica)',
          significado:
            'Herramientas que permiten recopilar, analizar y representar datos espaciales, utilizados para el mapeo de variabilidad en suelos y cultivos.',
        },
        {
          termino: 'Sistema SCADA',
          significado:
            'Plataforma de <em>software</em> que supervisa, controla y adquiere datos en tiempo real, utilizada en sistemas agrícolas para optimizar operaciones como el riego y la climatización.',
        },
        {
          termino: 'Sostenibilidad agrícola',
          significado:
            'Prácticas agrícolas que buscan satisfacer las necesidades actuales de producción sin comprometer la capacidad de las generaciones futuras para satisfacer las suyas.',
        },
        {
          termino: 'Variabilidad espacial',
          significado:
            'Diferencias en las propiedades del suelo, clima y otros factores dentro de una parcela agrícola, que afectan el rendimiento de los cultivos.',
        },
        {
          termino: 'Variabilidad temporal',
          significado:
            'Cambios en las condiciones agroclimáticas o del suelo a lo largo del tiempo, como variaciones estacionales en temperatura y precipitación.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
