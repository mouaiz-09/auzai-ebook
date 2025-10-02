import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import IconButton from '@mui/joy/IconButton';
import CloseRounded from '@mui/icons-material/CloseRounded';

import "./Styles/UI.css"
export default function Selecter({Options , text }) {
  const [value, setValue] = React.useState('');
  const action = React.useRef(null);

  const result = Options.map((O)=>{
    return (
        <Option key={O} value={O}>{O}</Option>
    )
  })



  return (
    <Select
      action={action}
      value={value}
      placeholder={text}
      onChange={(event, newValue) => setValue(newValue)}
      {...(value && {
        // display the button and remove select indicator
        // when user has selected a value
        endDecorator: (
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onMouseDown={(event) => {
              // don't open the popup when clicking on this button
              event.stopPropagation();
            }}
            onClick={() => {
              setValue(null);
              action.current?.focusVisible();
            }}
          >
            <CloseRounded />
          </IconButton>
        ),
        indicator: null,
      })}
      sx={{ minWidth: 160 }}
    >
     {result}
    </Select>
  );
}
