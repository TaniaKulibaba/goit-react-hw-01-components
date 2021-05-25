import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.scss';



const TransactionTr = ({ id, type, amount, currency }) => {
    return (
        <tr key={id}>
          <td className={styles.td}>{type}</td>
          <td className={styles.td}>{amount}</td>
          <td className={styles.td}>{currency}</td>
        </tr>
    )

};


const TransactionBody = ({ items }) => {
    return <tbody className={styles.tbody}>{items.map(TransactionTr)}</tbody>
};

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={styles.transactionHistory}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Type</th>
              <th className={styles.th}>Amount</th>
              <th className={styles.th}>Currency</th>
            </tr>
        </thead>
            
        <TransactionBody items={transactions} />
        </table>
    )
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TransactionHistory;