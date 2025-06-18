import { pastelColors } from './constants';
import './Tag.scss';

interface TagProps {
  status: boolean;
  label: string;
  index: number;
}

const Tag: React.FC<TagProps> = ({ status, label, index }) => {
  const color = index !== -1 ? pastelColors[index] : null;
  const backgroundColor = color ? (status ? color.hover : color.base) : '';

  return (
    <>
      {color ? (
        <div
          className="tag-container"
          style={{
            backgroundColor,
            border: `1px solid ${backgroundColor}`,
            color: color.hover,
          }}
        >
          <span>{label}</span>
        </div>
      ) : null}
    </>
  );
};

export { Tag };
