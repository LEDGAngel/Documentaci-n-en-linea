import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>

    


<h1>Control de Versiones</h1>

<table>
    <thead>
        <tr>
            <th>Fecha</th>
            <th>Versión</th>
            <th>Descripción del cambio</th>
            <th>Autor(es)</th>
            <th>Revisor(es)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>03/05/2025</td>
            <td>1.0</td>
            <td>Se desarrolló por primera vez el contenido del documento, especificando todos sus puntos.</td>
            <td>Joselyn Reyna Contreras Luis Ernesto Guzmán Del Angel Áaron Hernández Orta Joirid Juárez Salinas</td>
            <td>Joselyn Reyna Contreras Luis Ernesto Guzmán Del Angel Áaron Hernández Orta Joirid Juárez Salinas</td>
        </tr>
        <tr>
            <td>09/05/2025</td>
            <td>2.0</td>
            <td>Verificación de arquitectura actualizada.</td>
            <td>Joselyn Reyna Contreras Luis Ernesto Guzmán Del Angel Áaron Hernández Orta Joirid Juárez Salinas</td>
            <td>Joselyn Reyna Contreras Luis Ernesto Guzmán Del Angel Áaron Hernández Orta Joirid Juárez Salinas</td>
        </tr>
        <tr>
            <td>09/06/2025</td>
            <td>3.0</td>
            <td>Actualizar arquitectura a su versión final</td>
            <td>Joselyn Reyna Contreras Luis Ernesto Guzmán Del Angel Áaron Hernández Orta Joirid Juárez Salinas</td>
            <td>Joselyn Reyna Contreras Luis Ernesto Guzmán Del Angel Áaron Hernández Orta Joirid Juárez Salinas</td>
        </tr>
    </tbody>
</table>

<div class="page-break"></div>


<div class="page-break"></div>

<div style={{ marginLeft: '40px' }}>
    <h1>1. Introducción</h1>

<h2>1.1. Propósito</h2>

<p>El propósito del sistema Ágata Planner es sustituir el uso de herramientas inconexas como Excel
para la planificación de proyectos, proporcionando una solución integral que, mediante
inteligencia artificial, permite generar épicas e historias de usuario de manera automatizada. De
este modo, se optimiza el tiempo y los recursos empleados en la gestión de proyectos,
garantizando un mejor control, trazabilidad y productividad en los procesos de desarrollo ágil.</p>

<h2>1.2. Alcance</h2>

<ul>
    <li>El sistema abarcará una plataforma web colaborativa que permita:</li>
    <li>Gestión de roles y permisos de acceso.</li>
    <li>Creación de proyectos colaborativos.</li>
    <li>Generación automática de épicas e historias de usuario mediante IA.</li>
    <li>Creación y edición manual de historias de usuario.</li>
    <li>Gestión del Product Backlog y Sprint Backlog.</li>
    <li>Gestión de tickets y seguimiento de tareas.</li>
    <li>Generación de estadísticas de productividad.</li>
    <li>Gestión y seguimiento de bugs.</li>
</ul>

<p>El sistema interactúa con APIs de generación de contenido, servicios de autenticación, y estará
soportado en infraestructura en la nube.</p>

<h2>1.3. Contexto</h2>

<p>Softtek es una empresa de consultoría en tecnología que se enfoca en el desarrollo de software,
para lo cual utiliza metodologías ágiles. Por esta razón el uso de herramientas de gestión de
trabajo en los sprints se vuelve fundamental. Además, el proceso de planeación de los proyectos
requiere de un periodo de tiempo determinado para definir las épicas e historias de usuario, el
cual, en muchas ocasiones, se vuelve un obstáculo al momento de optimizar sus tiempos
destinados a cada proyecto.</p>

<p>Actualmente Softtek ha desarrollado una herramienta de inteligencia artificial para facilitar la
creación de épicas e historias de usuario, que ha sido implementada en Excel, sin embargo,
aunque esto soluciona parcialmente el problema, no es tan eficiente en términos de una gestión
real de todo el proceso de desarrollo. Es por ello que Softtek desea una plataforma web de
gestión de proyectos, la cual permita realizar estos procesos que se incluyen en las metodologías
ágiles, es decir, desde la planeación, hasta el desarrollo y despliegue del proyecto, buscando
optimizar sus tiempos, especialmente en la planificación.</p>

<p>Ágata Planner surge como una solución integral desarrollada por un equipo estudiantil, con el
objetivo de centralizar todas las fases de la gestión de proyectos en una sola plataforma
accesible, moderna y soportada por inteligencia artificial.</p>

