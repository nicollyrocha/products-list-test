import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { InputAdornment, Input, FormControl, InputLabel } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface IHeaderProps {
 handleChangeSearch: (
  ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => void;
 search: string;
}

export const Header = ({ handleChangeSearch, search }: IHeaderProps) => {
 return (
  <Box
   className="tw-fixed tw-z-50 md:tw-relative tw-w-full tw-mt-[0px]"
   sx={{ flexGrow: 1 }}
  >
   <AppBar
    className="tw-bg-neutral-900 tw-flex tw-flex-row tw-items-center"
    position="static"
   >
    <FormControl
     className="tw-text-white tw-mb-5 tw-w-[95%] md:tw-w-[25ch]"
     sx={{ m: 1, width: "25ch", fontFamily: "Noto Sans Multani" }}
     variant="standard"
    >
     <InputLabel
      style={{ fontFamily: "Noto Sans Multani" }}
      className="tw-text-white"
      htmlFor="standard-adornment-search"
     >
      Buscar...
     </InputLabel>
     <Input
      onChange={handleChangeSearch}
      color="secondary"
      style={{ fontFamily: "Noto Sans Multani" }}
      className="tw-text-white tw-color-white"
      id="standard-adornment-search"
      value={search}
      endAdornment={
       <InputAdornment position="end">
        <SearchOutlinedIcon className="tw-text-white" />
       </InputAdornment>
      }
     />
    </FormControl>
    <div className="tw-text-lg md:tw-flex tw-justify-center tw-w-full tw-hidden">
     Products List TBB
    </div>
   </AppBar>
  </Box>
 );
};
