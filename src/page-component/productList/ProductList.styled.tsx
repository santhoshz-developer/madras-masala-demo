import breakpoints from "@/themes/themes/breakpoints";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BoxWrapper = styled(Box)`
  margin-top: 1rem;
  padding: 0 4%;
  ${breakpoints.sm} {
    padding: 0 4%;
  }
`;

export const TitleTypography = styled(Typography)`
  font-family: "Inter", sans-serif;
  color: #333;
  margin-left: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
  ${breakpoints.md} {
    font-size: 2rem;
  }
`;

export const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Default for small screens */
  gap: 12px;
  padding: 12px;
  justify-items: center;

  ${breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${breakpoints.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${breakpoints.lg} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${breakpoints.xl} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ViewAllButton = styled(Button)`
  border-radius: 6px;
  color: darkorange;
  font-size: 14px;
  padding: 6px 12px;
  border-color: orange;
  font-weight: 550;
  &:hover {
    color: white;
    background-color: orange;
    border-color: darkorange;
  }

  ${breakpoints.xs} {
    font-size: 13px;
    padding: 8px 10px;
  }
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
