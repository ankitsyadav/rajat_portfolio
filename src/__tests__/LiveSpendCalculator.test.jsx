import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { LiveSpendCalculator } from '../sections/LiveSpendCalculator';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    li: ({ children, ...props }) => <li {...props}>{children}</li>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

describe('LiveSpendCalculator', () => {
  it('adds an item and shows it in the list', async () => {
    const user = userEvent.setup();
    render(<LiveSpendCalculator />);

    await user.type(screen.getByLabelText('Name'), 'Netflix');
    await user.type(screen.getByLabelText('Cost'), '15.99');
    await user.click(screen.getByRole('button', { name: /add subscription/i }));

    expect(screen.getByText('Netflix')).toBeInTheDocument();
    expect(screen.getAllByText('$15.99').length).toBe(2);
  });

  it('deletes an item and shows empty state', async () => {
    const user = userEvent.setup();
    render(<LiveSpendCalculator />);

    await user.type(screen.getByLabelText('Name'), 'Spotify');
    await user.type(screen.getByLabelText('Cost'), '9.99');
    await user.click(screen.getByRole('button', { name: /add subscription/i }));
    expect(screen.getByText('Spotify')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /remove spotify/i }));

    expect(screen.queryByText('Spotify')).not.toBeInTheDocument();
    expect(screen.getByText(/no subscriptions added yet/i)).toBeInTheDocument();
  });

  it('converts yearly cost to monthly in the total', async () => {
    const user = userEvent.setup();
    render(<LiveSpendCalculator />);

    await user.click(screen.getByRole('radio', { name: /yearly/i }));
    await user.type(screen.getByLabelText('Name'), 'Yearly App');
    await user.type(screen.getByLabelText('Cost'), '120');
    await user.click(screen.getByRole('button', { name: /add subscription/i }));

    expect(screen.getAllByText('$10.00').length).toBe(2);
    expect(screen.getByText('$120.00 / yr')).toBeInTheDocument();
  });

  it('sorts items by cost when sort toggle is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<LiveSpendCalculator />);

    await user.type(screen.getByLabelText('Name'), 'Expensive');
    await user.type(screen.getByLabelText('Cost'), '50');
    await user.click(screen.getByRole('button', { name: /add subscription/i }));

    await user.type(screen.getByLabelText('Name'), 'Cheap');
    await user.type(screen.getByLabelText('Cost'), '5');
    await user.click(screen.getByRole('button', { name: /add subscription/i }));

    const getCosts = () =>
      Array.from(container.querySelectorAll('.live-calculator__item-cost'))
        .map((el) => parseFloat(el.textContent.replace(/[^0-9.]/g, '')));

    const before = getCosts();
    expect(before[0]).toBe(50);
    expect(before[1]).toBe(5);

    await user.click(screen.getByRole('button', { name: /sort by cost/i }));

    const after = getCosts();
    expect(after[0]).toBe(5);
    expect(after[1]).toBe(50);
  });
});
