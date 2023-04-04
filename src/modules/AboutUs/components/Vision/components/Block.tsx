import { SectionDescription } from "../../../../../components";

export type BlockProps = {
  visible: boolean;
  active: boolean;
  descVisible: boolean;

  title: string;
  desc: string;
  className: string;
};

export const Block = ({
  visible,
  active,
  descVisible,

  title,
  desc,
  className,
}: BlockProps) => {
  if (!visible) return null;

  return (
    <div className={`block row column ${className} ${active ? " active" : ""}`}>
      <div className="block-title">{title}</div>
      {descVisible && (
        <SectionDescription className="block-desc" keep>
          {desc}
        </SectionDescription>
      )}
    </div>
  );
};
