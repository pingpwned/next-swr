import useSWR from "swr";

export const Component = ({ n }: { n: number }) => {
  const fetcher = async (url: string) => {
    return fetch(url).then(async (res) => {
      const json = await res.json();
      return json;
    });
  };

  useSWR(`n/${n}`, fetcher);
  return <h1>Hello {n}</h1>;
};
