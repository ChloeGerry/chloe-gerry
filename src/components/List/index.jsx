import { ListWrapper, Image, Text } from './list.style';

const List = ({ logo, text, description, $padding, $filter }) => {
  return (
    <ListWrapper>
      <Image
        $filter={$filter}
        src={logo}
        $padding={$padding}
        alt={description}
      />
      <Text>{text}</Text>
    </ListWrapper>
  );
};

export default List;
