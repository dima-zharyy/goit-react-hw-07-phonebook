import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#188ce8"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
      wrapperClassName=""
      visible={true}
    />
  );
};
