const { button } = require("bootstrap")
const transactionUL=document.querySelector('#transaction')
const incomeDisplay=document.querySelector('#transaction')
const expenseDisplay=document.querySelector('#money-minus')
const balanceDisplay=document.querySelector('#balance')
const form=document.querySelector('#form')
const inputTransactionName=document.querySelector('#text')
const inputTransactionAmount=document.querySelector('#amouth')

const localStoreTransaction= JSON.parse(localStorage
    .getItem('transactions'))
let transactions =localStorage
.getItem(transactions) !== null?
localStoreTransaction:[]

const removeTransaction=ID =>{
    transactions=transactions.filter(transaction=>transaction.id !== ID)
    init()
}

const addTransactionIntoDOM =({amount,name,id})=>{
    const operator =amount<0?'-':'+'
    const CSSClass =amount<0?'minus':'plus'
    const amoutWithoutOperator = Math.abs(amont)
    const li = document.createElement('li')
    li.classList.add(CSSClass)
    li.innerHTML= `
    ${name}
    <span>${operator}R$ ${amoutWithoutOperator}</span>
    <button class="delete-bnt" onClick="removeTransaction(${id})">x</button>
    `
    transactionUL.append(li)
}
        const getExpenses=() => transactionAmont=Math.abs(transactionAmont
        .filter(value=>value<0)
        .reduce((accumulator,value)=> accumulator+value,0)) 
        .toFixed(2)
        const updateBalanceValues=transactions
        .map(transaction => transaction.amout)
        const total = transactionAmont
        .reduce((accumulator,transaction) => accumulator + transaction,0)
        .toFixed(2)
       const transactionAmont=transactions
       .map(transaction => transaction.amout)
       const total = transactionAmont
       .reduce((accumulator,transaction) => accumulator + transaction,0)
       .toFixed(2)
       const income = transactionAmont
       .filter(value => value > 0)
       .reduce((accumulator,value)=> accumulator+value,0)
       .toFixed(2)
       const getTotal = transactionAmonts => transactionAmonts
       .reduce((accumulator,transactions) => accumulator+transactions,0)
       .toFixed(2)
       const updateBalanceValues =() =>{ 
       const transactionAmonts = transaction.map(transaction => transaction.amount)
       const total = getTotal(transactionAmonts)
       const income = getIncome(transactionAmonts)
       const expense = getExpenses(transactionAmonts)
      
       balanceDisplay.textContent=`R$ ${total}`
       incomeDisplay.textContent=`R$ ${income}`
       expenseDisplay.textContent=`R$ ${expense}`

          

const init = ()=>{
    transactionUL.innerHTML = ''
    transactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}
init()
const updateLocalStorage=() =>{
    localStorage.setItem('transaction', JSON.stringify(transactions))
}
const generateID=()=> Math.round( Math.round()*1000)
const addTransactionsArray = (transactionName, transactionAmont) =>{
    transaction.push({
        
            id:generateID(), 
            name: transactionName, 
            amout: Number(transactionAmont)
        })
    const cleanInputs = () =>{
        inputTransactionName.value =''
    inputTransactionAmount.value =''}
  {
    }

const handleFormSbmit = event => {
    event.preventDefault() 

}

const TransactionName = inputTransactionName.value.trim()
const TransactionAmont = inputTransactionAmont.value.trim()
const isSomeinputEmpty = transactionName === ''||TransactionAmont === ''

   if(isSomeinputEmpty){
     alert('Por favor , preencha tanto o nome quanto o valor da transação')  
      return
   }

addTransactionsArray(TransactionName,TransactionAmont)
init()
updateLocalStorage()
cleanInputs()

form.addEventListener('submit',handleFormSbmit)
