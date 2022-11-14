import { useRef } from "react";
import { MonitorType } from "./interface";

const BRAND_NAMES = ["Dell", "HP", "IBM", "Lenovo"];
const SCREEN_SIZES = [17, 19, 21, 23, 25];

type NewMonitorFormProps = {
  onAddMonitor: (data: MonitorType) => void;
};

export const NewMonitorForm: React.FC<NewMonitorFormProps> = ({
  onAddMonitor,
}: NewMonitorFormProps) => {
  const formRef = useRef<HTMLInputElement[]>(null);

  const handleAddMonitor = (_e: any) => {
    let data: MonitorType = {
      productNumber: "",
      brand: "",
      screenSize: 0,
      price: 0,
      quantity: 0,
    };

    if (formRef.current === null) return;

    for (let elem of formRef.current) {
      data = { ...data, [elem.name]: elem.value };
    }

    onAddMonitor(data);
  };

  return (
    <fieldset>
      <form action="" ref={formRef}>
        <legend>Add to inventory</legend>

        <label htmlFor="productNumber">Product Number: </label>
        <input type="text" name="productNumber" />
        <br />

        <label htmlFor="brand">Brand: </label>
        <select name="brand">
          {BRAND_NAMES.map((brand) => {
            return <option value={brand}>{brand}</option>;
          })}
        </select>
        <br />

        <label htmlFor="screenSize">Screen Size: </label>
        <select name="screenSize">
          {SCREEN_SIZES.map((sizes) => {
            return <option value={sizes}>{sizes}</option>;
          })}
        </select>
        <br />

        <label htmlFor="price">Price: </label>
        <input type="number" name="price" />
        <br />

        <label htmlFor="quantity">Quantity: </label>
        <input type="number" name="quantity" />
        <br />
      </form>
      <input type="button" onClick={handleAddMonitor} value="Add Monitor" />
    </fieldset>
  );
};
