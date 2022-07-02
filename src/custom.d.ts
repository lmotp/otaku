declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: any;
  export default content;
}

declare module '*.jfif' {
  const content: any;
  export default content;
}
