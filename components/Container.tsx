import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';
type Props = any & {
    children: ReactNode;
  };
const Wrapper = styled.div`

`
const Container: FC<Props> = ({children}) => {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Container