import { ChromePicker } from 'react-color';

const ColorPicker = (props) => {
  const {
    color,
    label,
    open,
    onOpen,
    onUpdate
  } = props;

  return (
    <div className="picker-holder">
      <div className="picker" onClick={onOpen}>
        <div className="picker-color" style={{ backgroundColor: color.hex }} >
        </div>
        <div className="picker-label">{label}</div>
        <div className="picker-icon">{open ? '▲' : '▼'}</div>
      </div>
      {open && (
        <div className="picker-panel">
          <ChromePicker
            color={color}
            onChangeComplete={onUpdate}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
