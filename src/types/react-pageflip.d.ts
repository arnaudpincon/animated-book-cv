declare module "react-pageflip" {
  import React from "react";

  interface HTMLFlipBookProps {
    width: number;
    height: number;
    mobileScrollSupport: boolean;
    className?: string;
    showPageCorners?: boolean;
    drawShadow?: boolean;
    showCover?: boolean;
    autoSize?: boolean;
    swipeDistance?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChangeState?: (state: any) => void;
    flippingTime?: number;
    disableFlipByClick?: boolean;
    children?: React.ReactNode;
    [key: string]: unknown;
  }

  export default class HTMLFlipBook extends React.Component<HTMLFlipBookProps> {}
}
