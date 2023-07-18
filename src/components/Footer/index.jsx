import { FooterStyled, LinksWrapper } from './footer.style';

const Footer = () => {
  return (
    <FooterStyled id="contact">
      <span>© Chloé Gerry</span>
      <LinksWrapper>
        <a href="https://linkedin.com/in/chloé-gerry-ab98a5264">
          <img src="/assets/linkedIn-logo.svg" />
        </a>
        <a href="https://github.com/ChloeGerry">
          <img src="/assets/github-logo.svg" />
        </a>
      </LinksWrapper>
    </FooterStyled>
  );
};

export default Footer;
