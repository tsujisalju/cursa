import { HorizontalScrollContainer } from "@/components/horizontal-scroll";
import { logs } from "@/data/logs";
import LogItem from "./log-item";

export default function LogList() {
  return (
    <HorizontalScrollContainer className="h-full grow grid grid-rows-3 grid-flow-col-dense auto-cols-max gap-4 overflow-x-auto lg:py-8 lg:px-4">
      {[...logs]
        .sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA < dateB ? 1 : -1;
        })
        .map((log, index) => (
          <LogItem key={index} log={log} />
        ))}
    </HorizontalScrollContainer>
  );
}
