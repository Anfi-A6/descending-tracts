---
layout: "@layouts/Layout.astro"
---

# Actualizaciones de la plataforma web del modelo

Bienvenidos al registro de novedades de nuestro proyecto. Aquí documentamos todos los cambios significativos, mejoras y correcciones que implementamos para ofrecerte una experiencia más completa y fluida. Esta bitácora funciona como nuestro tablón de anuncios.

## [1.4.0](https://github.com/AramLR/pons-medulla-model/compare/v1.3.0...v1.4.0) (2026-05-04)

### Novedades destacadas

- **Nueva sección de referencias bibliograficas:** Ahora puedes consultar todas las fuentes academicas que respaldan nuestro contenido.  
  ([31eceee](https://github.com/AramLR/pons-medulla-model/commit/31eceee1a55dcbc071cda931c20ef65fe8409f5a))
- **Paginas especificas para las tres partes del tronco encefalico:** Hemos creado paginas de inicio independientes para el bulbo raquideo, la protuberancia y el mesencefalo, facilitando la navegacion y el estudio.  
  ([d8e58f4](https://github.com/AramLR/pons-medulla-model/commit/d8e58f4ad4c5be474854f2b5eb519cb8fe51324a))
- **Acceso directo a referencias desde el menu:** Anadimos un enlace a la pagina de referencias en la barra de navegacion para que nunca pierdas el hilo.  
  ([62ead1d](https://github.com/AramLR/pons-medulla-model/commit/62ead1dfca7bf06a5f5aae5783facb311ccda032))
- **Descripciones anatomicas de las estructuras:** Ahora cada elemento incluye una explicacion detallada para que comprendas mejor su funcion y localizacion.  
  ([9127c1e](https://github.com/AramLR/pons-medulla-model/commit/9127c1e404c7397c9e1fb0b2b8311ce0c7b95910))

### Correcciones

- **Estructuras faltantes:** Se anadieron dos componentes clave: el pie del pedunculo derecho y el tracto rubroespinal.  
  ([b9071c1](https://github.com/AramLR/pons-medulla-model/commit/b9071c18c25c8144f08762d07d070d764c7fcec3))
- **Identificador incorrecto:** Corregimos el id `path17` por el correcto `pie_del_pedunculo_derecho` para evitar errores en la visualizacion.  
  ([3964bf6](https://github.com/AramLR/pons-medulla-model/commit/3964bf6363cb2a2fbcfdda09e25fb57cd88fff71))

---

## [1.3.0](https://github.com/AramLR/pons-medulla-model/compare/v1.2.0...v1.3.0) (2026-05-03)

### Mejora espectacular: Animaciones GSAP

La experiencia ahora es mucho mas dinamica. Hemos integrado animaciones con GSAP que dan vida a las transiciones y a la interaccion con los modelos. Explora las estructuras del tronco encefalico con una fluidez y suavidad renovadas.  
([7a9e753](https://github.com/AramLR/pons-medulla-model/commit/7a9e7533963d805c6ecde386fdfbe86dd9750b15))

Ademas, actualizamos este mismo registro de cambios para mantener la coherencia del proyecto.  
([5c11c1e](https://github.com/AramLR/pons-medulla-model/commit/5c11c1ef396d5c5d073b394b2cc3773e9f126d07))

---

## [1.2.0](https://github.com/AramLR/pons-medulla-model/compare/v1.1.1...v1.2.0) (2026-05-02)

### Novedad: Soporte PWA y modo offline

Ya puedes usar nuestra aplicacion web de forma progresiva (PWA). La instalas en tu dispositivo y accedes incluso sin conexion a internet. Lleva el modelo anatomico a todas partes, sin interrupciones.  
([d606628](https://github.com/AramLR/pons-medulla-model/commit/d606628f0d80896ceb8e30a08a782fccd0f5709e))

Actualizacion interna del registro de cambios.  
([982dd69](https://github.com/AramLR/pons-medulla-model/commit/982dd69e2f88f8e39eed400ba52f7f0739aff037))

---

## [1.1.1](https://github.com/AramLR/pons-medulla-model/compare/v1.1.0...v1.1.1) (2026-05-02)

### Refactorizacion profunda y migracion del stack tecnologico

Esta version sienta las bases tecnicas para todas las funcionalidades posteriores. No incluye cambios visibles para el usuario final, pero representa un hito interno fundamental.

- **Migracion del stack tecnologico:** Se han actualizado y reestructurado las dependencias y herramientas base del proyecto. En terminos practicos, esto significa que el codigo que sostiene la plataforma es ahora mas ordenado, facil de mantener y escalable para incorporar nuevas funcionalidades sin que todo se vuelva un caos. Esta migracion fue recomendada e impulsada por el colaborador externo que se incorporo al proyecto (descrito en la seccion de desarrollo temprano).
- **Refactorizacion hacia DaisyUI:** Parte fundamental de esta reestructuracion consiste en migrar progresivamente todos los componentes visuales para que utilicen DaisyUI. Actualmente, el proyecto aun se encuentra en este proceso de refactorizacion, convirtiendo gradualmente cada parte de la interfaz para que sea mas coherente y mantenible.
- **Preparacion para nuevas funcionalidades:** Esta migracion fue el paso previo necesario para implementar caracteristicas como el soporte PWA (usar la web sin internet), las animaciones GSAP (movimientos fluidos) y las futuras secciones de contenido.

### Lo que viene: Una renovacion en marcha

La refactorizacion y migracion tecnica aun continúa activamente. El objetivo final es una actualizacion de gran calibre que traera consigo multiples funciones adicionales, pero sobre todo, una renovacion grafica y de rendimiento sustancial. La interfaz sera mas intuitiva, los tiempos de carga se reduciran y la experiencia de navegacion alcanzara un nuevo nivel de fluidez.

---

## [1.1.0](https://github.com/AramLR/pons-medulla-model/compare/b21b770f4195f35f80d7ab6e85e5e9236863f033...v1.1.0) (2026-05-02)

### Correcciones importantes

- **Seleccion azul invisible:** Solucionado el problema que impedia ver el resaltado azul al seleccionar una estructura.  
  ([b21b770](https://github.com/AramLR/pons-medulla-model/commit/b21b770f4195f35f80d7ab6e85e5e9236863f033))
- **Transiciones de vista estables:** Las animaciones entre paginas ya no interfieren con la superposicion del SVG.  
  ([1f6e102](https://github.com/AramLR/pons-medulla-model/commit/1f6e1029cdf57587c110cc9ffcbabcfba6fda798))
- **Espaciado excesivo:** Eliminamos el margen sobrante entre el encabezado y el titulo de cada pagina para una presentacion mas limpia.  
  ([157c713](https://github.com/AramLR/pons-medulla-model/commit/157c713469f63416762e61864b2b166bb37d2b9e))
- **Limpieza de codigo:** Removimos integraciones obsoletas de Svelte y el servicio PWA que no funcionaba correctamente (reemplazado por la nueva version funcional en la v1.2.0).  
  ([33d2f65](https://github.com/AramLR/pons-medulla-model/commit/33d2f65da9d57474e8e8e32b3e65afc5c4a2e224))
- **Titulo dinamico:** Se corrigio un error por el cual todas las paginas mostraban "Bienvenida" como titulo en lugar del titulo especifico de cada seccion. Este error fue introducido accidentalmente durante intentos de solucionar otra incidencia provocada por la migracion a DaisyUI. La funcionalidad de titulos dinamicos ya existia previamente, pero quedo temporalmente rota.  
  ([0d667a0](https://github.com/AramLR/pons-medulla-model/commit/0d667a098ade82c7c045e0cc739c6c8838526bc6))

### Nuevas funcionalidades

- **Niveles completos del bulbo raquideo:** Agregamos los niveles que faltaban para ofrecer una representacion anatomica mas fiel.  
  ([b6a5e3d](https://github.com/AramLR/pons-medulla-model/commit/b6a5e3d152ed4467bacafd6cd830a20586b7c778))
- **Rediseño completo de la pagina de inicio:** La interfaz ahora es mas atractiva, clara y facil de usar.  
  ([ce8beb8](https://github.com/AramLR/pons-medulla-model/commit/ce8beb8aa57d3a7a46a5594fdea00ea56dfa7b18))
- **Pagina de registro de cambios:** Incorporamos esta misma bitacora para que estes siempre al dia.  
  ([707434d](https://github.com/AramLR/pons-medulla-model/commit/707434d249668e1decdbd304ba6d307a1cbc47a0))
- **Generacion automatica del CHANGELOG:** Ahora el archivo se actualiza de forma automatica, garantizando que cada version quede registrada sin errores manuales.  
  ([8420592](https://github.com/AramLR/pons-medulla-model/commit/8420592547940682848998fb21d0c1c7e19318d8))
- **Actualizacion continua del registro:** Un paso mas para mantener la transparencia y trazabilidad del proyecto.  
  ([fd61a65](https://github.com/AramLR/pons-medulla-model/commit/fd61a651700ad1361797bc6f0f89542d1c0bf5d2))

---

## [0.0.1](https://github.com/AramLR/pons-medulla-model/compare/v1.1.0...v0.0.1) (2026-05-02)

### Revolucion interactiva: De estatico a dinamico

Esta version marco un antes y un despues en la concepcion del proyecto. Se abandono el enfoque inicial puramente estatico.

- **Transicion a la interactividad plena:** Originalmente, la plataforma solo mostraba imagenes etiquetadas con numeros acompañadas de una lista que relacionaba cada numero con su estructura correspondiente. Con la version 0.0.1, transformamos por completo esta experiencia: las imagenes pasaron a ser completamente interactivas. Ahora puedes explorar cada estructura de forma directa, intuitiva y visual.
- **Hito fundacional:** Este cambio sento las bases conceptuales y tecnicas para todas las caracteristicas interactivas que vendrian despues.

---

### Desarrollo temprano (versiones previas no publicadas)

Antes del lanzamiento oficial de la version 0.0.1, existio un periodo de desarrollo interno en el que se establecieron los cimientos del proyecto. Estas versiones no estuvieron disponibles al publico, pero fueron cruciales.

- **Incorporacion de un colaborador externo con función de agilizar el desarollo:** Se integro al proyecto un colaborador. Su incorporacion respondia a la necesidad de agilizar el desarrollo, de lo contrario, el ritmo previo de desarrollo no habría permitido mejorar y añadir funciones al sitio web tan rápido. Su labor consiste en supervisar que las decisiones tecnicas sean las correctas, ofrecer sugerencias para mejorar la calidad del codigo y la arquitectura, y contribuir directamente en tareas fundamentales.
- **Decision de migrar a DaisyUI:** Fue gracias a la recomendacion de este colaborador que se decidio incorporar la libreria de componentes visuales DaisyUI. Su argumento era claro: en lugar de construir cada elemento de la interfaz desde cero (botones, menus, tarjetas, etc.), convenia utilizar una libreria probada que aceleraria drasticamente el desarrollo. Esta decision no solo agilizo la implementacion de nuevas funcionalidades, sino que ademas sento las bases para la refactorizacion que aun continua en curso (mencionada en la version 1.1.1).
- **Coherencia visual y experiencia de usuario:** Gracias a DaisyUI, logramos establecer una interfaz grafica mas coherente, agradable y profesional desde las fases mas tempranas. La experiencia del usuario gano en uniformidad y calidad estetica.
- **Construccion colaborativa de los datos:** Una de las tareas mas tediosas del proyecto era construir el conjunto de datos que alimenta la plataforma: mas de cien estructuras anatomicas a las que habia que asignarles un nombre, una descripcion y asociarlas correctamente dentro de un unico archivo de datos estructurado. Hacer esto en solitario habria tomado una cantidad de tiempo considerable. La incorporacion del colaborador permitio dividir el trabajo entre ambos, completando esta tarea en una fraccion del tiempo que habria requerido hacerla individualmente.

---
