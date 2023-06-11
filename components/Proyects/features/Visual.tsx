import classNames from "classnames";

type Props = {
  id: string;
};

type VisualProps = {
  children: React.ReactNode;
} & Props;

export const Visual = ({ children, id }: VisualProps) => {
  return (
    <div
      className={classNames(
        "pointer-events-none fixed inset-0 flex items-center justify-center opacity-0",
        `visual-${id}`
      )}>
      <div className="px-4">{children}</div>
    </div>
  );
};
