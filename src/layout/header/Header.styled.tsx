import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import { Box, FormControl, Menu } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import breakpoints from "@/themes/themes/breakpoints";

export const SearchText = styled(Box)`
  background: #eee;
  border-radius: 15px;
  height: 43px;
  ${breakpoints.xs} {
    margin-top: -45px;
  }
  ${breakpoints.md} {
    margin-top: 10px;
  }
  ${breakpoints.lg} {
    margin-top: 26px;
    margin-left: 10px;
    width: 200px;
  }
  ${breakpoints.xl} {
    margin-top: 26px;
    margin-left: 10px;
    width: 300px;
  }
`;

export const IconSearch = styled(SearchIcon)`
  margin-bottom: -7px;
  margin-right: 20px;
  ${breakpoints.xs} {
    margin-left: 40px;
  }
  ${breakpoints.lg} {
    margin-left: -20px;
    position: relative;
    top: -30px;
    left: 190px;
  }
  ${breakpoints.xl} {
    margin-left: 0px;
    position: static;
  }
`;

export const StyledInputBase = styled(InputBase)`
  padding: 5px 15px;
`;

export const StyledTypographyLogo = styled(Typography)`
  display: block;
  padding-right: 10px;
  font-size: 30px;
  font-weight: 700;
  height: 43px;
  font-family: sans-serif;
  cursor: pointer;
  ${breakpoints.xs} {
    font-size: 15px;
    margin-top: 13px;
  }
  ${breakpoints.md} {
    font-size: 15px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
    margin-top: 32px;
  }
  ${breakpoints.xl} {
    font-size: 24px;
    margin-top: 30px;
  }
  ${breakpoints["2xl"]} {
    font-size: 30px;
    margin-top: -15px;
  }
`;


export const StyledSelect = styled(Select)`
  height: 40px;
  font-size: 16px;
  background-color: transparent; 
  box-shadow: none; 
  border: none;
  outline: none;
  
  & .MuiOutlinedInput-notchedOutline {
    border: none !important; 
  }

  &:hover {
    background-color: transparent; 
  }

  border-radius: 0px; 

  ${breakpoints.xs} {
    margin-top: 10px;
  }

  ${breakpoints.lg} {
    margin-top: 10px;
  }
`;


export const VisibleHidden = styled(FormControl)`
  width: 150px;
  ${breakpoints.xs} {
    visibility: hidden;
  }
  ${breakpoints.md} {
    visibility: visible;
    width: 300px;
    margin-left: -5px;
  }
  ${breakpoints.lg} {
    visibility: visible;
    margin-left: 5px;
    margin-top: 18px;
    width: 130px;
  }
  ${breakpoints.xl} {
    visibility: visible;
    margin-left: 30px;
    margin-top: 18px;
    width: 160px;
  }
`;

export const MainHeaderBox = styled(Box)`
  padding: 0 5%;
  display: flex;
  background-color: white;
  color: black;

  ${breakpoints.xs} {
    flex-direction: column;
     padding-bottom: 15px;
  }
  ${breakpoints.lg} {
    flex-direction: row;
     padding-bottom: 15px;
  }
  ${breakpoints.xl} {
    flex-direction: row;
    padding: 0 5%;
     padding-bottom: 15px;
  }
`;

export const SubBoxes = styled(Box)`
  display: flex;
  ${breakpoints.xs} {
    justify-content: space-between;
  }
  ${breakpoints.lg} {
    justify-content: start;
  }
`;
export const SelectBox = styled(Box)`
  display: flex;
  ${breakpoints.xs} {
    margin-top: 10px;
    justify-content: center;
  }

  ${breakpoints.lg} {
    margin-top: 20px;
    justify-content: start;
  }
  ${breakpoints.xl} {
    margin-top: 20px;
    justify-content: none;
  }
`;
export const IconBox = styled(Box)`
  ${breakpoints.xs} {
    margin-left: 90px;
    margin-top: 20px;
  }
  ${breakpoints.md} {
    margin-left: 260px;
    margin-top: 20px;
  }
  ${breakpoints.lg} {
    margin-left: 10px;
    margin-top: 30px;
  }
  ${breakpoints.xl} {
    margin-left: 100px;
    margin-top: 30px;
  }
  ${breakpoints["2xl"]} {
    margin-left: 110px;
  }
`;

export const SearchBox = styled(Box)`
  ${breakpoints.md} {
    display: flex;
    gap: 30px;
  }
  ${breakpoints.lg} {
    display: flex;
    gap: 0px;
  }
`;

export const MenuItemStyled = styled(Menu)`
  width: 100%;
`;

export const DrawerContent = styled(Box)`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #fff;
`;

export const MenuHeading = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding:5px
  margin-bottom:10px
`;
export const SideHeading = styled(Typography)`
  font-size: 25px;
  font-weight: 600;
`;
export const MenuItems = styled(Box)`
  margin: 10px;
  font-size: 20px;
  border-bottom: 1px dashed;
`;
