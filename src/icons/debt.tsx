import { IconProps } from './shared/IconProps';
const Debt = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6726 19C12.0676 19 11.5445 18.8739 11.1032 18.6216C10.6619 18.3694 10.3203 18.0126 10.0783 17.5514C9.89082 17.1775 9.77817 16.7485 9.74032 16.2645C9.52542 16.2344 9.36048 16.1732 9.24552 16.0811C9.08182 15.9369 8.99997 15.7027 8.99997 15.3784V15.1838H9.73615C9.74466 15.0111 9.75849 14.8423 9.77763 14.6773C9.52878 14.6523 9.34429 14.5761 9.22417 14.4486C9.0747 14.2901 8.99997 14.0667 8.99997 13.7784V13.573H10.0024C10.1493 13.0879 10.3525 12.6627 10.6121 12.2973C10.9039 11.8865 11.2633 11.5694 11.6904 11.3459C12.1245 11.1153 12.6192 11 13.1743 11C13.58 11 13.9074 11.0432 14.1566 11.1297C14.4057 11.209 14.5765 11.2955 14.669 11.3892C14.7687 11.4829 14.8327 11.5802 14.8612 11.6811C14.8968 11.782 14.9146 11.9153 14.9146 12.0811C14.9146 12.1892 14.9039 12.2973 14.8825 12.4054C14.8612 12.5063 14.8292 12.6 14.7864 12.6865C14.7437 12.773 14.6904 12.8523 14.6263 12.9243H14.5622C14.3772 12.7802 14.1637 12.6685 13.9217 12.5892C13.6868 12.5099 13.4163 12.4703 13.1103 12.4703C12.7615 12.4703 12.4484 12.5784 12.1708 12.7946C11.9393 12.9689 11.7499 13.2283 11.6026 13.573H12.8327C13.2953 13.573 13.6299 13.6523 13.8363 13.8108C14.0427 13.9622 14.1459 14.2108 14.1459 14.5568V14.6865H11.3303C11.3127 14.8429 11.3002 15.0087 11.2928 15.1838H12.9074C13.3701 15.1838 13.6904 15.2559 13.8683 15.4C14.0533 15.5441 14.1459 15.7784 14.1459 16.1027V16.2865H11.2866C11.2931 16.4697 11.2995 16.6498 11.306 16.827C11.4057 16.9423 11.5231 17.0432 11.6583 17.1297C11.8007 17.209 11.9679 17.2703 12.1601 17.3135C12.3523 17.3496 12.5729 17.3676 12.822 17.3676C13.242 17.3676 13.6156 17.3027 13.943 17.173C14.2775 17.0432 14.5836 16.8306 14.8612 16.5351H14.9252C14.9466 16.6 14.9608 16.6685 14.9679 16.7405C14.9822 16.8126 14.9893 16.8811 14.9893 16.9459C14.9964 17.0108 15 17.0757 15 17.1405C15 17.4288 14.9715 17.6811 14.9146 17.8973C14.8576 18.1063 14.7615 18.2829 14.6263 18.427C14.4768 18.5856 14.242 18.7189 13.9217 18.827C13.6014 18.9423 13.185 19 12.6726 19Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 5C16 5.72857 15.8052 6.41165 15.4648 7H16.6576C18.0342 7 19.2342 7.93689 19.5681 9.27239L22.0681 19.2724C22.5414 21.1658 21.1094 23 19.1576 23H4.8423C2.89058 23 1.45851 21.1658 1.93187 19.2724L4.43187 9.27239C4.76575 7.93689 5.9657 7 7.3423 7H8.5351C8.19476 6.41165 7.99997 5.72857 7.99997 5C7.99997 2.79086 9.79083 1 12 1C14.2091 1 16 2.79086 16 5ZM12 7C13.1045 7 14 6.10457 14 5C14 3.89543 13.1045 3 12 3C10.8954 3 9.99997 3.89543 9.99997 5C9.99997 6.10457 10.8954 7 12 7ZM7.3423 9H16.6576C17.1165 9 17.5165 9.3123 17.6278 9.75746L20.1278 19.7575C20.2856 20.3886 19.8082 21 19.1576 21H4.8423C4.19173 21 3.71437 20.3886 3.87216 19.7575L6.37216 9.75746C6.48345 9.3123 6.88343 9 7.3423 9Z"
      fill={color}
    />
  </svg>
);
export { Debt };
