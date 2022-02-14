import React from "react";
import SvgIcon from "react-native-svg-icon";
import { G, Path } from "react-native-svg";
const Icon = (props) => <SvgIcon {...props} svgs={svgs} />;
export default Icon;
const svgs = {
  account_circle: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  account_circle_outlined: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  add_a_photo: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M3 8c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H5V2c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2z" />
        <circle cx="13" cy="14" r="3" />
        <Path d="M21 6h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65h-6.4c.17.3.28.63.28 1 0 1.1-.9 2-2 2H6v1c0 1.1-.9 2-2 2-.37 0-.7-.11-1-.28V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  add_a_photo_outline: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  add_circle: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  add_circle_outline: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  add_shopping_cart: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  arrow_drop_down_round: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  chevron_right: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  close: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  delete: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  delete_round: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  done: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  edit: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  event: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  expand_more: {
    svg: (
      <G>
        <Path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
        <Path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  home: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  home_outline: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  home_outline_round: {
    svg: (
      <G>
        {" "}
        <Path d="M12.0007 5.68998L17.0007 10.19V18H15.0007V12H9.00066V18H7.00066V10.19L12.0007 5.68998ZM12.7772 3.68566C12.2537 3.2778 11.6886 3.32372 11.224 3.68565C10.7594 4.04758 3.40772 10.593 3.00066 11C2.50053 11.5 2.75961 12 3.25066 12C3.7417 12 5.00066 12 5.00066 12C5.00066 12 5.00132 18.5 5.00066 19C5 19.5 5.5 19.9991 6 20C6.5 20.0009 9.5 20 10 20C10.5 20 10.9504 19.6544 11.0007 19C11.0509 18.3456 11.0007 14 11.0007 14H13.0007C13.0007 14 13.0007 18.5 13.0007 19C13.0007 19.5 13.5 20 14 20C14.5 20 17.5 20 18 20C18.5 20 18.9877 19.6091 19.0007 19C19.0136 18.3909 19.0007 12 19.0007 12C19.0007 12 20.0007 12 20.7507 12C21.2507 12 21.5765 11.5 21.0007 11C20.4248 10.5 13.3008 4.09351 12.7772 3.68566Z" />{" "}
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  keyboard_backspace: {
    svg: (
      <G>
        <Path d="M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  lock: {
    svg: (
      <G>
        <G fill="none">
          <Path d="M0 0h24v24H0V0z" />
          <Path d="M0 0h24v24H0V0z" opacity=".87" />
        </G>
        <Path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  lock_outline: {
    svg: (
      <G>
        <G fill="none">
          <Path d="M0 0h24v24H0V0z" />
          <Path d="M0 0h24v24H0V0z" opacity=".87" />
        </G>
        <Path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  mail: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  mail_outline: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v9c0 .55-.45 1-1 1zm-7-7L4 6h16l-8 5z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  person: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  person_outline: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  phone: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  phone_round: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  request_quote: {
    svg: (
      <G>
        <G>
          <rect fill="none" height="24" width="24" />
          <Path d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M15,12h-4v1h3c0.55,0,1,0.45,1,1v3 c0,0.55-0.45,1-1,1h-1v1h-2v-1H9v-2h4v-1h-3c-0.55,0-1-0.45-1-1v-3c0-0.55,0.45-1,1-1h1V9h2v1h2V12z M13,8V3.5L17.5,8H13z" />
        </G>
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  request_quote_outline: {
    svg: (
      <G>
        <G>
          <rect fill="none" height="24" width="24" />
          <Path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M6,20V4h7v4h5v12H6z M11,19h2v-1h1 c0.55,0,1-0.45,1-1v-3c0-0.55-0.45-1-1-1h-3v-1h4v-2h-2V9h-2v1h-1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h3v1H9v2h2V19z" />
        </G>
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  request_quote_outline_round: {
    svg: (
      <G>
        {" "}
        <Path d="M13.25 1.99994C12.5 1.9836 6 1.99994 6 1.99994C4.9 1.99994 4 2.89994 4 3.99994V19.9999C4 21.0999 4.9 21.9999 6 21.9999H18C19.1 21.9999 20 21.0999 20 19.9999C20 19.9999 20.0063 9.49994 20 8.74994C19.9937 7.99994 19.81 7.81166 19.5 7.49994C19.19 7.18822 17 4.99994 17 4.99994C17 4.99994 14.7755 2.77386 14.5 2.49994C14.2245 2.22601 14 2.01628 13.25 1.99994ZM6 19C5.99689 18.3286 6 5.74457 6 5C6 4.25543 6.26164 4.00003 7 3.99994C7.73836 3.99985 13 3.99994 13 3.99994C13 3.99994 13 6.49994 13 6.99994C13 7.49994 13.5 7.99994 14 7.99994C14.5 7.99994 18 7.99994 18 7.99994C18 7.99994 18.0037 18.2532 18 19C17.9963 19.76 17.76 19.9812 17 19.9999C16.3648 20.0186 7.65828 20.0055 7 19.9999C6.26 19.9944 6.00311 19.76 6 19ZM12 18.9999C13 18.9999 13 17.9999 13 17.9999H14C14.55 17.9999 15 17.5499 15 16.9999V13.9999C15 13.4499 14.55 12.9999 14 12.9999H11V11.9999H14C14 11.9999 15 11.9999 15 10.9999C15 9.99994 14 9.99994 14 9.99994H13C13 9.99994 13 8.99994 12 8.99994C11 8.99994 11 9.99994 11 9.99994H10C9.45 9.99994 9 10.4499 9 10.9999V13.9999C9 14.5499 9.45 14.9999 10 14.9999H13V15.9999H10C10 15.9999 9 15.9999 9 16.9999C9 17.9999 10 17.9999 10 17.9999H11C11 17.9999 11 18.9999 12 18.9999Z" />{" "}
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  rotate_left: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M6.56 7.98C6.1 7.52 5.31 7.6 5 8.17c-.28.51-.5 1.03-.67 1.58-.19.63.31 1.25.96 1.25h.01c.43 0 .82-.28.94-.7.12-.4.28-.79.48-1.17.22-.37.15-.84-.16-1.15zM5.31 13h-.02c-.65 0-1.15.62-.96 1.25.16.54.38 1.07.66 1.58.31.57 1.11.66 1.57.2.3-.31.38-.77.17-1.15-.2-.37-.36-.76-.48-1.16-.12-.44-.51-.72-.94-.72zm2.85 6.02c.51.28 1.04.5 1.59.66.62.18 1.24-.32 1.24-.96v-.03c0-.43-.28-.82-.7-.94-.4-.12-.78-.28-1.15-.48-.38-.21-.86-.14-1.16.17l-.03.03c-.45.45-.36 1.24.21 1.55zM13 4.07v-.66c0-.89-1.08-1.34-1.71-.71L9.17 4.83c-.4.4-.4 1.04 0 1.43l2.13 2.08c.63.62 1.7.17 1.7-.72V6.09c2.84.48 5 2.94 5 5.91 0 2.73-1.82 5.02-4.32 5.75-.41.12-.68.51-.68.94v.02c0 .65.61 1.14 1.23.96C17.57 18.71 20 15.64 20 12c0-4.08-3.05-7.44-7-7.93z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  shopping_cart: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  shopping_cart_outline: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  shopping_cart_outline_round: {
    svg: (
      <G>
        {" "}
        <Path d="M0 0h24v24H0V0z" fill="none" />{" "}
        <Path d="M16.55 13C17.3 13 17.96 12.59 18.3 11.97L21.88 5.48C22.25 4.82 21.77 4 21.01 4H6.21C6.21 4 5.75272 2.99991 5.5 2.5C5.24728 2.00009 5 2 4.5 2C4 2 3 2 3 2C3 2 2 2 2 3C2 4 3 4 3 4H4L7.6 11.59L6.25 14.03C5.52 15.37 6.48 17 8 17H19C19 17 20 17 20 16C20 15 19 15 19 15L8 15L9.1 13H16.55ZM7.16 6H19.31L16.55 11H9.53L7.16 6ZM8 18C6.9 18 6.01 18.9 6.01 20C6.01 21.1 6.9 22 8 22C9.1 22 10 21.1 10 20C10 18.9 9.1 18 8 18ZM18 18C16.9 18 16.01 18.9 16.01 20C16.01 21.1 16.9 22 18 22C19.1 22 20 21.1 20 20C20 18.9 19.1 18 18 18Z" />{" "}
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  visibility: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  visibility_off: {
    svg: (
      <G>
        <Path
          d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
          fill="none"
        />
        <Path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  visibility_off_outline: {
    svg: (
      <G>
        <Path
          d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
          fill="none"
        />
        <Path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  visibility_outline: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },

  west_round: {
    svg: (
      <G>
        <rect fill="none" height="24" width="24" />
        <Path d="M9.7,18.3L9.7,18.3c0.39-0.39,0.39-1.02,0-1.41L5.83,13H21c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5.83l3.88-3.88 c0.39-0.39,0.39-1.02,0-1.41l0,0c-0.39-0.39-1.02-0.39-1.41,0L2.7,11.3c-0.39,0.39-0.39,1.02,0,1.41l5.59,5.59 C8.68,18.68,9.32,18.68,9.7,18.3z" />
      </G>
    ),
    viewBox: "0 0 24 24",
  },
};