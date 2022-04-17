declare module '*.less';
declare module '*.css';
declare module '*.js';
declare module '*.ts';
declare module '*.png';
declare module './index.less' {
  const styles: Record<string, string>;

  export default styles;
}
declare module 'moment' {
  import { Dayjs } from 'dayjs';
  namespace moment {
    type Moment = Dayjs;
  }
  export = moment;
  export as namespace moment;
}
interface Window {
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
  __POWERED_BY_QIANKUN__?: string | boolean;
  primaryApp?: Record<string, any>;
  rootInstance: {
    render(children: React.ReactChild | Iterable<React.ReactNode>): void;
    unmount(): void;
  };
}

interface PureComponentProps {
  path: string;
  selfUrl: string;
}
