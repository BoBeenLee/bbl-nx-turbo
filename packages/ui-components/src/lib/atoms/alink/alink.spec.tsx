import { render } from '@testing-library/react';

import ALink from './alink';

describe('ALink', () => {
  it.skip('should render successfully', () => {
    const { baseElement } = render(<ALink urlPath="/">test</ALink>);
    expect(baseElement).toBeTruthy();
  });
});
