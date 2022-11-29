import { render} from '@testing-library/react';
import Todo from './Todo';

it('renders w/o crashing', () => {
    render(<Todo />);
})

it('matches the snapshot', () => {
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});

