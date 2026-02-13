<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row bg4 align-items-center my-5">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center align-items-center mb-4">
            <div class="col-lg-7 my-3">
              <p>
                En un entorno agrícola y pecuario en constante evolución, la
                incorporación de tecnologías avanzadas es clave para enfrentar
                los desafíos de sostenibilidad, eficiencia y productividad. El
                componente de automatización y monitoreo de sistemas productivos
                agropecuarios responde a estas necesidades, proporcionando a los
                aprendices las herramientas teóricas y prácticas necesarias para
                implementar sistemas automatizados de adquisición y gestión de
                datos.
              </p>
              <div class="bg1 b-dash p-3 brad">
                <p class="mb-0">
                  Este componente se enfoca en la caracterización de sistemas
                  productivos y el monitoreo de variables críticas, como
                  temperatura, humedad, precipitación y calidad del suelo. A
                  través de tecnologías como sensores IoT, plataformas SCADA y
                  <em>software</em> de análisis de datos, se busca optimizar
                  cada fase del proceso productivo, desde la siembra hasta la
                  cosecha y postcosecha. Estas herramientas no solo permiten la
                  recolección de datos en tiempo real, sino también la toma de
                  decisiones informadas que mejoren el rendimiento y reduzcan el
                  impacto ambiental.
                </p>
              </div>
            </div>
            <div class="col-lg-5 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/4.png"
                alt=""
              />
            </div>
          </div>
          <div class="row justify-content-center mb-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/5.png"
                alt=""
              />
            </div>
            <div class="col-lg-8 my-lg-0 my-3">
              <p>
                El monitoreo automatizado facilita la detección temprana de
                problemas, como deficiencias hídricas o condiciones climáticas
                adversas, y permite ajustar las estrategias productivas de
                manera oportuna. Además, este enfoque promueve la agricultura de
                precisión, que optimiza el uso de insumos y recursos,
                incrementando la rentabilidad y reduciendo el desperdicio.
              </p>
              <div
                class="row justify-content-center align-items-center bg3 p-4 brad mb-4"
              >
                <div class="col-lg-auto">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/6.png"
                    alt=""
                  />
                </div>
                <div class="col pt-lg-0 pt-md-4">
                  <p class="mb-0">
                    A lo largo de este componente, se explorarán estudios de
                    caso en cultivos como el aguacate Hass y la producción
                    avícola, demostrando cómo estas tecnologías mejoran la
                    productividad y sostenibilidad de los sistemas
                    agropecuarios. También se abordarán normativas y buenas
                    prácticas que aseguren la correcta implementación de estas
                    herramientas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-5">
        En resumen, este componente prepara al aprendiz para enfrentar los retos
        del sector agropecuario moderno, equipándolo con los conocimientos y
        habilidades necesarios para integrar tecnologías automatizadas en
        procesos productivos, promoviendo una gestión eficiente y sostenible de
        los recursos.
      </p>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <figure>
            <div class="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9RQ7aHBf5Z8?si=MuatGe7Y0RomnZL_"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
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
