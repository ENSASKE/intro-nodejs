# Introdución a NodeJs

Esta es una introducción a NodeJs con unas simples prácticas tomadas mediante el curso de "tutorialspoint", [https://www.tutorialspoint.com/nodejs/index.htm](https://www.tutorialspoint.com/nodejs/index.htm)

Estuve probando la capacidad de node, realizando varios de los ejercicios con códigos prácticos y traduciendo/actualizando el código para que funcionara en las versiones recientes.

Usando NodeJs v8.11.1 y npm 5.6.0 en Windows

Las secciones se separan en carpetas y numerados para tener una guía de pasos y un fácil acceso por consola usando el autocompletado:

```
    "cd 1 + tab" = "1-hola mundo"
    "cd 2 + tab" = "2-callback"
```

y ejecución también:

```
    "node h + tab" = "node hola mundo.js"
    "node 1 + tab" = "node 1-eventos.js"
```

## Estructura del proyecto

* **1-hola mundo** - Un simple archivo .js para mostrar el funcionamiento de node
* **2-callback** - Muestra la diferencia entre usar callback o no, y utilizar funciones síncronas/asíncronas
* **3-eventos** - Usa callbacks y demuestra cómo usar los eventos
* **4-buffer** - Explica la utilización del objeto buffer y sus métodos
* **5-streams** - Manipulación de archivos usando Streams
* **6-archivos** - Manipulación de archivo a través del objeto de File System
* **7-objetos_globales** - Demuestra algunos de los objetos globales y constantes que podemos usar en Node
* **8-modulos_utilidad** - Usa los distintos módulos que nos brinda por defecto Node
* **9-modulo_web** - Utiliza el paradigma cliente/servidor en un ambiente web creado manualmente
* **10-express_framework** - Framework con varios módulos utilizado para trabajar un ambiente web eficiente
* **11-resful_api** - Usando Express Framework, se crea una api sencilla para operaciones restful
* **12-escalando** - Demuestra el uso de los procesos y procesos padres/hijos
