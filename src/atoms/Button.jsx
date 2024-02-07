import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './Button.module.scss';
import Spinner from './svgs/Spinner';

export default function Button(props) {
  const {
    href,
    children,
    className,
    fullWidth,
    loading,
    disabled,
    ...childrenProps
  } = props;

  const classNames = (
    [styles.button, className].join(' ')
    + (fullWidth ? styles['--full-width'] : '')
  ).trim();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {href ? (
        <Link href={href} className={classNames} {...childrenProps}>
          {loading && <Spinner />}
          {children}
        </Link>
      ) : (
        <button
          className={classNames}
          {...childrenProps}
          disabled={disabled}
          type="button"
        >
          {loading && <Spinner />}
          {children}
        </button>
      )}
    </>
  );
}

Button.defaultProps = {
  children: null,
  className: null,
  disabled: null,
  fullWidth: false,
  href: null,
  loading: false,
};

Button.propTypes = {
  /**
   * What goes in the button
   */
  children: PropTypes.node,
  /**
   * Apply external classname
   */
  className: PropTypes.string,
  /**
   * Is the button disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Is the button full width?
   */
  fullWidth: PropTypes.bool,
  /**
   * If set this will be a link and not a button
   */
  href: PropTypes.string,
  /**
   * Is the button loading?
   */
  loading: PropTypes.bool,
};
