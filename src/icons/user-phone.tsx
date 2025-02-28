import { IconProps } from './shared/IconProps';
const UserPhone = ({
  size = 20,
  color = 'currentColor',
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 10C13.1546 10 12.3705 9.73774 11.7245 9.29014C10.6825 8.56809 10 7.36375 10 6C10 3.79086 11.7909 2 14 2C16.2091 2 18 3.79086 18 6C18 7.36375 17.3175 8.56809 16.2755 9.29014C15.6295 9.73774 14.8454 10 14 10ZM16 6C16 7.10457 15.1046 8 14 8C12.8954 8 12 7.10457 12 6C12 4.89543 12.8954 4 14 4C15.1046 4 16 4.89543 16 6Z"
      fill={color}
    />
    <path
      d="M4.32841 14.2684L6.33332 12.9L4.99999 9H1C1 16.0787 6.47446 22 15 22L15 18.1L11 16.8L9.32422 18.8423C7.09906 17.8304 5.40168 16.2195 4.32841 14.2684Z"
      fill={color}
    />
    <path
      d="M14 11C12.3015 11 10.5229 11.5629 9.29289 12.7929C8.90237 13.1834 8.90237 13.8166 9.29289 14.2071C9.68342 14.5976 10.3166 14.5976 10.7071 14.2071C11.4771 13.4371 12.6984 13 14 13C15.6865 13 16.8459 13.6899 17.6391 14.5521C18.0618 15.0115 18.3801 15.5211 18.6077 16H18C17.4477 16 17 16.4477 17 17C17 17.5523 17.4477 18 18 18H20C20.2996 18 20.5834 17.8657 20.7733 17.634C20.9633 17.4023 21.0393 17.0977 20.9806 16.8039C20.7831 15.8167 20.21 14.3926 19.1109 13.1979C17.9874 11.9768 16.3135 11 14 11Z"
      fill={color}
    />
  </svg>
);
export { UserPhone };
