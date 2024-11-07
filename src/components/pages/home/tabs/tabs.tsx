import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Props } from "@/models/props";

function TabsHome({ className }: Pick<Props, "className">) {
  return (
    <Tabs defaultValue="all" className={className}>
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default TabsHome;
