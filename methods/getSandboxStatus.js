module.exports = async function getSandboxStatus(client, uuid) {
  const fetchApi = globalThis.fetch;

  if (!fetchApi) {
    throw new Error("Fetch API ushbu muhitda qo'llab-quvvatlanmaydi.");
  }

  const id = typeof uuid === 'object' ? (uuid.uuid || uuid.id) : uuid;

  const res = await fetchApi(`${client.baseUrl}/api/v1/sandbox/status/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${client.token}`,
      'Accept': 'application/json'
    }
  });

  return await res.json();
};
