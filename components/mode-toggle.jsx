import { Sun } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const theme = "light";

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "h-9 w-9",
        theme === "dark" ? "text-red-500" : "text-blue-500"
      )}
    >
      <Sun className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
