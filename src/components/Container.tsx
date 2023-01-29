interface Props {
  children: React.ReactNode;
  className?: string;
  [rest: string]: any;
}

// i don't like writing it like this 
function Container({ children, className, ...rest }: Props) {
  let containerClassName =
    "flex justify-between items-center w-full max-w-5xl mx-auto p-[1em]";

  if (className) {
    containerClassName = `${containerClassName} ${className}}`;
  }
  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  );
}
export default Container;
