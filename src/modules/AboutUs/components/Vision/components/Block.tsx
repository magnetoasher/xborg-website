import { SectionDescription } from "../../../../../components";

export type BlockProps = {
  active: boolean;
  title: string;
  desc?: string;
  className: string;
};

export const Block = ({
  active,

  title,
  desc,
  className,
}: BlockProps) => {
  return (
    <div className={`block row column ${className} ${active ? " active" : ""}`}>
      <div className="block-title lexend-heading-l">{title}</div>
      {desc && (
        <SectionDescription className="block-desc lexend-body-m">
          {desc}
        </SectionDescription>
      )}
    </div>
  );
};
