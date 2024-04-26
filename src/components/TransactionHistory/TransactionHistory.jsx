export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        
        {items.map(({Id, Type, Amount, Currency}) => (
          <transactions
            Id={Id}
            Type={Type}
            Amount={Amount}
            Currency={Currency}
          />
            ))}
          
      </tbody>
    </table>
  );
 
};


