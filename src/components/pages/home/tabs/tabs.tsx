import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsHomeProps } from "./tabs.interface";
import { StatusEnum } from "@/constants/tabs";

function TabsHome({ className, currentTab, onTabChange }: TabsHomeProps) {
  return (
    <Tabs value={currentTab} onValueChange={onTabChange} className={className}>
      <TabsList>
        <TabsTrigger value={StatusEnum.ALL}>All</TabsTrigger>
        <TabsTrigger value={StatusEnum.TODO}>Upcoming</TabsTrigger>
        <TabsTrigger value={StatusEnum.DONE}>Completed</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default TabsHome;
