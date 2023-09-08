import type { Launch } from "../types/launch";

export const getAllLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 20,
      },
    }),
  });
  const { docs: launches }: { docs: Launch[] } = await res.json();
  return launches;
};
export const getLaunchById = async (id: string) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const data = (await res.json()) as Launch;
  return data;
};
