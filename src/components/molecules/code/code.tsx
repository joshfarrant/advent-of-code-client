import clsx from 'clsx';
import { Highlight, themes } from 'prism-react-renderer';

import { Props } from './code.types';

export const Code = ({ code }: Props) => (
  <Highlight theme={themes.synthwave84} code={code} language="ts">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre
        className={clsx(className, 'overflow-x-auto')}
        style={{ ...style, backgroundColor: 'transparent' }}
      >
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);
