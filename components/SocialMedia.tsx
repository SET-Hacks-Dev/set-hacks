import { renderIcon } from "./render";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondaryVariant};
  height: 50px;
  width: 50px;
  margin-right: 1.2rem;
  transition: 0.4s all cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    opacity: 0.8;
  }
`;

type SocialMediaProps = {
  icon: any;
  url: string;
};

const SocialMedia = ({ icon, url }: SocialMediaProps) => {
  return (
    <a href={url}>
      <StyledContainer>{renderIcon(icon, 26)}</StyledContainer>
    </a>
  );
};

export default SocialMedia;
