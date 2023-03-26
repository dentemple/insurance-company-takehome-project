export interface LoadingProps {}

export function Loading({ ...rest }: LoadingProps) {
  return (
    <div {...rest}>
      <small>|Fancy Loading Bar|</small>
    </div>
  );
}

export default Loading;
