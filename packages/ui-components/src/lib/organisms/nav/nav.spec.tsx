import { render } from '@testing-library/react';

import Nav from './nav';

describe('Nav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Nav asPath="key" />);
    expect(baseElement).toBeTruthy();
  });
});
