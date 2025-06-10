import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
    <div style={{ marginLeft: '40px' }}>

    <h1>Manual de Instalación y Configuración</h1>
    <h2>Ágata Planner - Versión 1</h2>

    <h3>1. Introducción</h3>

    <h4>1.1. Propósito de este Manual</h4>
    <p>Este documento tiene como finalidad proporcionar una guía técnica detallada para la correcta instalación, configuración y despliegue del software de administración de proyectos Ágata Planner. Las instrucciones aquí contenidas están dirigidas al personal técnico del cliente, como administradores de sistemas, ingenieros de DevOps o desarrolladores, quienes serán responsables de preparar los entornos necesarios para el funcionamiento de la aplicación.</p>
    <p>El objetivo principal es asegurar un proceso de implementación fluido y exitoso, cubriendo todas las dependencias de software, configuraciones de servicios y variables de entorno requeridas. Este manual no está destinado al usuario final de la aplicación, sino al equipo técnico que la pondrá en marcha.</p>

    <h4>1.2. Alcance del Documento</h4>
    <p>Este manual abarca dos escenarios de implementación críticos para el ciclo de vida de la aplicación:</p>
    <ul>
      <li><strong>Ambiente de Desarrollo:</strong> Se detallan los pasos para configurar un entorno local o de desarrollo que permita a los equipos técnicos realizar pruebas, personalizaciones o integraciones sin afectar el sistema principal.</li>
      <li><strong>Ambiente de Producción:</strong> Se especifican las instrucciones para el despliegue de la aplicación en un servidor o clúster de producción.</li>
    </ul>
    <p>A lo largo de este documento se utilizará un lenguaje técnico preciso y se incluirán imágenes de apoyo, tales como capturas de pantalla, diagramas de arquitectura y fragmentos de código.</p>

    <h4>1.3. Audiencia</h4>
    <p>Este manual está dirigido exclusivamente a:</p>
    <ul>
      <li>Administradores de Sistemas</li>
      <li>Ingenieros de Infraestructura y DevOps</li>
      <li>Desarrolladores con responsabilidades de despliegue</li>
      <li>Personal de TI encargado de la implementación de nuevo software</li>
    </ul>

    <h3>2. Implementación</h3>

    <h4>2.1 GitHub</h4>
    <p>Para descargar el proyecto Ágata Planner desde GitHub:</p>
    <pre><code>git clone https://github.com/Joirid/Agata.git</code></pre>

    <h4>2.2 Variables de entorno</h4>
    <p>Requisitos:</p>
    <ul>
      <li>Base de datos MySQL en la nube (ej. Aiven)</li>
      <li>Base de datos Firebase</li>
      <li>Archivo <code>key.json</code> en <code>/Backend/utils</code> con la clave privada de Firebase</li>
      <li>API de Softtek para generación de Épicas, Tareas e Historias</li>
    </ul>

    <p>Estos elementos son necesarios porque generan variables de entorno necesarias para el funcionamiento del backend, 
      el cual es necesario para el funcionamiento correcto Frontend y del proyecto; las variables de entorno deberán 
      ser almacenadas en un archivo denominado <code>.env</code>, pues el backend esta programado para recoger su información 
      de un archivo de este tipo. A continuación, se muestra un ejemplo de cómo debe de quedar el archivo <code>.env</code> con 
      las variables de entorno necesarias para el funcionamiento correcto de la aplicación, los nombres tienen que 
      ser referencias de manera similar al de la imagen porque así los identifica el backend:</p>
      <figure >
      <img 
        src="img/DatosSQL.png" 
        alt="SQL Database" 
        width="300" 
        height="200"
      ></img>
      <figcaption>Dentro de esta imagen se muestra en las primeras 5 variables los datos que arroga una base de datos 
        MySQL alojada en el servicio de AIVEN, la 6 variable es donde va ingresada la API de softtek.</figcaption>
    </figure>

    <figure >
      <img 
        src="img/DatosFirebase.png" 
        alt="SQL Database" 
        width="300" 
        height="200"
      ></img>
      <figcaption>Dentro de esta imagen la primera variable 
        que se muestra es la clave necesaria para generar los Tokens de acceso a los endpoints, es un c
        arácter alfanumérico, después viene las variables que genera una base de datos Firebase en la clave que se encuentra en 
        la configuración de proyecto en cuenta de servicio, se requiere el archivo que se genera y renombrarlo como key.json y que
         las variables, que en el archivo key.json vienen las variables con el mismo nombre que las mostradas en la imagen, se pasen
          al archivo .env</figcaption>
    </figure>
      

    <p>Comandos para correr el proyecto:</p>
    <p>Frontend</p>
    <pre><code>npm start</code></pre>
    <p>Backend</p>
    <pre><code>npm run dev</code></pre>

    <p>El archivo <code>.env</code> debe contener las variables necesarias con nombres específicos para que el backend las reconozca correctamente.</p>

    <p>Una vez configurado:</p>
    <ol>
      <li>Ejecutar <code>npm install</code> en las carpetas <code>Frontend</code> y <code>Backend</code></li>
      <li>En <code>Frontend</code>: <code>npm run dev</code></li>
      <li>En <code>Backend</code>: <code>npm start</code></li>
    </ol>

    <figure >
      <img 
        src="img/Terminal.png" 
        alt="SQL Database" 
        width="900" 
        height="200"
      ></img>
      <figcaption>En la parte izquierda es un ejemplo de lo que se ve de parte 
        del frontend al correr correctamente los comandos y en la derecha lo que se 
        observa cuando se corre los comandos del backend.

      </figcaption>
    </figure>

    <p>Para producción, copiar los archivos <code>.env</code> del backend y <code>.env.production</code> del frontend con los enlaces adecuados al entorno de producción.</p>
    </div>
    </Layout>
  );
}