import { render} from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('renders w/o crashing', () => {
    render(<NewTodoForm />)
});

it('matches the snapshot', () => {
    const {asFragment} = render(<NewTodoForm />)
    expect(asFragment).toMatchSnapshot()
});

