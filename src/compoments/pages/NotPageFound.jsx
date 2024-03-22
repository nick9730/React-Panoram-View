import styled from 'styled-components'

const Notpage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Roboto';
  background-color: aquamarine;
  font-size: 40px;
`

export default function NotPageFound() {
  return (
    <Notpage>Not Page Found</Notpage>
  )
}
