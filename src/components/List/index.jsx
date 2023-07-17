import { ListWrapper, Image, Text } from './list.style';

const List = ({ logo, text, description, $padding }) => {
  return (
    <ListWrapper>
      <Image src={logo} $padding={$padding} alt={description} />
      <Text>{text}</Text>
    </ListWrapper>
  );
};

export default List;
