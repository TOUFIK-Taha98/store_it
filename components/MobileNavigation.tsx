"use client";

import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/constants";
import { SignOutUser } from "@/lib/actions/user.actions";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface Props {
  $id: string;
  accountId: string;
  avatar: string;
  email: string;
  fullName: string;
}

const MobileNavigation = ({
  $id: ownerId,
  accountId,
  avatar,
  email,
  fullName,
}: Props) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="mobile-header">
      <Image
        alt="logo"
        className="h-auto"
        height={52}
        src="/assets/icons/logo-full-brand.svg"
        width={120}
      />

      <Sheet onOpenChange={setOpen} open={open}>
        <SheetTrigger>
          <Image
            alt="Search"
            height={30}
            src="/assets/icons/menu.svg"
            width={30}
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <SheetTitle>
            <div className="header-user">
              <Image
                alt="avatar"
                className="header-user-avatar"
                height={44}
                src={avatar}
                width={44}
              />
              <div className="sm:hidden lg:block">
                <p className="subtitle-2 capitalize">{fullName}</p>
                <p className="caption">{email}</p>
              </div>
            </div>
            <Separator className="mb-4 bg-light-200/20" />
          </SheetTitle>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map(({ icon, name, url }) => (
                <Link className="lg:w-full" href={url} key={name}>
                  <li
                    className={cn(
                      "mobile-nav-item",
                      pathname === url && "shad-active"
                    )}
                  >
                    <Image
                      alt={name}
                      className={cn(
                        "nav-icon",
                        pathname === url && "nav-icon-active"
                      )}
                      height={24}
                      src={icon}
                      width={24}
                    />
                    <p>{name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>

          <Separator className="my-5 bg-light-200/20" />

          <div className="flex flex-col justify-between gap-5 pb-5">
            <FileUploader accountId={accountId} ownerId={ownerId} />
            <Button
              className="mobile-sign-out-button"
              onClick={async () => await SignOutUser()}
              type="submit"
            >
              <Image
                alt="logo"
                height={24}
                src="/assets/icons/logout.svg"
                width={24}
              />
              <p>Logout</p>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
