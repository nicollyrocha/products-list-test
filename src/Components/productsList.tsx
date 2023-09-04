import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IProductsList from "../models";

export default function ProductsList({ list }: { list: IProductsList }) {
 return (
  <>
   <div className="tw-flex tw-text-start tw-flex-col tw-w-full sm:tw-items-center md:tw-items-start ">
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-w-full tw-justify-items-center lg:tw-grid-cols-3 tw-gap-5">
     {list.map((product: IProductObject) => (
      <Card
       key={product.id}
       style={{ fontFamily: "Noto Sans Multani" }}
       className="tw-text-center tw-w-[97%] sm:tw-max-w-[90%] md:tw-max-w-[95%] lg:tw-w-[410px]"
      >
       <img
        alt={product.name}
        className="tw-object-contain tw-max-h-[140px]"
        src={product.images[0].asset.url}
        title={product.name}
        style={{ fontFamily: "Noto Sans Multani" }}
       />
       <CardContent>
        <Typography
         style={{ fontFamily: "Noto Sans Multani" }}
         gutterBottom
         variant="body2"
         component="div"
         className="tw-font-bold"
        >
         {product.name}
        </Typography>
        <Typography
         style={{ fontFamily: "Noto Sans Multani" }}
         gutterBottom
         variant="caption"
         component="div"
        >
         {product.shortDescription}
        </Typography>
       </CardContent>
      </Card>
     ))}
    </div>
   </div>
  </>
 );
}
