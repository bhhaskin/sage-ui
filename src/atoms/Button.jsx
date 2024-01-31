import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./Button.module.scss";
import Spinner from "./svgs/Spinner";

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
    [styles.button, className].join(" ") +
    (fullWidth ? styles["--full-width"] : "")
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
  href: null,
  className: null,
  fullWidth: false,
  loading: false,
  disabled: null,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  href: PropTypes.string,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.node,
};
