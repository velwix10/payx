module.exports = async function startPayment(client, uuid, method) {
  const fetchApi = globalThis.fetch;

  if (!fetchApi) {
    throw new Error("Fetch API ushbu muhitda qo'llab-quvvatlanmaydi.");
  }

  let id = uuid;
  let payMethod = method;

  if (typeof uuid === 'object' && uuid !== null) {
    id = uuid.uuid || uuid.id;
    payMethod = uuid.method || method;
  }

  const res = await fetchApi(`${client.baseUrl}/api/v1/pay/${id}/start`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${client.token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ method: payMethod })
  });

  return await res.json();
};
