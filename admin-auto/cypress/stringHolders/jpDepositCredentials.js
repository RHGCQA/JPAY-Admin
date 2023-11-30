var JPDepositValidCredentials = {
    stageValidAccountNumber: "8840451493",
    stageValidMerchantName: "Kazuha Kadehara",
    stageValidTransferID: "2624319",
    stageValidUID: "test_kazuha_0001",
    stageAdminNotes: "Sample Data",
    stageValidAmount: Math.floor((Math.random(1000) * 99999) + 1),
    stageJPYCurrency: "JPY",
    stageUSDCurrency: "USD",
    stageEURCurrency: "EUR",
    stagePHPCurrency: "PHP",
    stageGBPCurrency: "GBP",
    stageSearchPaymentID: "payment_id",
    stageSearchTxnNumber: "transaction_number",
    stageSearchMerchantNumber: "merchant_number",
    stageSearchMerchantName: "merchant_name",
    stageSearchUID: "uid",
    stageSearchTransferID: "transfer_id",
    stageSearchMerchantTXN: "merchant_transaction_number",
    stageCompletedStatus: "completed",
    stageForConfirmationStatus: "for confirmation",
    stageYesCallbackStatus: "Yes",
    stageNoCallbackStatus: "No",
    stageManualAPIType: "manual",
    stageAutoAPIType: "auto"
}

var liveJPDepositValidCredentials = {
    liveValidAccountNumber: "1016855123",
    liveValidMerchantName: "Josh,ua Balasabas",
    liveValidTransferID: "8199790",
    liveValidUID: "joshuaLiveTesting",
    liveAdminNotes: "Sample Data",
    liveValidAmount: Math.floor((Math.random(1000) * 99999) + 1),
    liveJPYCurrency: "JPY",
    liveUSDCurrency: "USD",
    liveEURCurrency: "EUR",
    livePHPCurrency: "PHP",
    liveGBPCurrency: "GBP",
    liveSearchPaymentID: "payment_id",
    liveSearchTxnNumber: "transaction_number",
    liveSearchMerchantNumber: "merchant_number",
    liveSearchMerchantName: "merchant_name",
    liveSearchUID: "uid",
    liveSearchTransferID: "transfer_id",
    liveSearchMerchantTXN: "merchant_transaction_number",
    liveCompletedStatus: "completed",
    liveForConfirmationStatus: "for confirmation",
    liveYesCallbackStatus: "Yes",
    liveNoCallbackStatus: "No",
    liveManualAPIType: "manual",
    liveAutoAPIType: "auto"
}

var JPDepositInvalidCredentials = {
    stageInvalidAccountNumber: "8840451493INVALID",
    stageInvalidTransferID: "2624319INVALID",
    stageInvalidUID: "test_kazuha_0001INVALID",
}

module.exports = {JPDepositValidCredentials,JPDepositInvalidCredentials, liveJPDepositValidCredentials};