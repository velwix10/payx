module.exports = async function createInvoice(client, data = {}) {
  const fetchApi = globalThis.fetch;

  if (!fetchApi) {
    throw new Error("Fetch API ushbu muhitda qo'llab-quvvatlanmaydi.");
  }

  const payload = {};

  const ref = data.ref || data.payer_reference;
  const sum = data.sum !== undefined ? data.sum : data.amount;
  const izoh = data.izoh || data.description;

  if (ref !== undefined) payload.payer_reference = ref;
  if (sum !== undefined) payload.amount = sum;
  if (izoh !== undefined) payload.description = izoh;

  const res = await fetchApi(`${client.baseUrl}/api/v1/invoice`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${client.token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  return await res.json();
};
