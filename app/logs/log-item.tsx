import ASCIISpinner from "@/components/ascii-spinner";
import TransitionLink from "@/components/transition-link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getCharacter } from "@/data/art/character";
import { isLessThan1Week, Log } from "@/data/logs";
import Tilt from "react-parallax-tilt";

export default function LogItem({ log }: { log: Log }) {
  const date = new Date(log.date).toLocaleDateString();
  const isDeciphering = isLessThan1Week(new Date(log.date));

  const decipherPlaceholder =
    "look, i know you're excited to read this, but let it cook first. they are intentionally delayed so that they are irrelevant, and we can come back and read this as strangers together.";

  return (
    <TransitionLink
      href={!isDeciphering ? `/logs/${log.id}` : ""}
      className={"w-sm max-w-sm"}
      variant="zoom-in"
    >
      <Tilt
        tiltReverse={true}
        scale={1.02}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        className={`h-full w-full hover:z-10 parallax-tilt-outer relative flex`}
      >
        <Card className={`w-full ${isDeciphering && "opacity-50"}`}>
          <CardHeader className="font-mono">
            <CardTitle>{log.title}</CardTitle>
            <CardDescription>{date}</CardDescription>
            <CardAction>
              {!isDeciphering ? (
                <div>
                  {log.authors.map((ch) => (
                    <Tooltip key={ch}>
                      <TooltipTrigger>
                        <Avatar>
                          <AvatarImage src={getCharacter(ch)?.icon} />
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <span className="font-sans">
                          {getCharacter(ch)?.name ?? "Unknown"}
                        </span>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              ) : (
                <ASCIISpinner />
              )}
            </CardAction>
          </CardHeader>
          <CardContent className="h-full w-full text-sm">
            {!isDeciphering ? (
              <span className="font-mono">{log.excerpt ?? ""}</span>
            ) : (
              <span className="font-redacted">{decipherPlaceholder}</span>
            )}
          </CardContent>
          <CardFooter>
            {!isDeciphering ? (
              <Badge className="font-sans uppercase">{log.type}</Badge>
            ) : (
              <Dialog>
                <DialogTrigger>
                  <span className="font-mono text-sm">🛈 Deciphering...</span>
                </DialogTrigger>
                <DialogContent className="font-mono" showCloseButton={false}>
                  <DialogHeader>
                    <DialogTitle>Deciphering signal...</DialogTitle>
                    <DialogDescription>
                      This log signal has just been received and will take time
                      to be revealed. It will take around a week. By the time it
                      publishes, it will no longer be relevant, where we can
                      dissect it with a fresh perspective, rather than in the
                      moment.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button">Understood</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
          </CardFooter>
        </Card>
      </Tilt>
    </TransitionLink>
  );
}
