import { MonitorType } from "./interface";

type MonitorInventoryProps = {
  monitors: MonitorType[];
};

export const MonitorInventory: React.FC<MonitorInventoryProps> = ({
  monitors,
}: MonitorInventoryProps) => {
  return (
    <>
      <br />

      <table border={1} cellPadding="3" style={{ fontSize: 12 }}>
        <thead>
          <tr>
            <th>Product Number</th>
            <th>Brand</th>
            <th>Screen Size</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {monitors.map((monitor: MonitorType) => {
            return (
              <tr>
                <td>{monitor.productNumber}</td>
                <td>{monitor.brand}</td>
                <td>{monitor.screenSize}</td>
                <td>{monitor.price}</td>
                <td>{monitor.quantity}</td>
              </tr>
            );
          })}
          <tr>
            <td>P1234</td>
            <td>HP</td>
            <td>25</td>
            <td>120.00</td>
            <td>30</td>
          </tr>
          <tr>
            <td>P4321</td>
            <td>Lenovo</td>
            <td>21</td>
            <td>100.00</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>

      <input type="button" value={`Sell P1234 Monitor`} />
    </>
  );
};
