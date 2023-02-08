export type ContainerType = {
  children: any;
  className?: string;
};

export const Container = ({ children, className }: ContainerType) => {
  return (
    <div
      className={`max-w-container px-6 mx-auto md:px-10 lg:px-[130px] w-full ${
        className ? " " + className : ""
      }`}
    >
      {children}
    </div>
  );
};
