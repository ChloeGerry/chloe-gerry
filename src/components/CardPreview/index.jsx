import { CardPreviewImage, CardPreviewTitle } from './cardPreview.style';

const CardPreview = ({ screen, title }) => {
  return (
    <>
      <CardPreviewImage src={screen} alt="Capture d'écran de projets de code" />
      <CardPreviewTitle>{title}</CardPreviewTitle>
    </>
  );
};

export default CardPreview;
