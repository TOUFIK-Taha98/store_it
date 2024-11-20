"use client";

import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  avatar: string;
  email: string;
  fullName: string;
}

const Sidebar = ({ avatar, email, fullName }: Props) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          alt="logo"
          className="hidden h-auto lg:block"
          height={50}
          src="/assets/icons/logo-full-brand.svg"
          width={160}
        />

        <Image
          alt="logo"
          className="lg:hidden"
          height={52}
          src="/assets/icons/logo-brand.svg"
          width={52}
        />
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ icon, name, url }) => (
            <Link className="lg:w-full" href={url} key={name}>
              <li
                className={cn(
                  "sidebar-nav-item",
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
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <Image
        alt="logo"
        className="w-full"
        height={418}
        src="/assets/images/files-2.png"
        width={506}
      />

      <div className="sidebar-user-info">
        <Image
          alt="Avatar"
          className="sidebar-user-avatar"
          height={44}
          src={avatar}
          width={44}
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption">{email}</p>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
