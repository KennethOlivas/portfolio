import { FC, forwardRef, ReactNode, Ref } from 'react';

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = forwardRef(
  ({ children }, ref: Ref<HTMLDivElement>) => (
    <div ref={ref} className="relative w-56 h-56 m-auto my-12 md:w-96 md:h-96">
      {children}
    </div>
  )
);

Container.displayName = 'Container';

export default Container;
