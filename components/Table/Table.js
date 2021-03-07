import styles from './Table.module.css'

const Table = ({ columns, data }) => {
  const TABLE_ROWS = [...new Array(data.length)].map((item, idx) => columns.map(({ columnId }) => data[idx][columnId]))

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map(({ columnId, Header }) => (<td key={columnId}>{ Header }</td>))}
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS.map((row, idx) => (
          <tr key={idx}>
            {row.map((cell, idx) => <td key={idx}>{ cell }</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table