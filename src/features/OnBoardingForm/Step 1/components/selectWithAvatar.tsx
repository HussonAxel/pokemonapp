"use client";

import { useId, useState } from "react";

import { ChevronsUpDownIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { useNavigate, useSearch } from "@tanstack/react-router";

export type UserStatus = "away" | "busy" | "offline" | "online";

export type UserOption = {
  avatar: string;
  email: string;
  name: string;
  status: UserStatus;
};

const getInitials = (name: string): string =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const statusClassNameByValue: Record<UserStatus, string> = {
  online: "bg-emerald-500",
  offline: "bg-slate-400",
  away: "bg-amber-400",
  busy: "bg-rose-500",
};

type SelectParamKey = "game" | "pokemon";
type SearchParams = Partial<Record<SelectParamKey, string>>;

const SelectWithAvatar = ({ data, param, disabled }: { data: UserOption[]; param: SelectParamKey; disabled: boolean}) => {
  const navigate = useNavigate();
  const searchParams = useSearch({ strict: false }) as SearchParams;

  const id = useId();
  const [open, setOpen] = useState<boolean>(false);
  const selectedUserName = searchParams[param] ?? "";

  const userByName: Record<string, UserOption> = Object.fromEntries(
    data.map((user) => [user.name, user]),
  );

  const selectedUser = selectedUserName ? userByName[selectedUserName] : undefined;

  const isUserName = (value: string) => data.some((user) => user.name === value);

  return (
    <div className="w-full space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          id={id}
          role="combobox"
          aria-expanded={open}
          className={`flex h-12 w-full items-center justify-between rounded-xl border border-border/60 bg-white dark:bg-black px-3.5 text-sm shadow-xs outline-none transition-colors hover:bg-accent/20 focus-visible:ring-[3px] focus-visible:ring-ring/50 ${disabled ? " opacity-60 cursor-not-allowed" : ""}`}
     
          disabled={disabled}
        >
          {selectedUser ? (
            <span className="flex min-w-0 items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
                <AvatarFallback>{getInitials(selectedUser.name)}</AvatarFallback>
              </Avatar>
              <span className="truncate font-medium">{selectedUser.name}</span>
            </span>
          ) : (
            <span className="text-muted-foreground">Select assignee</span>
          )}
          <ChevronsUpDownIcon
            className="text-muted-foreground/80 size-4 shrink-0"
            aria-hidden="true"
          />
        </PopoverTrigger>
        <PopoverContent className="w-75 overflow-hidden rounded-2xl border border-border/60 p-0 shadow-sm">
          <Command className="rounded-xl!">
            <CommandInput placeholder="Search assignee..." className="h-9 px-1" />
            <CommandList>
              <CommandEmpty>No assignee found.</CommandEmpty>
              <CommandGroup>
                {data.map((user) => (
                  <CommandItem
                    key={user.name}
                    value={user.name}
                    data-checked={selectedUserName === user.name}
                    onSelect={(currentValue) => {
                      if (currentValue === selectedUserName) {
                        void navigate({
                          to: ".",
                          search: (prev) => {
                            const rest = { ...(prev as SearchParams) };
                            delete rest[param];
                            return rest;
                          },
                        });
                        setOpen(false);
                        return;
                      }

                      if (!isUserName(currentValue)) {
                        return;
                      }

                      void navigate({
                        to: ".",
                        search: {
                          ...searchParams,
                          [param]: currentValue,
                        },
                      });
                      setOpen(false);
                    }}
                    className="rounded-lg pr-2"
                  >
                    <span className="flex min-w-0 flex-1 items-center gap-2">
                      <span className="relative shrink-0">
                        <Avatar className="size-7">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                        </Avatar>
                        <span
                          className={`absolute right-0 bottom-0 size-2 rounded-full ring-2 ring-background ${statusClassNameByValue[user.status]}`}
                        />
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="truncate font-medium">{user.name}</span>
                        <span className="text-muted-foreground truncate text-sm">{user.email}</span>
                      </span>
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectWithAvatar;
