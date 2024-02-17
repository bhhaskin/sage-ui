'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

export default function Input(props) {
  const {
    className,
    placeholder,
    type,
    onChange,
    ...childrenProps
  } = props;

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    onChange(e);
  };

  const handleFocus = () => {
    setError(false);
  };

  const handleBlur = (e) => {
    if (!e.target.validity.valid) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const containerClassNames = () => {
    const classNameArray = [styles.input, className];

    if (error) {
      classNameArray.push(styles['--error']);
    }

    return classNameArray.join(' ').trim();
  };

  return (
    <div className={containerClassNames()}>
      <input
        {...childrenProps}
        className={styles.input__control}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
}
Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  className: null,
  // eslint-disable-next-line no-unused-vars
  onChange: (e) => {},
  placeholder: null,
  type: 'text',
};
