import React from "react";
import { Fade } from "react-reveal"
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { AddExpense } from "./components/AddExpense"
import { Footer } from "./components/Footer";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
	return (
		<GlobalProvider>
			<Fade left duration={3000} delay={4000}>
			<Header />
			</Fade>
			
			<div className="container">
				
			<Fade duration={1000} delay={1000}>
				<Balance />
				</Fade>
				<IncomeExpenses />
				
				<TransactionList />
			
				<Fade bottom duration={3000} delay={2000}>
				<AddTransaction />
				<AddExpense />
				</Fade>
			</div>
			<Fade duration={3000} delay={6000}>
			<Footer />
			</Fade>
		</GlobalProvider>
	);
}

export default App;