<h2>1.4. Resumen</h2>

<div class="page-break"></div>

<p>Ágata Planner busca optimizar la gestión de proyectos reemplazando herramientas como Excel
por una plataforma web centralizada, apoyada por inteligencia artificial. Su alcance abarca desde
la planeación hasta el seguimiento y gestión de tareas, mientras que su contexto surge de la
necesidad identificada en Softtek de mejorar la eficiencia y trazabilidad del proceso de desarrollo
ágil.</p>

<h2>2. Referencias</h2>

<ul>
    <li>Documento SRS</li>
    <li>Project Charter</li>
    <li>Plan de pruebas</li>
    <li>Bitácora de ejecución</li>
    <li>Diagrama de arquitectura</li>
</ul>

<h2>3. Glosario</h2>

<ul>
    <li><strong>IA (Inteligencia Artificial):</strong> Tecnología utilizada para generar automáticamente épicas e historias de usuario a partir de texto libre.</li>
    <li><strong>Épica:</strong> Gran funcionalidad que se divide en historias de usuario más pequeñas.</li>
    <li><strong>Historia de usuario (HU):</strong> Unidad de trabajo que describe una necesidad desde la perspectiva del usuario.</li>
    <li><strong>Product Backlog:</strong> Lista priorizada de requisitos o tareas pendientes.</li>
    <li><strong>Sprint Backlog:</strong> Conjunto de tareas seleccionadas para un sprint específico.</li>
    <li><strong>Ticket:</strong> Registro individual de una tarea, error o actividad dentro del proyecto.</li>
    <li><strong>Bug Tracking:</strong> Sistema para registrar y dar seguimiento a errores.</li>
</ul>

<h2>4. Contenido detallado</h2>

<h3>4.1. Identificación de involucrados</h3>

<ul>
    <li><strong>Usuarios finales:</strong> Empleados de Softtek que utilizarán la plataforma para planificar y hacer seguimiento a sus proyectos.</li>
    <li><strong>Equipo de desarrollo:</strong> Estudiantes desarrolladores del sistema Ágata.</li>
    <li><strong>Docentes asesores:</strong> Profesores que supervisan el desarrollo metodológico y técnico.</li>
    <li><strong>Líderes del cliente:</strong> Víctor Ponce y Ricardo Garza, quienes aportan requerimientos, validan entregables y dirigen la visión de negocio del sistema.</li>
</ul>

<h3>4.2. Preocupaciones de diseño</h3>

<ul>
    <li><strong>Claridad en la comunicación:</strong> Para evitar malentendidos y retrabajos, se estableció un canal unificado de comunicación.</li>
    <li><strong>Compatibilidad tecnológica:</strong> Se priorizó el uso de tecnologías ampliamente soportadas y mantenidas.</li>
    <li><strong>Tiempo de entrega y carga académica:</strong> El diseño modular y la documentación detallada buscan mitigar problemas por posibles bajas de integrantes o enfermedades.</li>
    <li><strong>Integración IA:</strong> La generación automática de contenido debe ser precisa y útil para la planificación efectiva.</li>
</ul>

<div class="page-break"></div>

<h3>4.3. Stack tecnológico</h3>

<p><strong>Frontend:</strong></p>
<ul>
    <li><strong>React JS:</strong> Biblioteca para construir interfaces de usuario.</li>
    <li><strong>Vite:</strong> Empaquetador de alto rendimiento utilizado para desarrollo y construcción.</li>
    <li><strong>HTML/CSS/JavaScript:</strong> Tecnologías estándar para el desarrollo web.</li>
</ul>

<p><strong>Backend y APIs:</strong></p>
<ul>
    <li><strong>Node.js:</strong> Entorno de ejecución para construir APIs RESTful.</li>
    <li><strong>API de IA (ChatGPT):</strong> Para generación automática de contenido.</li>
</ul>

<p><strong>Base de datos:</strong></p>
<ul>
    <li><strong>Firebase:</strong> Para autenticación y almacenamiento en tiempo real.</li>
    <li><strong>SQL Server:</strong> Para almacenamiento estructurado y consultas complejas.</li>
</ul>

<h3>4.4. Perspectivas</h3>

<h4>4.4.1. Perspectiva lógica (PD001)</h4>

