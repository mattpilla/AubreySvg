import { css } from 'glamor';
import { ReactComponent as AubreySvg } from './assets/aubrey.svg';
import { useState } from 'react';
import ColorPicker from './components/ColorPicker';

const hslObjToCss = hsl => `hsl(${Math.round(hsl.h)},${Math.round(hsl.s * 100)}%,${Math.round(hsl.l * 100)}%)`;

const createColor = hex => ({
  hex,
  hsl: {}
})

const App = () => {
  const [openPickerId, setOpenPickerId] = useState(-1);
  const [background, setBackground] = useState(createColor('#fdfdfd'));
  const [headband, setHeadband] = useState(createColor('#41e5de'));
  const [jacket, setJacket] = useState(createColor('#d1c239'));
  const [skin, setSkin] = useState(createColor('#ebcda5'));
  const [hair, setHair] = useState(createColor('#ed76d8'));
  const [eyebrows, setEyebrows] = useState(createColor('#954c84'));

  const pickers = [
    {
      id: 0,
      className: 'st0',
      color: background,
      label: 'Background',
      onUpdate: setBackground
    }, {
      id: 1,
      className: 'st1',
      color: headband,
      label: 'Headband & Eyes',
      onUpdate: setHeadband
    }, {
      id: 2,
      className: 'st7',
      color: jacket,
      label: 'Jacket',
      onUpdate: setJacket
    }, {
      id: 3,
      className: 'st3',
      color: skin,
      label: 'Skin',
      onUpdate: setSkin
    }, {
      id: 4,
      className: 'st5',
      color: hair,
      label: 'Hair',
      onUpdate: setHair
    }, {
      id: 5,
      className: 'st6',
      color: eyebrows,
      label: 'Eyebrows',
      onUpdate: setEyebrows
    }
  ];

  const svgRules = {
    ' .st2': {
      fill: hslObjToCss({
        h: hair.hsl.h,
        s: hair.hsl.s / 2.366,
        l: hair.hsl.l / 1.578
      }),
    }
  };
  pickers.forEach(({ className, color }) => {
    svgRules[` .${className}`] = {
      fill: hslObjToCss(color.hsl)
    };
  });

  const onOpen = id => {
    if (openPickerId === id) {
      setOpenPickerId(-1);
      return;
    }
    setOpenPickerId(id);
  }

  return (
    <div className="svg-container">
      <AubreySvg {...css(svgRules)} />
      <div className="picker-container">
        {pickers.map(({ id, color, label, onUpdate }) => (
          <ColorPicker
            key={id}
            color={color}
            label={label}
            open={openPickerId === id}
            onOpen={() => onOpen(id)}
            onUpdate={onUpdate} />
        ))}
      </div>
    </div>
  )
}

export default App;
