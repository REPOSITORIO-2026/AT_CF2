<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: 'Internet de las cosas (IoT) en agricultura',
          referencia:
            '<em>Smart farming with drones & IoT precision sensors.</em> (2024, noviembre 5). Farmonaut®.',
          tipo: 'Página Web',
          link:
            'https://farmonaut.com/precision-farming/revolutionizing-agriculture-how-iot-and-drones-are-driving-precision-farming-for-sustainable-crop-yields/ ',
        },
        {
          tema: 'Automatización con sistemas SCADA',
          referencia:
            'U.S. Government Accountability Office. (s/f). Precision agriculture: Benefits and challenges for technology adoption and use. Gao.gov.',
          tipo: 'Página Web',
          link: 'https://www.gao.gov/products/gao-24-105962',
        },
        {
          tema: 'Drones en la agricultura',
          referencia:
            '<em>How IoT drives data-driven precision farming.</em> (2024, octubre 3). Farmonaut®.',
          tipo: 'Página Web',
          link:
            'https://farmonaut.com/precision-farming/revolutionizing-agriculture-how-data-driven-precision-farming-and-iot-are-optimizing-crop-yields-and-sustainability/',
        },
        {
          tema: 'GNSS en la agricultura',
          referencia:
            'Metternicht, G. (n.d.). <em>Use of remote sensing and GNSS in precision agriculture.</em> [Documento PDF]. Unoosa.org ',
          tipo: 'Documento Técnico',
          link:
            'https://www.unoosa.org/documents/pdf/psa/activities/2006/zambia/presentations/04-01-01.pdf',
        },
        {
          tema: 'Gestión integrada de fincas',
          referencia: 'Edu.co. [Documento PDF].',
          tipo: 'Documento sobre Herramientas de gestión',
          link:
            'https://repositorio.unibague.edu.co/entities/publication/80fffeba-5ef1-4896-b721-e56c29b32bfa',
        },
        {
          tema: 'Gestión eficiente del agua con AquaCrop-OS',
          referencia:
            'Foster, T., Brozović, N., Butler, A., Neale, C., Raes, D., Steduto, P., Fereres, E., & Hsiao, T. (2017). AquaCrop-OS: An open source version of FAO’s crop water productivity model. <em>Agricultural Water Management</em>, 181, 18–22. [Simulador Web].',
          tipo: 'Simulador',
          link: 'https://doi.org/10.1016/J.AGWAT.2016.11.015',
        },
        {
          tema: 'Simulador CropSyst para manejo de cultivos',
          referencia: '<em>CropSyst.</em> (n.d.). [Simulador Web]. Fao.org.',
          tipo: 'Simulador',
          link:
            'https://www.fao.org/land-water/land/land-governance/land-resources-planning-toolbox/category/details/en/c/1236450/',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
