import { useEffect, useState } from "react";

export default function useFetchApi({ urlApi, payload, header }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      try {
        const info = await urlApi(payload, header);
        setData(info.data);
      } catch (error) {
        console.error("error al realizar el pedido", error);
      }
    }
    fetchApi();
  }, [urlApi, header, payload]);

  return data;
}
