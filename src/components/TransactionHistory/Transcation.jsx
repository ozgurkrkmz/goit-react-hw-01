import css from './Transcation.module.css';
//import css from './Transcation.module.css1';
function Transactions({items}){
    return (
        <table className={css.table}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            
            <tbody>
                {items.map((item) => (
                <tr key ={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}
            </tbody>
            </table>

    )
}

export default Transactions;