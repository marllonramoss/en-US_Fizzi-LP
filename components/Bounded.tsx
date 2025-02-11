import React from "react";

type boundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = ({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: boundedProps) => {
  return (
    <Comp
      className={`px-4 first:pt-10 md:px-6  ${className ?? ""}`}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
};

export default Bounded;
