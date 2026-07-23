module.exports = async function simulatePayment(client, data = {}) {
  const fetchApi = globalThis.fetch;

  if (!fetchApi) {
    throw new Error("Fetch API ushbu muhitda qo'llab-quvvatlanmaydi.");
  }

  const uuid = data.uuid || data.invoice_uuid;
  const method = data.method;
  const action = data.action || 'pay';

  const res = await fetchApi(`${client.baseUrl}/api/v1/sandbox/simulate`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${client.token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      invoice_uuid: uuid,
      method: method,
      action: action
    })
  });

  return await res.json();
};
