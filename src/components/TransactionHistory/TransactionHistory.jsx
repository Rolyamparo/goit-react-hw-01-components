import styles from './TransactionHistory.module.css';



export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.data}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.body}>
        
        {items.map((item, index) => (
          <tr className={styles.body} key={index}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>

            ))}
          
      </tbody>
    </table>
  );
 
};


