

type Expense = {
    bank_id: string,
    date: Date, 
    amount: number,
    currency?: string, // Optional currency field
    category: string,
    description: string,
    tags: string[],
    pending: boolean, 
    remaining: number,
    left_budget: number,
    // Add other fields as needed
};

type currency = {
    code: string,
    name: string,
    exchange_rate: number, // only exchange rate to kr
}

function get_currency_exchange(currency: string, amount: number): number {
    if (currency !== "kr") {
    return }
    else {return amount;}
}