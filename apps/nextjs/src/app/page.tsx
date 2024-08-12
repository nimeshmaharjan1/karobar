import type { FC } from "react";
import { LapTimerIcon } from "@radix-ui/react-icons";
import { Bell, History, LucideIcon, MailCheck, Send } from "lucide-react";

import { Button } from "@karobar/ui/button";
import { ScrollArea } from "@karobar/ui/scroll-area";

import Empty from "./_components/empty";

const HomePage = () => {
  return (
    <main>
      <section className="yellow-background bg-primary py-6 text-primary-foreground">
        <div className="container">
          <header className="flex items-center justify-between">
            <LapTimerIcon width={24} height={24}></LapTimerIcon>
            <h2 className="text-xl font-bold">Splitify</h2>
            <Bell width={24} height={24}></Bell>
          </header>
          <main className="flex flex-col items-center justify-center gap-3 py-10 pt-12">
            <h2 className="text-4xl font-bold">
              0
              <sup>
                <span className="text-[1rem] font-bold">$</span>
              </sup>
            </h2>
            <p className="text-sm font-medium">Available Balance</p>
          </main>
          <footer className="flex items-center justify-center gap-6">
            <ActionButton title="Send" Icon={Send}></ActionButton>
            <ActionButton title="Request" Icon={MailCheck}></ActionButton>
            <ActionButton title="History" Icon={History}></ActionButton>
          </footer>
        </div>
      </section>
      <section className="activity-section container py-6">
        <header className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold">Activity</h2>
          <p>View All</p>
        </header>
        <ScrollArea className="h-44 py-4">
          <Empty></Empty>
        </ScrollArea>
      </section>
    </main>
  );
};

export default HomePage;

const ActionButton: FC<{
  Icon: LucideIcon;
  title: string;
}> = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        <Button variant={"primary-outline"}>
          <Icon width={20} height={20}></Icon>
        </Button>
      </div>
      <span className="text-sm font-bold">{title}</span>
    </div>
  );
};
