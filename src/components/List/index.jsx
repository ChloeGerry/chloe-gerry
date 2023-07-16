import { ListWrapper, Image, Text } from './list.style';

const List = ({ logo, text, description }) => {
  return (
    <ListWrapper>
      <Image src={logo} alt={description} />
      <Text>{text}</Text>
    </ListWrapper>
  );
};

export default List;
