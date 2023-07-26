import { ListWrapper, Image, Text } from './list.style';

const List = ({ logo, text, description, $filter }) => {
  return (
    <ListWrapper>
      <Image $filter={$filter} src={logo} alt={description} />
      <Text>{text}</Text>
    </ListWrapper>
  );
};

export default List;
