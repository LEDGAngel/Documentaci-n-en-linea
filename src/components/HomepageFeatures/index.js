import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Manual de Instalación',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        El manual de Instalacion es un manual que servira para el cliente y desarrolladores que quieran
        instalar y configurar el sistema de manera efectiva.
      </>
    ),
  },
  {
    title: 'Manual de Usuario',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        El manual de Usuario es un documento que proporciona información sobre
        cómo utilizar el sistema de manera efectiva.
      </>
    ),
  },
  {
    title: 'Arquitectura',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        La arquitectura es toda la información del software en la parte arquitectónica de la misma, mostrando como es que esta compuesta
        la misma y siendo una ayuda para personas que quieran entender su funcionamiento.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