<p>Ágata Planner es un sistema arquitectónicamente centralizado que procesa y gestiona la
información del ciclo de vida de un proyecto a través de módulos lógicos interconectados
(Planificación, Tareas, Seguimiento) con la creacion de Épicas, Historias de Usuario y Tareas
en el Product Backlog hasta la asignación de las mismas en un sprint backlog</p>

<h4>4.4.1.1. Vista VD001 Diagrama de Clases</h4>
<img src="Img/Clases.png" alt="Diagrama de Clases"/>

<div class="page-break"></div>


<p>El diagrama de clases representa las pestañas funcionales del software junto con su interacción con el usuario y los atributos que las pestañas funcionales del software poseen y los métodos o acciones que pueden realizar dentro del software, mostrando una perspectiva lógica de los elementos abstractos del sistema.</p>

<h4>4.4.1.2. Vista VD002 Diagrama de Objetos</h4>
<img src="Img/Objetos.png" alt="Diagrama de Objetos"/>

<div class="page-break"></div>

<p>El diagrama muestra instancias reales del sistema Ágata Planner, organizadas en dos paquetes: Firebase 
(NoSQL) y Relacional (SQL).</p>
<ul>
    <li>En el paquete Firebase, se representan objetos como un usuario (usuario_ana), un proyecto 
(proyecto_kanban), una historia de usuario y una notificación. Estos reflejan datos en tiempo real del 
sistema.</li>
    <li>En el paquete Relacional, se incluyen una encuesta de felicidad y un historial de estrés, ambos 
vinculados al mismo usuario y proyecto.</li>
</ul>
<p>Las relaciones implícitas se basan en atributos como idUsuario y idProyecto, lo que permite entender 
cómo interactúan los distintos componentes del sistema en un momento determinado.</p>
<p>Este diagrama integra fuentes de datos relacional y no relacional, ofreciendo una vista lógica concreta del 
sistema en ejecución.</p>

<h4>4.4.2. Perspectiva de proceso (PD002)</h4>
<p>Agata Planner desde la perspectiva de proceso sigue una metodología ágil. El desarrollo se 
organiza en ciclos cortos donde el proyecto se rige en base a estos sprints y las tareas 
completadas de Historias de usuario. Las tareas se definen junto con las historias de 
usuario, las cuales se definen por las épicas y todo esto visto en la página de PB, a la cual se 
ingresa primeramente siguiente el proceso de login y registro y con los datos recolectados 
del proyecto se logra hacer funcional pantallas como panel, calendario o equipo.</p>
<h4>4.4.2.1. Vista VD003 Diagrama de Actividad</h4>

<div class="page-break"></div>

<img src="Img/Actividad.png" alt="Diagrama de Actividad"/>

<p>El diagrama ilustra cómo un usuario interactúa con el sistema, desde la creación
de su cuenta y el inicio de sesión, hasta la navegación y el uso de la barra lateral
para usar la página de bugs, equipo, biométricos, calendario, preferencias, SP,
PB y el panel.</p>

<h4>4.4.3. Perspectiva del desarrollador (PD003)</h4>

<p>Desde el punto de vista del equipo técnico o desarrollador, el sistema está estructurado de
manera modular y clara para facilitar el mantenimiento, escalabilidad y colaboración en
equipo.</p>

<h4>4.4.3.1. Vista VD004 Diagrama de arquitectura general</h4>
<img src="Img/Arquitectura.png" alt="Diagrama de Arquitectura"/>

<div class="page-break"></div>

<p>El presente diagrama muestra la arquitectura de alto nivel del sistema Ágata
Planner, ilustrando los principales componentes del sistema, las tecnologías
empleadas y la forma en que se comunican entre sí. El usuario final interactúa
con la plataforma a través de una interfaz web desarrollada en React, donde
puede crear proyectos, visualizar historias de usuario y mover tareas. El acceso
al sistema está protegido mediante autenticación con correo y contraseña o
cuentas de Google, implementada a través de Firebase Authentication.</p>

<p>El frontend, desarrollado con React JS, consume servicios proporcionados por el
backend mediante APIs REST a través del protocolo HTTPS. Su principal función
es mostrar la información relevante al usuario y enviar las acciones que este
realice al servidor para su procesamiento. Por su parte, el backend ha sido
construido con Node.js y el framework Express. Este componente se encarga de
gestionar la lógica de negocio, procesar las solicitudes del cliente, consultar las
bases de datos y comunicarse con servicios externos, como la API de
inteligencia artificial.</p>

