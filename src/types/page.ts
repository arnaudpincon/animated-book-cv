// page.ts

export interface PageProps {
  number: string;
  title?: string;
  children?: React.ReactNode;
}

export interface StateChangeEvent {
  data: string;
  object: {
    pages: {
      currentPageIndex: number;
    };
    mousePosition: {
      x: number;
      y: number;
    };
    isUserMove: boolean;
  };
}
