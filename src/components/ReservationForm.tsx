import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";
// import { Button } from "./button"
import { Label } from "./ui/label";
import { Input } from "./ui/input";
// import { Popover, PopoverTrigger } from "@radix-ui/react-popover"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ReservationForm = () => {
  return (
    <form>
      <div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          <div>
            <label htmlFor="firstname"> first name</label>
            <Input id="firstname" type="text" />
          </div>

          <div>
            <label htmlFor="lastname">last name</label>
            <Input id="lastname" type="text" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
