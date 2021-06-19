import {media, theme} from "../theme";

import {renderIcon} from "./render";
import styled from "styled-components";

type StyledChipProps = {
    accent: boolean;
};

type ChipProps = {
    icon: any;
    label: string;
    accent?: boolean;
};

const StyledChip = styled.p<StyledChipProps>`
  color: ${({theme, accent}: { theme: any; accent: boolean }) => accent ? theme.colors.brand[400] : theme.colors.brand[800]};
  font-size: ${({theme}) => theme.fontSizes.lg};
  ${media.lg`font-size: ${theme.fontSizes.xl}`};
  font-weight: 600;
  margin-right: 1rem;
`;

const Chip = ({icon, label, accent = false}: ChipProps) => {
    return (
        <StyledChip accent={accent} className="mr-5">
            {renderIcon(icon)}
            <span style={{marginLeft: "10px"}}>{label}</span>
        </StyledChip>
    );
};

export default Chip;
