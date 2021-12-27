declare module '*.less';
declare module '*.css';
declare module '*.js';
declare module '*.ts';
declare module '*.png';
declare module './index.less' {
  const styles: Record<string, string>;

  export default styles;
}

declare const routeBaseName: string;

declare const version: string;

declare const projectName: string;

interface Window {
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
  __POWERED_BY_QIANKUN__?: string | boolean;
}

interface PureComponentProps {
  path: string;
}
