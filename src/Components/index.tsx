import { Filters } from "./filters";
import { Header } from "./header";
import productsList from "../Data/products.json";
import ProductsList from "./productsList";
import { useState } from "react";
import IProductsList from "../models";
import { HeaderList } from "./headerList";

export const MainPage = () => {
 const [selectedFilters, setSelectedFilters] = useState<Array<string> | []>([]);
 const [filteredItems, setFilteredItems] = useState<IProductsList>(
  productsList.data.nodes
 );
 const [search, setSearch] = useState<string>("");

 const filteredList = filteredItems.filter((item: IProductObject) =>
  item.name.toLowerCase().includes(search.toLowerCase())
 );

 const handleChangeSearch = (
  ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => {
  setSearch(ev.target.value);
 };

 return (
  <div className="tw-mt-0">
   <Header handleChangeSearch={handleChangeSearch} search={search} />
   <div className="tw-flex tw-flex-col tw-items-center md:tw-items-start md:tw-flex-row tw-mb-10 md:tw-mt-10 tw-gap-5">
    <Filters
     list={productsList.data.nodes}
     selectedFilters={selectedFilters}
     setSelectedFilters={setSelectedFilters}
     setFilteredItems={setFilteredItems}
    />
    <div className="tw-flex tw-flex-col md:tw-ml-0">
     <HeaderList list={filteredList} />
     <ProductsList list={filteredList} />
    </div>
   </div>
  </div>
 );
};
