import { useState } from "react";
import { MonitorType } from "./interface";
import { MonitorFilters } from "./MonitorFilters";
import { MonitorInventory } from "./MonitorInventory";
import { NewMonitorForm } from "./NewMonitorForm";

type MonitorStoreProps = {
  storeName: string;
};

export const MonitorStore: React.FC<MonitorStoreProps> = ({ storeName }) => {
  const onAddMonitor = (data: MonitorType) => {
    console.log(data);

    return;
  };

  const [filteredMonitors, setFilteredMonitors] = useState<MonitorType[]>([]);

  return (
    <>
      <h1>{storeName}</h1>

      <NewMonitorForm onAddMonitor={onAddMonitor} />
      <MonitorFilters />
      <MonitorInventory monitors={filteredMonitors} />
    </>
  );
};
