import { useEffect, useState } from 'react';
import { classnames } from '../../utils/classnames';
import './CheckBoxCustom.scss';
import CheckIcon from '../../../assets/check-icon';
import type { CheckBoxCustomProps } from './types';

const CheckBoxCustom: React.FC<CheckBoxCustomProps> = ({
  containerCheckboxClassName,
  textLabel,
  classNameCheck,
  onChange,
  error,
  isChecked = false,
}) => {
  const [selected, setSelected] = useState<boolean>(isChecked ?? false);

  const handleClickCheckbox = () => {
    setSelected((prevSelected) => {
      const newSelected = !prevSelected;
      if (onChange) {
        onChange(newSelected);
      }
      return newSelected;
    });
  };

  useEffect(() => {
    setSelected(isChecked);
  }, [isChecked]);

  return (
    <>
      <div
        className={classnames([
          containerCheckboxClassName,
          'checkbox-control-container',
        ])}
      >
        <button
          className={classnames([
            classNameCheck,
            'checkbox-control',
            selected === true ? 'Selected' : null,
            error ? 'error-checkbox' : null,
          ])}
          type="button"
          onClick={handleClickCheckbox}
        >
          {selected === true && <CheckIcon />}
        </button>

        {typeof textLabel === 'string' && textLabel.length > 0 && (
          <span
            className={classnames([
              'span-title-checkbox',
              error ? 'error-checkbox-span' : null,
            ])}
          >
            {textLabel}
          </span>
        )}
      </div>
      {error && <span className="error-message-checkbox">* {error}</span>}
    </>
  );
};

export { CheckBoxCustom };
