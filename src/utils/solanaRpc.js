// utils/solanaRpc.js
export const checkTransactionStatus = async (txId) => {
    const url = "https://docs-demo.solana-mainnet.quiknode.pro/";
    const data = {
      jsonrpc: "2.0",
      id: 1,
      method: "getSignatureStatuses",
      params: [[txId], { searchTransactionHistory: true }]
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      const txStatus = result && result.result && result.result.value && result.result.value[0];
  
      if (!txStatus) {
        return "Yardım Ödemesi Bulunamadı. Sosyal Yardımlar Genel Müdürlüğü veya Sosyal Yardımlaşma ve Dayanışma Vakfı ile iletişime geçiniz.";
      }
  
      if (txStatus.err) {
        return "Yardım Ödemesi Transfer Edilemedi. Sosyal Yardımlar Genel Müdürlüğü veya Sosyal Yardımlaşma ve Dayanışma Vakfı ile iletişime geçiniz.";
      }
  
      if (txStatus.confirmations === null) {
        return "Yardım Ödemesi Başarıyla Transfer Edildi.";
      } else if (txStatus.confirmations !== undefined) {
        return "Yardım Ödemesi Başarıyla Transfer Edildi.";
      }
  
      return "Yardım Ödemesi Transferi Beklemede. Ödemeler maksimum 3 iş günü içerisinde hesabınıza geçmektedir, eğer geçmezse Sosyal Yardımlar Genel Müdürlüğü veya Sosyal Yardımlaşma ve Dayanışma Vakfı ile iletişime geçiniz.";
    } catch (error) {
      console.error("Error fetching transaction status:", error);
      return "Hatalı Giriş.";
    }
  };
  