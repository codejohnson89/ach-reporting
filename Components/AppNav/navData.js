export const navData = [
   {
        id: 2,
        navHeading: 'Merchant',
        link: '',
        hasSubs:true,
        lvlTwo:[
            {
                subNavHeading: 'Statement',
                link:"/Merchant/Statement",
            },
            {
                subNavHeading: 'Invoice',
                link:"/Merchant/Invoice",
            },
            {
                subNavHeading: 'Transaction Lookup',
                link:"/Merchant/TransactionLookup",
            },{
                subNavHeading: 'Batch Lookup',
                link:"/Merchant/BatchLookup",
            },{
                subNavHeading: 'Funding Lookup',
                link:"/Merchant/FundingLookup",
            },{
                subNavHeading: 'Funded Transaction',
                link:"/Merchant/FundedTransaction",
            },{
                subNavHeading: 'Submitted Transaction',
                link:"/Merchant/SubmittedTransaction",
            },{
                subNavHeading: 'Returns',
                link:"/Merchant/Returns",
            }
        ]
     },{
        id: 3,
        navHeading: 'Partner',
        link: '',
        hasSubs:true,
        lvlTwo:[
            {
                subNavHeading: 'Statement',
                link:"/Partner/Statement",
            },{
                subNavHeading: 'Invoice',
                link:"/Partner/Invoice",
            },{
                subNavHeading: 'Funded Transaction',
                link:"/Merchant/FundedTransaction",
            },{
                subNavHeading: 'Submitted Transaction',
                link:"/Merchant/SubmittedTransaction",
            },
        ]
    },{
        id: 4,
        navHeading: 'Processing',
        link: '',
        hasSubs:true,
        lvlTwo:[
            {
                subNavHeading: 'Transaction Detail',
                link:"/Processing/TransactionDetail",
            },{
                subNavHeading: 'Transaction Summary',
                link:"/Processing/TransactionSummary",
            },{
                subNavHeading: 'Transactions By Merchant',
                link:"/Processing/TransactionsByMerchant",
            },{
                subNavHeading: 'Transactions By Batch',
                link:"/Processing/TransactionsByBatch",
            },{
                subNavHeading: 'Return Summary',
                link:"/Processing/ReturnSummary",
            },{
                subNavHeading: 'Boarding Stats',
                link:"/Processing/BoardingStats",
            },{
                subNavHeading: 'Risk Summary',
                link:"/Processing/RiskSummary",
            },{
                subNavHeading: 'Uncollected Invoices/ACH Exceptions',
                link:"/Processing/InvoicesExceptions",
            },{
                subNavHeading: 'ACH Exceptions',
                link:"/Processing/ACHExceptions",
            },{
                subNavHeading: 'Unsettled Transation Voids',
                link:"/Processing/UnsettledTransactions",
            },{
                subNavHeading: 'Bank account Update Logs',
                link:"/Processing/BankAccountLog",
            },
        ]
    },{
        id: 5,
        navHeading: 'Accounting',
        link: '',
        hasSubs:true,
        lvlTwo:[
            {
                subNavHeading: 'Returns',
                link:"/Accounting/Returns",
            },{
                subNavHeading: 'Compensation',
                link:"/Accounting/Compensation",
            },{
                subNavHeading: 'Income Statement',
                link:"/Accounting/IncomeStatement",
            },{
                subNavHeading: 'Income/Charges',
                link:"/Accounting/IncomeCharges",
            },{
                subNavHeading: 'Processing Balances',
                link:"/Accounting/ProcessingBalances",
            },{
                subNavHeading: 'Return Balances',
                link:"/Accounting/ReturnBalances",
            },{
                subNavHeading: 'Colonnade 1099k',
                link:"/Accounting/Colonnade1099k",
            },{
                subNavHeading: 'Colonnade 1099k Summary',
                link:"/Accounting/Colonnade1099Summary",
            },{
                subNavHeading: 'ODFI Exposure',
                link:"/Accounting/ODFIExposure",
            },{
                subNavHeading: 'File Entries',
                link:"/Accounting/FileEntries",
            },{
                subNavHeading: 'Activated Merchant',
                link:"/Accounting/ActivatedMerchant",
            },{
                subNavHeading: 'Aging Deposits',
                link:"/Accounting/AgingDeposits",
            },
       ]
    }
]