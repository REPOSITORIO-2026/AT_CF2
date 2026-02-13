<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>3</span></div>
        <h1>Automatización en el monitoreo de sistemas productivos</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <div class="bg3 p-4 brad h-100 j1">
            <p class="mb-0">
              La automatización ha revolucionado la gestión de los sistemas
              productivos agropecuarios, transformando la manera en que se
              monitorean y controlan las variables clave. A través de la
              integración de tecnologías avanzadas como sensores IoT, sistemas
              SCADA y plataformas de análisis de datos, los productores pueden
              obtener información en tiempo real, tomar decisiones informadas y
              optimizar cada aspecto del proceso productivo.
            </p>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/53.png" alt="" />
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <div class="bg1 b-dash p-4 brad h-100 j1">
            <p class="mb-0">
              En un entorno agropecuario cada vez más desafiante, donde factores
              como el cambio climático y la competencia global exigen mayor
              eficiencia y sostenibilidad, la automatización se ha convertido en
              un aliado indispensable. Permite no solo reducir costos operativos
              y mejorar la calidad de los productos, sino también mitigar
              riesgos y reducir el impacto ambiental.
            </p>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_3_1"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>3.1 Introducción a la automatización en la agricultura</h2>
      </div>
      <p>
        La automatización en los sistemas productivos agropecuarios ha
        revolucionado la forma en que se gestionan los cultivos y la producción
        pecuaria. Mediante la integración de tecnologías avanzadas, como
        sensores IoT, sistemas SCADA y plataformas de análisis de datos, es
        posible monitorear y controlar variables clave en tiempo real,
        optimizando cada aspecto del proceso productivo.
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-7 my-lg-0 my-3">
          <div class="bg2 p-4 brad j1 h-100">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-auto">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/54.png"
                  alt=""
                />
              </div>
              <div class="col pt-lg-0 pt-md-4">
                <p class="mb-0">
                  Este capítulo aborda cómo la automatización ha transformado el
                  monitoreo agrícola, permitiendo una gestión más precisa,
                  eficiente y sostenible. Se analizarán los componentes
                  esenciales de un sistema automatizado, los modelos de
                  implementación y su impacto en la toma de decisiones basada en
                  datos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/55.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_3_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>3.2 Componentes de un sistema automatizado</h2>
      </div>
      <p>
        Un sistema automatizado de monitoreo agrícola está compuesto por varios
        elementos interconectados que trabajan en conjunto para recopilar,
        procesar y analizar datos. A continuación, se describen los principales
        componentes:
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="titulo-sexto color-acento-contenido">
            <h5>Tabla 3.</h5>
            <span>Principales componentes de un sistema automatizado</span>
          </div>
          <div class="tabla-a color-acento-botones mb-5">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Componente</th>
                  <th>Descripción</th>
                  <th>Aplicaciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-bold">Sensores IoT</td>
                  <td>
                    Los sensores IoT son dispositivos clave en la
                    automatización. Capturan datos relacionados con variables
                    agroclimáticas (como temperatura, humedad y precipitación),
                    del suelo (como niveles de humedad y pH) y productivas (como
                    el rendimiento del cultivo). Estos sensores se conectan a
                    través de redes inalámbricas, lo que permite el monitoreo en
                    tiempo real.
                  </td>
                  <td>
                    <b>Tipos de sensores más comunes:</b><br /><br />
                    <ul class="lista-ul fa-ul">
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Sensores de humedad del suelo: ayudan a optimizar el
                          riego al medir la cantidad de agua disponible para las
                          plantas.</span
                        >
                      </li>
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Sensores de calidad del aire: utilizados en sistemas
                          pecuarios para controlar niveles de gases como
                          amoníaco y CO2.</span
                        >
                      </li>
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Sensores de temperatura y humedad relativa:
                          monitorean el ambiente de cultivos e
                          invernaderos.</span
                        >
                      </li>
                    </ul>
                    <br /><br /><span class="text-bold">Ventajas:</span
                    ><br /><br />
                    <ul class="lista-ul fa-ul">
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span>Recopilación de datos en tiempo real.</span>
                      </li>
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span>Reducción de la intervención manual.</span>
                      </li>
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Capacidad de integración con otros sistemas
                          automatizados.</span
                        >
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="text-bold">
                    Sistemas SCADA (Supervisory Control and Data Acquisition)
                  </td>
                  <td>
                    Los sistemas SCADA son plataformas de supervisión y control
                    a distancia. Integran sensores y dispositivos para
                    recolectar datos de procesos productivos en tiempo real,
                    permitiendo el monitoreo, análisis y ajuste de variables
                    clave sin la intervención directa del operador.
                  </td>
                  <td>
                    <b>Aplicaciones en la agricultura</b><br /><br />
                    <ul class="lista-ul fa-ul">
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Riego automatizado: controla el suministro de agua
                          basado en datos de humedad del suelo.</span
                        >
                      </li>
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Climatización de invernaderos: regula automáticamente
                          la temperatura y humedad para mantener condiciones
                          óptimas.</span
                        >
                      </li>
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Producción pecuaria: monitorea la alimentación y el
                          ambiente de los animales.</span
                        >
                      </li>
                    </ul>
                    <br /><br /><span class="text-bold">Beneficios:</span
                    ><br /><br />
                    <ul class="lista-ul fa-ul">
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span>Centralización del monitoreo.</span>
                      </li>
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Mejor toma de decisiones gracias a la visualización
                          de datos históricos y en tiempo real.</span
                        >
                      </li>
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Capacidad de automatización de procesos
                          complejos.</span
                        >
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="text-bold">Drones y Satélites</td>
                  <td>
                    Los drones y satélites proporcionan información visual y
                    georreferenciada de cultivos y su entorno. Mediante imágenes
                    multiespectrales y otras tecnologías de detección remota,
                    facilitan la identificación temprana de problemas, la
                    optimización de insumos y la mejora de la planificación
                    agrícola.
                  </td>
                  <td>
                    <b>Aplicaciones:</b><br /><br />
                    <ul class="lista-ul fa-ul">
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Detección de estrés hídrico y nutricional:
                          identificación de áreas problemáticas dentro de una
                          parcela.</span
                        >
                      </li>
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Monitoreo de plagas: ayudan a detectar infestaciones
                          tempranas y optimizar el uso de pesticidas.</span
                        >
                      </li>
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Evaluación de rendimientos: mediante índices de
                          vegetación como NDVI (Índice de Vegetación de
                          Diferencia Normalizada).</span
                        >
                      </li>
                    </ul>
                    <span class="text-bold">Ventajas:</span><br /><br />
                    <ul class="lista-ul fa-ul">
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Cobertura rápida y eficiente de grandes áreas.</span
                        >
                      </li>
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span>Reducción de costos en inspección manual.</span>
                      </li>
                      <li>
                        <i class="fas fa-check-circle color1"></i
                        ><span
                          >Mayor precisión en la planificación de actividades
                          agrícolas</span
                        >
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_3_3"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>3.3 Modelos de Implementación de la Automatización</h2>
      </div>
      <p>
        La automatización en los sistemas productivos agropecuarios no sigue un
        modelo único; su implementación depende de factores como el tipo de
        cultivo o producción, el entorno donde se desarrolla, y los recursos
        tecnológicos y financieros disponibles. Existen diversas formas de
        integrar tecnologías automatizadas, y cada modelo responde a las
        necesidades específicas de distintos sistemas productivos. Estos modelos
        van desde la implementación de sistemas básicos de monitoreo hasta
        soluciones avanzadas que gestionan automáticamente todo el ciclo
        productivo. La implementación de sistemas automatizados en la
        agricultura varía según el tipo de sistema productivo, las condiciones
        locales y los recursos disponibles. Algunos de los modelos más comunes
        incluyen:
      </p>
      <div class="row justify-content-start mt-5 mb-4">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img class="ms-2" src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon brad p-0 px-4">
              <h4 class="mb-1">Cultivos en ambiente abierto</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="bg10 mb-4">
        <div class="row justify-content-center">
          <div class="col-lg-8 my-3 j1">
            <div class="p-4">
              <p class="mb-0">
                Los <b>cultivos en ambiente abierto</b>, como el maíz, el arroz
                y otros cereales, enfrentan grandes desafíos debido a la
                exposición directa a condiciones climáticas variables. La
                automatización en este contexto se centra en el monitoreo
                agroclimático y la gestión de recursos como agua y
                fertilizantes.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <img class="img-a img-t" src="@/assets/curso/temas/56.png" alt="" />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/57.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
            <div
              titulo="Elementos clave de la automatización en ambiente abierto"
            >
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Sistemas de riego automatizado: integran sensores de
                    humedad del suelo para activar riegos solo cuando es
                    necesario, optimizando el uso del agua.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Monitoreo climático: sensores que miden variables como
                    temperatura, humedad y precipitación ayudan a predecir
                    condiciones adversas.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Uso de drones y satélites: proveen imágenes de grandes
                    áreas agrícolas, permitiendo identificar zonas con estrés
                    hídrico o infestaciones de plagas.</span
                  >
                </li>
              </ul>
            </div>
            <div titulo="Beneficios">
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span>Reducción del uso de insumos.</span>
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Mejora del rendimiento y calidad de los cultivos.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Mayor resiliencia frente a condiciones climáticas extremas.
                  </span>
                </li>
              </ul>
            </div>
          </AccordionRED>
        </div>
      </div>
      <div class="row justify-content-start mt-5 mb-4">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img class="ms-2" src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon brad p-0 px-4">
              <h4 class="mb-1">Cultivos en ambiente protegido</h4>
            </div>
          </div>
        </div>
      </div>
      <p>
        Los <b>cultivos en ambiente protegido</b>, como los invernaderos,
        permiten un control mucho más preciso de las condiciones de crecimiento.
        La automatización en estos entornos no solo optimiza el uso de recursos,
        sino que también asegura un ambiente ideal para maximizar la
        productividad. Algunas tecnologías aplicadas en ambientes protegidos
        son:
      </p>
      <TabsC class="color-acento-contenido mb-5">
        <div class="py-3 py-md-4 bg11" titulo="Control climático automatizado">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/58.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Control climático automatizado</h5>
              <p>
                Sistemas que regulan la temperatura, la humedad y la luz
                mediante sensores y actuadores.
              </p>
            </div>
          </div>
        </div>
        <div
          class="py-3 py-md-4 bg11"
          titulo="Sistemas de fertirrigación automatizada"
        >
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/59.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Sistemas de fertirrigación automatizada</h5>
              <p>
                Combinan el suministro de agua con nutrientes, adaptándose a las
                necesidades específicas del cultivo en cada etapa de
                crecimiento.
              </p>
            </div>
          </div>
        </div>
        <div
          class="py-3 py-md-4 bg11"
          titulo="Monitoreo de plagas y enfermedades "
        >
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/60.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Monitoreo de plagas y enfermedades</h5>
              <p>
                Sensores específicos detectan la presencia de plagas y
                condiciones propicias para enfermedades, activando sistemas de
                control preventivo.
              </p>
              <p>Entre sus beneficios se encuentran:</p>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span>Aumento en la producción por unidad de área.</span>
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span>Mayor eficiencia en el uso de insumos.</span>
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Reducción de riesgos asociados a plagas y enfermedades.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabsC>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-3">
          <div class="row justify-content-start mt-5 mb-4">
            <div class="col-auto">
              <div class="list">
                <div class="list__item">
                  <div class="list__item__icon">
                    <img
                      class="ms-2"
                      src="@/assets/curso/temas/icon.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="list__txt bgicon brad p-0 px-4">
                  <h4 class="mb-1">Sistemas pecuarios</h4>
                </div>
              </div>
            </div>
          </div>
          <p>
            En los <b>sistemas pecuarios</b>, la automatización se enfoca en
            optimizar el bienestar animal y la eficiencia en la producción. Esto
            incluye la gestión automatizada de la alimentación, el monitoreo de
            la salud y el control de las condiciones ambientales. Algunos
            ejemplos de automatización en sistemas pecuarios son:
          </p>
          <div class="bg3 p-4 brad">
            <ol class="lista-ol--cuadro fa-ul">
              <li>
                <div class="lista-ol--cuadro__vineta">
                  <span class="text-black">1</span>
                </div>
                <span
                  ><b>Alimentación automatizada:</b> sistemas que administran
                  raciones de alimento de acuerdo con las necesidades
                  específicas de cada animal, mejorando la conversión
                  alimenticia.</span
                >
              </li>
              <li>
                <div class="lista-ol--cuadro__vineta">
                  <span class="text-black">2</span>
                </div>
                <span
                  ><b>Monitoreo ambiental:</b> sensores de temperatura, humedad
                  y calidad del aire (amoníaco y CO2) aseguran un ambiente
                  saludable.</span
                >
              </li>
              <li>
                <div class="lista-ol--cuadro__vineta">
                  <span class="text-black">3</span>
                </div>
                <span
                  ><b>Sistemas de detección de enfermedades:</b> tecnologías que
                  miden indicadores de salud como la temperatura corporal y el
                  comportamiento, permitiendo una detección temprana de
                  enfermedades.
                </span>
              </li>
            </ol>
          </div>
        </div>
        <div class="col-lg-4 my-3">
          <img
            class="img-a img-t mb-4"
            src="@/assets/curso/temas/61.png"
            alt=""
          />
        </div>
      </div>
      <p>Entre sus beneficios se encuentran:</p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-3">
          <div class="bg6 brad p-3 sha h-100">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-auto">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/62.png"
                  alt=""
                />
              </div>
              <div class="col pt-lg-0 pt-md-4">
                <p class="mb-0">Mejora del rendimiento productivo.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 my-3">
          <div class="bg6 brad p-3 sha h-100">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-auto">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/63.png"
                  alt=""
                />
              </div>
              <div class="col pt-lg-0 pt-md-4">
                <p class="mb-0">
                  Reducción de costos asociados a la mano de obra y el uso de
                  insumos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 my-3">
          <div class="bg6 brad p-3 sha h-100">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-auto">
                <img
                  class="img-a img-t"
                  src="@/assets/curso/temas/64.png"
                  alt=""
                />
              </div>
              <div class="col pt-lg-0 pt-md-4">
                <p class="mb-0">
                  Aseguramiento de estándares de bienestar animal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_3_4"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>3.4 Ventajas de la automatización en el monitoreo</h2>
      </div>
      <p>
        La automatización en el monitoreo ofrece múltiples beneficios que
        mejoran la eficiencia, sostenibilidad y rentabilidad de los sistemas
        productivos agropecuarios.
      </p>
      <div class="row bg8 align-items-center">
        <div class="col-lg-12 col-12 px-lg-5 px-4">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12">
              <div class="bgw brad p-5 my-5">
                <CarouselRED tipo="b">
                  <div class="row justify-content-center">
                    <div class="col-lg-6 my-2">
                      <h5 class="mb-4">Precisión y eficiencia</h5>
                      <p>
                        Permite un monitoreo constante y preciso de variables
                        clave, optimizando el uso de recursos como agua y
                        fertilizantes.
                      </p>
                    </div>
                    <div class="col-lg-5 my-2">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/65.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-6 my-2">
                      <h5 class="mb-4">Toma de decisiones basada en datos</h5>
                      <p>
                        Los datos recopilados y analizados en tiempo real
                        facilitan decisiones más informadas y rápidas, mejorando
                        la capacidad de respuesta ante cambios en las
                        condiciones del sistema.
                      </p>
                    </div>
                    <div class="col-lg-5 my-2">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/66.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-6 my-2">
                      <h5 class="mb-4">Sostenibilidad</h5>
                      <p>
                        La automatización contribuye a prácticas más sostenibles
                        al minimizar el desperdicio de recursos y reducir el
                        impacto ambiental.
                      </p>
                    </div>
                    <div class="col-lg-5 my-2">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/67.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-6 my-2">
                      <h5 class="mb-4">Reducción de costos operativos</h5>
                      <p>
                        A largo plazo, la eficiencia mejorada y la reducción de
                        pérdidas compensan la inversión inicial en tecnología.
                      </p>
                    </div>
                    <div class="col-lg-5 my-2">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/68.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-6 my-2">
                      <h5 class="mb-4">Principales ventajas</h5>
                      <ul class="lista-ul fa-ul">
                        <li>
                          <i class="fas fa-check-circle color1"></i
                          ><span
                            ><b>Monitoreo continuo y en tiempo real:</b>
                            proporciona datos precisos y actualizados que
                            permiten ajustes inmediatos en los procesos
                            productivos.</span
                          >
                        </li>
                        <li>
                          <i class="fas fa-check-circle color1"></i
                          ><span
                            ><b>Optimización del uso de recursos:</b>
                            tecnologías como el riego y la fertilización
                            automatizados aseguran que solo se utilicen insumos
                            cuando y donde sean necesarios.</span
                          >
                        </li>
                        <li>
                          <i class="fas fa-check-circle color1"></i
                          ><span
                            ><b>Reducción de costos operativos:</b> menor
                            necesidad de intervención manual y menos desperdicio
                            de recursos.</span
                          >
                        </li>
                        <li>
                          <i class="fas fa-check-circle color1"></i
                          ><span
                            ><b>Sostenibilidad:</b> al reducir el impacto
                            ambiental, la automatización promueve prácticas
                            agrícolas más responsables.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-5 my-2">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/69.png"
                        alt=""
                      />
                    </div>
                  </div>
                </CarouselRED>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_3_5"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>3.5 Retos en la implementación de la automatización</h2>
      </div>
      <p>
        A pesar de sus múltiples beneficios, la automatización enfrenta varios
        desafíos que limitan su adopción generalizada, especialmente en pequeñas
        y medianas explotaciones:
      </p>
      <div class="bg2 p-4 mb-4">
        <div class="row justify-content-center">
          <div class="col-lg-5 my-3">
            <img class="img-a img-t" src="@/assets/curso/temas/70.png" alt="" />
          </div>
          <div class="col-lg-7 my-3 j1">
            <ol class="lista-ol--cuadro fa-ul">
              <li>
                <div class="lista-ol--cuadro__vineta">
                  <span class="text-black">1</span>
                </div>
                <span
                  ><b>Inversión inicial:</b> los sistemas automatizados pueden
                  tener un costo elevado, lo que limita su adopción por pequeños
                  y medianos productores.</span
                >
              </li>
              <li>
                <div class="lista-ol--cuadro__vineta">
                  <span class="text-black">2</span>
                </div>
                <span
                  ><b>Capacitación técnica:</b> es necesario que los usuarios
                  estén capacitados para manejar las tecnologías y analizar los
                  datos generados.</span
                >
              </li>
              <li>
                <div class="lista-ol--cuadro__vineta">
                  <span class="text-black">3</span>
                </div>
                <span
                  ><b>Infraestructura y conectividad:</b> en áreas rurales, la
                  falta de conectividad y de infraestructura tecnológica puede
                  dificultar la implementación de sistemas avanzados.</span
                >
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div
        id="t_3_6"
        class="titulo-segundo color-acento-contenido"
        data-aos="zoom-in-left"
      >
        <h2>3.6 Impacto de la automatización en la sostenibilidad</h2>
      </div>
      <p>
        La automatización no solo mejora la eficiencia y productividad, sino que
        también tiene un impacto positivo en la sostenibilidad ambiental y
        económica de los sistemas productivos. Al optimizar el uso de insumos y
        reducir las pérdidas, contribuye a la conservación de recursos naturales
        y a la mitigación de impactos negativos en el medio ambiente. Además, la
        capacidad de anticipar y responder a problemas mejora la resiliencia del
        sistema frente a desafíos como el cambio climático.
      </p>
      <div class="row justify-content-start mt-5 mb-4">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img class="ms-2" src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon brad p-0 px-4">
              <h4 class="mb-1">Impactos clave en la sostenibilidad</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center text-center mb-4">
        <div class="col-lg-4 my-3">
          <div class="bgw sha brad h-100">
            <img
              class="img-a img-t mb-4"
              src="@/assets/curso/temas/71.png"
              alt=""
            />
            <div class="p-4">
              <h5>Reducción del impacto ambiental</h5>
              <p class="mb-0">
                La automatización minimiza la sobreexplotación de recursos y
                reduce las emisiones de gases de efecto invernadero.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 my-3">
          <div class="bgw sha brad h-100">
            <img
              class="img-a img-t mb-4"
              src="@/assets/curso/temas/72.png"
              alt=""
            />
            <div class="p-4">
              <h5>Mayor resiliencia frente al cambio climático</h5>
              <p class="mb-0">
                Los sistemas automatizados pueden prever y mitigar los efectos
                de condiciones climáticas adversas.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 my-3">
          <div class="bgw sha brad h-100">
            <img
              class="img-a img-t mb-4"
              src="@/assets/curso/temas/73.png"
              alt=""
            />
            <div class="p-4">
              <h5>Conservación de la biodiversidad</h5>
              <p class="mb-0">
                Al aplicar insumos de manera precisa, se reduce el impacto sobre
                el entorno natural, protegiendo la fauna y flora local.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p>
        La implementación de la automatización representa un paso necesario
        hacia un sector agropecuario más eficiente, competitivo y sostenible.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="titulo-sexto color-acento-contenido">
            <h5>Figura 3.</h5>
            <span
              >Resumen automatización en el monitoreo de sistemas
              productivos</span
            >
          </div>
          <div class="bgfig p-4 mb-1">
            <img
              class="img-a img-t"
              src="@/assets/curso/temas/74.svg"
              alt="El diagrama se estructura en cuatro ramas principales que explican el impacto de la automatización en sistemas agropecuarios, las tecnologías utilizadas (como IoT y SCADA), los beneficios del monitoreo automatizado, y el rol de la automatización como aliado en el entorno agropecuario, incluyendo aspectos como eficiencia, costos y calidad."
            />
          </div>
          <figcaption class="mb-5">Fuente: OIT, 2024.</figcaption>
        </div>
      </div>
    </div>
  </div>
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
