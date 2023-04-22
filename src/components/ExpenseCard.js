const ExpenseCard = ({expense}) => {
    return ( 
        <div className="expense-card rounded-lg p-4 md:p-8 text-lg md:text-2xl bg-black text-white">
            <h3 className="text-red-500 font-bold text-xl md:text-3xl mb-4">{expense.name}</h3>
            <p className="mb-2">{expense.category}</p>
            <p className="mb-2">{expense.date}</p>         
            <div className="amount text-2xl md:text-4xl font-bold text-cyan-400">{expense.amount}</div>
        </div>
    )
}

export default ExpenseCard