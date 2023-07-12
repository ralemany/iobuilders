import { Input } from '@chakra-ui/react'
import { ChangeEventHandler } from 'react';

interface CustomInputText {
  handleChange: ChangeEventHandler;
  value: string;
  type?: string;
}

function InputText(props: CustomInputText) {
  const {
    handleChange,
    value,
    type = "text",
  } = props;

  return (
    <>
      <Input
        type={type}
        bg='white'
        onChange={handleChange}
        value={value}
      />
    </>
  )
}

export default InputText;
