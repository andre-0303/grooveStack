const API_URL = "https://api-groovestack.onrender.com";

export async function createVinyl(data) {
  const response = await fetch(`${API_URL}/vinyls`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar vinil");
  }

  return response.json();
}

export async function getVinyls() {
  const response = await fetch(`${API_URL}/vinyls`);

  if (!response.ok) {
    throw new Error("Erro ao buscar vinis");
  }

  return response.json();
}

/* 🔥 FALTAVA ESSA FUNÇÃO */
export async function getVinylById(id) {
  const response = await fetch(
    `https://api-groovestack.onrender.com/vinyls/${id}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar vinil");
  }

  return response.json();
}

export async function updateVinyl(id, data) {
  const response = await fetch(
    `https://api-groovestack.onrender.com/vinyls/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao atualizar vinil");
  }

  return response.json();
}

export async function deleteVinyl(id) {
  const response = await fetch(
    `https://api-groovestack.onrender.com/vinyls/${id}`,
    { method: "DELETE" }
  );

  if (!response.ok) {
    throw new Error("Erro ao excluir vinil");
  }
}
