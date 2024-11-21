import ActionDropdown from "@/components/ActionDropdown";
import FormattedDateTime from "@/components/FormattedDateTime";
import Thumbnail from "@/components/Thumbnail";
import { convertFileSize } from "@/lib/utils";
import Link from "next/link";
import { Models } from "node-appwrite";

const Card = ({ file }: { file: Models.Document }) => {
  return (
    <Link className="file-card" href={file.url} target="_blank">
      <div className="flex justify-between">
        <Thumbnail
          className="!size-20"
          extension={file.extension}
          imageClassName="!size-11"
          type={file.type}
          url={file.url}
        />

        <div className="flex flex-col items-end justify-between">
          <ActionDropdown file={file} />
          <p className="body-1">{convertFileSize(file.size)}</p>
        </div>
      </div>

      <div className="file-card-details">
        <p className="subtitle-2 line-clamp-1">{file.name}</p>
        <FormattedDateTime
          className="body-2 text-light-100"
          date={file.$createdAt}
        />
        <p className="caption line-clamp-1 text-light-200">
          By: {file.owner.fullName}
        </p>
      </div>
    </Link>
  );
};
export default Card;
