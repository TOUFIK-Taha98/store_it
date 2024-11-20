import FileUploader from "@/components/FileUploader";
import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import { SignOutUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import React from "react";

const Header = ({
  accountId,
  userId,
}: {
  accountId: string;
  userId: string;
}) => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader accountId={accountId} ownerId={userId} />
        <form
          action={async () => {
            "use server";

            await SignOutUser();
          }}
        >
          <Button className="sign-out-button" type="submit">
            <Image
              alt="logo"
              className="w-6"
              height={24}
              src="/assets/icons/logout.svg"
              width={24}
            />
          </Button>
        </form>
      </div>
    </header>
  );
};
export default Header;
