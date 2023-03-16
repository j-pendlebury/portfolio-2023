import styled from 'styled-components';
import { coral } from '../../../../utils/colours';

type HeaderProps = {
  title: string
  year: number
};

const StyledLine = styled.div`
  border-top: 5px solid ${coral};
  margin: 15px 0 ;
`;

const Year = styled.div`
  align-self: flex-end;
`;

const Header = ({ title, year }: HeaderProps) => {
  return (
    <>
      <div>{title}</div>
      <StyledLine />
      <Year>{year}</Year>
    </>
  );
};

export default Header;
