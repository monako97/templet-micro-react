declare module '*.less';
declare module '*.css';
declare module '*.js';
declare module '*.ts';
declare module '*.png';
declare module './index.less' {
  const styles: Record<string, string>;

  export default styles;
}

interface Window {
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
  __POWERED_BY_QIANKUN__?: string | boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  primaryApp?: Record<string, any>;
  rootInstance: {
    // eslint-disable-next-line no-unused-vars
    render(children: React.ReactChild | Iterable<React.ReactNode>): void;
    unmount(): void;
  };
}
