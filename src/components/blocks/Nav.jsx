import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './Nav.module.scss';

export default function Nav(props) {
  const { brand, ...childProps } = props;
  return (
    <nav className={styles.nav} {...childProps}>
      {brand && (
      <Link href={brand.href}>{brand.label}</Link>
      )}
    </nav>
  );
}

Nav.defaultProps = {
  brand: {
    label: 'B R A N D',
    href: '#',
  },
};

Nav.propTypes = {
  /**
   * Brand label and href
   */
  brand: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
};
