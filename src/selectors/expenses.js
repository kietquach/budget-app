const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        //if startDate is undefined then return true because no start date doesn't affect filtering
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === "amount") {
            return a.amount < b.amount ? 1: -1;
        }
    });
};

export default getVisibleExpenses;