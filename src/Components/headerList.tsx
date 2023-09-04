import IProductsList from "../models";

export const HeaderList = ({ list }: { list: IProductsList }) => {
 return (
  <div className="md:tw-w-full tw-text-left">
   <div className="tw-flex tw-justify-self-start tw-ml-1 md:tw-ml-3">
    {list.length} resultados
   </div>
   <hr className="tw-border-t tw-border-t-neutral-900 tw-w-[99%] lg:tw-w-full tw-flex tw-justify-start" />
  </div>
 );
};
