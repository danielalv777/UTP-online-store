import { useEffect, useState } from 'react';
import { pastelColors } from './constants';
import './Tag.scss';
import { classnames } from '../../utils/classnames';

interface TagProps {
  status: boolean;
  label: string;
  index: number;
  onChange?: (selectedValue: boolean) => void;
}

const Tag: React.FC<TagProps> = ({ status, label, index, onChange }) => {
  const [selected, setSelected] = useState<boolean>(status ?? false);
  const color = index !== -1 ? pastelColors[index] : null;
  const backgroundColor = color ? (selected ? color.hover : color.base) : '';

  const handleClickTag = () => {
    setSelected((prevSelected) => {
      const newSelected = !prevSelected;
      if (onChange) {
        onChange(newSelected);
      }
      return newSelected;
    });
  };

  useEffect(() => {
    setSelected(status);
  }, [status]);

  return (
    <>
      {color ? (
        <div
          className="tag-container"
          style={{
            backgroundColor,
            border: `1px solid ${backgroundColor}`,
            color: selected ? '#FFF' : '#000',
          }}
          onClick={handleClickTag}
        >
          <span
            className={classnames(['span-tag', selected ? 'Selected' : ''])}
          >
            {label}
          </span>
        </div>
      ) : null}
    </>
  );
};

export { Tag };
