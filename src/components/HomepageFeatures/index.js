import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    link: '/docs/getting-started/',
    image: require('@site/static/img/quickstart.png').default,
    description: (
      <>
        Get up and running with Canine in minutes. Follow our step-by-step guide
        to deploy your first application on Kubernetes.
      </>
    ),
  },
  {
    title: 'Basics',
    link: '/docs/basics/',
    image: require('@site/static/img/basics.png').default,
    description: (
      <>
        Learn the core concepts of Canine including clusters, projects, services,
        background workers, volumes, and integrations.
      </>
    ),
  },
  {
    title: 'Technical Details',
    link: '/docs/technical-details/',
    image: require('@site/static/img/advanced.png').default,
    description: (
      <>
        Dive deep into Canine's architecture and explore our comprehensive
        Kubernetes crash course for advanced users.
      </>
    ),
  },
];

function Feature({image, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={link} className={styles.featureLink}>
            {title}
          </Link>
        </Heading>
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
