import { render, fireEvent} from '@testing-library/react';
import TodoList from './TodoList';

it('renders w/o crashing', () => {
    render(<TodoList/>)
});

it('matches the snapshot', () => {
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot()
});

it("add new todo", function () {
    const { queryByText, getByLabelText, getByText } = render(<TodoList />);
    const input = getByLabelText("New Todo");
    const btn = queryByText("Add Todo");
    expect(queryByText('Walk the Dog')).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Walk the Dog' } });
    fireEvent.click(btn);
    expect(getByText('Walk the Dog')).toBeInTheDocument();
  })