<p>El servicio de inteligencia artificial, expuesto mediante una API externa, tiene
como función procesar las descripciones textuales proporcionadas por los
usuarios y generar automáticamente épicas e historias de usuario. Este servicio
se integra al backend por medio de peticiones HTTPS, lo que permite su
incorporación de forma segura y eficiente dentro del flujo del sistema.</p>

<p>Finalmente, el sistema utiliza dos tipos de bases de datos. Firebase (NoSQL) se
emplea principalmente para autenticación y operaciones en tiempo real,
mientras que MySQL o SQL Server (bases relacionales) almacenan datos
estructurados como proyectos, usuarios, historias de usuario y tareas. El
backend se comunica con ambas según el tipo de información requerida,
asegurando una gestión de datos coherente y efectiva.</p>

<h4>4.4.3.2. Vista VD005 Diagrama de Entidad Relación</h4>
<img src="Img/ER.png" alt="Diagrama de Entidad Relación"/>

<p>El diagrama muestra dos componentes principales del modelo de base de datos
relacional del sistema: las tablas Historial y EncuestaFelicidad. Estas tablas están
diseñadas para registrar mediciones de estrés y niveles de felicidad de usuarios
dentro de proyectos específicos. Ambas comparten los campos idProyecto y
idUsuario, lo que permite analizarlas en conjunto.</p>

<div class="page-break"></div>

<h4>4.4.4. Perspectiva del despliegue (PD004)</h4>

<p>Desde el punto de vista del despliegue, AgataPlanner es un sistema distribuido que opera
en varias capas interconectadas para ofrecer la funcionalidad completa a los usuarios. El
<strong>frontend, construido con React Vite y Tailwind, es una aplicación de página única (SPA)</strong>
que, una vez compilada, se reduce a un conjunto de archivos estáticos (HTML, CSS,
JavaScript). Estos archivos se despliegan en un servidor web de Azure donde hay una
máquina virtual desplegando los componentes del front end, se encarga de servirlos
eficientemente al navegador del usuario final.</p>

<h4>4.4.4.1. Vista VD006 Diagrama de Despliegue</h4>
<img src="Img/Despliegue.png" alt="Diagrama de Despliegue"/>

<p>En este diagrama de despliegue se explica la forma en que la máquina virtual
desplegada tiene el backend y frontend de la aplicación, la cual se conecta el
backend con las bases de datos a través de endpoints manejados con API REST y
esta máquina virtual se conecta al cliente por medio de un procedimiento http</p>

<h4>4.4.4.2. Vista VD007 Diagrama de Paquetes</h4>


<p>El diagrama de paquete muestra la estructura modular, entre frontend, lógica de
negocio y persistencia de datos. También muestra cómo se integran dos tipos de
bases de datos en el backend para el proyecto, así como los servicios que se necesitan
para el funcionamiento del mismo.</p>

<img src="Img/Despliegue.png" alt="Diagrama de Despliegue"/>

<div class="page-break"></div>

<h4>4.4.5. Perspectiva del usuario (PD005)</h4>

<p>Para el usuario final, "Agata Planner" es una herramienta intuitiva y colaborativa para organizar proyectos por metodología ágil teniendo datos del rendimiento del proyecto por sprints y por tareas realizadas a la vez de permitir administrar bugs y tener acceso a la condición del equipo en algunos parámetros biométricos.</p>

<h4>4.4.5.1. Vista VD012 Diagrama de Casos de Uso</h4>

<img src="Img/Casos de Uso.png" alt="Diagrama de Casos de Uso"/>
<p>Este diagrama muestra el uso del programa con actores como el usuario y el sistema realizando el sistema las acciones de guardado en la base de datos y la verificación del usuario y el usuario las acciones de modificación, creación y eliminación de objetos</p>

<div class="page-break"></div>

<h4>4.4.5.2. Vista VD013 Escenario de Uso</h4>

<img src="Img/Escenerio de Uso.png" alt="Diagrama de Escenario"/>

<p>Este diagrama representa el flujo específico que sigue un usuario autenticado para generar una épica mediante inteligencia artificial dentro del sistema Ágata Planner.</p>

<p>El flujo inicia con acciones del usuario, como el acceso al proyecto y al Product Backlog. Luego, el usuario selecciona la opción para crear una épica con IA, introduce un prompt y envía la solicitud.</p>

<p>El sistema responde enviando el prompt a la API de inteligencia artificial, y tras recibir una respuesta válida, guarda la épica generada en Firebase.</p>

</div>


    </Layout>
  );
}