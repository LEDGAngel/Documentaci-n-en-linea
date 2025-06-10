import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>

    <header style={{ marginLeft: '40px' }}>
    <h1>Ágata Planner - Manual de Usuario</h1>
    <p><strong>Fecha de Publicación:</strong> 9 de junio de 2025</p>
    <p><strong>Descripción:</strong> Un software que ayuda a la organización de proyectos mediante metodología ágil.</p>
  </header>

  <section style={{ marginLeft: '40px' }}>
    <h2>1. Introducción</h2>

    <h3>1.1. ¡Bienvenido a Ágata Planner!</h3>
    <p>¡Bienvenido! Esta guía te ayudará a familiarizarte con Ágata Planner, una herramienta diseñada para simplificar la elaboración de proyectos por metodología ágil.</p>
    <p>Ágata Planner es un software que resuelve la problemática de organizar mediante metodología ágil un proyecto de software, organizando equipos y mediante diversas herramientas integradas dentro del software, crear un ambiente de organización para las personas del equipo de desarrollo.</p>

    <h3>1.2. ¿Para quién es este manual?</h3>
    <p>Para cualquier usuario que quiera hacer uso del software con enfoque a organizar un proyecto de software.</p>

    <h3>1.3. ¿Qué encontrarás en este manual?</h3>
    <p>El proceso para usar la aplicación, desde cómo ingresar hasta cómo utilizar sus funcionalidades clave.</p>
  </section>

  <section style={{ marginLeft: '40px' }}>
    <h2>2. Primeros Pasos</h2>

    <h3>2.1. Requisitos del Sistema</h3>
    <p>Laptop o computadora con acceso a un navegador web.</p>

    <h3>2.2. Cómo Acceder a Ágata Planner</h3>
    <ol>
      <li>Abre tu navegador web y ve a <a href="https://agata-2if.pages.dev/">https://agata-2if.pages.dev/</a>.</li>
      <li>Introduce tu nombre de usuario y contraseña o ingresa mediante Google en el botón <strong>Ingresar o registrarse con Google</strong>.</li>
      <li>Haz clic en el botón <strong>Iniciar Sesión</strong>.</li>
    </ol>
    <img 
        src="img/Interfaz.png" 
        alt="SQL Database" 
        width="900" 
        height="400"
      ></img>

    <h4>Para registrarte:</h4>
    <ol>
      <li>Haz clic en <strong>¿No tienes cuenta? Regístrate</strong>.</li>
      <li>Rellena los datos y selecciona el tipo de usuario.</li>
      <li>Haz clic en <strong>Registrarse</strong>.</li>
    </ol>
    <img 
        src="img/Registro.png" 
        alt="SQL Database" 
        width="900" 
        height="400"
      ></img>

    <h3>2.3. Un Vistazo General a la Interfaz</h3>
    <img 
        src="img/Inicio.png" 
        alt="SQL Database" 
        width="900" 
        height="400"
      ></img>
    <ul>
      <li><strong>Barra lateral:</strong> Desde esta barra puedes acceder a todas las paginas de la aplicación, como en este caso, si no se ingresa en un proyecto esta por default la pagina de Inicio y Ajustes de Perfil.</li>
      <li><strong>Barra Superior:</strong> En esta parte esta el logo de Ágata Planner del lado izquierdo y del lado derecho están 3 símbolos importantes, de izquierda a derecha, están las sugerencias del proyecto en base a los datos de los biométricos, las invitaciones al proyecto y la asignación de un bug respectivamente, finalmente el icono de la derecha es la información del usuario donde se puede ver el perfil y la funcionalidad de cerrar sesión.</li>
      <li><strong>Interior:</strong> Lista de proyectos y botón <strong>Nuevo Proyecto</strong>.</li>
      <li><strong>Proyectos:</strong> Dentro del cuerpo de la página se encuentra la lista de proyectos que tiene el usuario, al darle click en alguno de estos se desbloquea las funcionalidades del proyecto en la barra lateral.</li>
    </ul>
  </section>

  <section style={{ marginLeft: '40px' }}>
    <h2>3. Funcionalidades Principales</h2>
    <p>Esta es la sección donde se explicará cada una de las funcionalidades de la página empezando por cómo crear un proyecto y posteriormente explicando todas las funcionalidades dentro de un proyecto.</p>

    <article>
      <h3>3.1. Cómo Crear un Nuevo Proyecto</h3>
      <ol>
        <li>En el menú principal, luego de iniciar sesión, dale click al botón <strong>Nuevo Proyecto</strong>.</li>
        <li>A continuación, llena los datos, al menos los marcados con un asterisco rojo (Nombre del proyecto, Stack Tecnológico, Descripción del proyecto), para poder ser capaz de darle click al botón de <strong>Crear Proyecto</strong></li>
        <li>(Opcional) Asignar a personas existentes dentro de la aplicación al proyecto junto con un rol entre los disponibles (Cliente, Scrum Master, Product Owner, Developer, QA)</li>
        <li>Haz clic en <strong>Crear Proyecto</strong> para finalizar.</li>
      </ol>
    </article>

    <article>
      <h3>3.2. Cómo Crear una Épica</h3>
      <ol>
        <li>Haz clic en <strong>Product Backlog</strong>.</li>
        <li>Haz clic en <strong>+</strong> en la columna Épicas.</li>
        <li>Elige entre creación por IA o manual.</li>
        <li>Haz clic en <strong>Crear</strong>.</li>
      </ol>
    </article>

    <article>
      <h3>3.3. Cómo Editar y Eliminar una Épica</h3>
      <ol>
        <li>Ir a <strong>Product Backlog</strong>.</li>
        <li>Haz clic en la épica deseada.</li>
        <li>Modifica los datos.</li>
        <li>Haz clic en <strong>Guardar</strong> o en <strong>Eliminar épica</strong>.</li>
      </ol>
    </article>

    <article>
      <h3>3.4. Cómo Crear una Historia de Usuario</h3>
      <ol>
        <li>Entra a <strong>Product Backlog</strong>.</li>
        <li>Haz clic en <strong>+</strong> en la columna Historias de Usuario.</li>
        <li>Elige entre IA o creación manual.</li>
        <li>Haz clic en <strong>Crear Historia</strong>.</li>
      </ol>
    </article>

    <article>
      <h3>3.5. Cómo Editar y Eliminar una Historia de Usuario</h3>
      <ol>
        <li>Selecciona la historia en <strong>Product Backlog</strong>.</li>
        <li>Modifica los datos o elimínala.</li>
        <li>Haz clic en <strong>Guardar cambios</strong> o <strong>Eliminar historia</strong>.</li>
      </ol>
    </article>

    <article>
      <h3>3.6. Cómo Asignar un Estado a una Tarea</h3>
      <ol>
        <li>Entra a <strong>Product Backlog</strong>.</li>
        <li>Arrastra la historia a la columna <strong>Sprints</strong>.</li>
        <li>En <strong>Sprint Backlog</strong>, selecciona una tarea.</li>
        <li>Arrástrala al estado deseado.</li>
      </ol>
    </article>

    <article>
      <h3>3.8. Cómo Crear un Bug</h3>
      <ol>
        <li>Haz clic en <strong>Bugs</strong>.</li>
        <li>Haz clic en <strong>Reportar Bug</strong>.</li>
        <li>Llena la información del bug.</li>
        <li>Haz clic en <strong>Reportar Bug</strong>.</li>
      </ol>
    </article>

    <article>
      <h3>3.9. Cómo Generar una Grabación de Estrés</h3>
      <ol>
        <li>Haz clic en <strong>Bienestar</strong>.</li>
        <li>Haz clic en <strong>+ Nueva Sesión</strong>.</li>
        <li>Conecta el dispositivo Muse.</li>
        <li>Haz clic en <strong>Iniciar grabación</strong> y luego en <strong>Detener</strong>.</li>
        <li>Haz clic en <strong>Guardar Reporte</strong>.</li>
      </ol>
    </article>

    <article>
      <h3>3.10. Cómo Realizar una Retrospectiva del Sprint</h3>
      <ol>
        <li>Haz clic en <strong>Bienestar</strong>.</li>
        <li>Llena las preguntas.</li>
        <li>Haz clic en <strong>Guardar Respuestas</strong>.</li>
      </ol>
    </article>

    <article>
      <h3>3.11. Cómo Editar un Bug</h3>
      <ol>
        <li>Haz clic en <strong>Bugs</strong>.</li>
        <li>Haz clic en <strong>Ver detalle</strong>.</li>
        <li>Edita los datos y sube imágenes si es necesario.</li>
        <li>Haz clic en <strong>Guardar cambios</strong>.</li>
      </ol>
    </article>
      <p>Con estas instrucciones detalladas, se busca facilitar la ejecución de tareas clave dentro del proyecto, optimizando el uso de las herramientas disponibles. Siguiendo estas guías paso a paso, se puede asegurar un flujo de trabajo eficiente y fomentar el desarrollo continuo, promoviendo la mejora en cada sprint y el bienestar en el equipo. Recuerda siempre revisar y guardar los reportes y retrospectivas para contar con información valiosa para futuros proyectos.</p>
  </section>
    </Layout>
  );
}