import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IProductsList from "../models";

interface IFilters {
 list: IProductsList;
 selectedFilters: Array<string>;
 setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
 setFilteredItems: React.Dispatch<React.SetStateAction<IProductsList>>;
}

export const Filters = ({
 list,
 selectedFilters,
 setSelectedFilters,
 setFilteredItems,
}: IFilters) => {
 const map = new Map();

 list.forEach((item: IProductObject) => {
  map.set(item.category._id, item);
 });

 const uniqueList = Array.from(map.values());

 const handleFilterButtonClick = (selectedCategory: string) => {
  if (selectedFilters.includes(selectedCategory)) {
   let filters = selectedFilters.filter(
    (el: string) => el !== selectedCategory
   );
   setSelectedFilters(filters);
  } else {
   setSelectedFilters([...selectedFilters, selectedCategory]);
  }
 };

 React.useEffect(() => {
  filterItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [selectedFilters]);

 const filterItems = () => {
  if (selectedFilters.length > 0) {
   let tempItems = selectedFilters.map((selectedCategory: string) => {
    let temp = list.filter(
     (item: IProductObject) => item.category.name === selectedCategory
    );
    return temp;
   });
   setFilteredItems(tempItems.flat());
  } else {
   setFilteredItems([...list]);
  }
 };

 return (
  <>
   <div className="tw-flex tw-flex-col tw-text-left tw-mx-3 tw-mt-24 md:tw-mt-0">
    <div style={{ fontFamily: "Noto Sans Multani" }}>Filtros</div>
    <hr className="tw-border-t tw-border-t-neutral-900 tw-w-[99%] lg:tw-w-full tw-flex tw-justify-start" />
    <div className="tw-flex md:tw-flex-row">
     <FormGroup className="tw-flex tw-flex-row md:tw-flex-col tw-justify-self-center">
      {uniqueList.map((product: IProductObject) => {
       const numberOfItems = list.filter(
        (productList: IProductObject) =>
         productList.category._id === product.category._id
       );
       return (
        <FormControlLabel
         key={product.category._id}
         style={{ fontFamily: "Noto Sans Multani" }}
         control={
          <Checkbox
           value={product.category._id}
           onChange={(e) => {
            handleFilterButtonClick(product.category.name);
           }}
          />
         }
         label={`${product.category.name} (${numberOfItems.length})`}
        />
       );
      })}
     </FormGroup>
    </div>
   </div>
  </>
 );
};
