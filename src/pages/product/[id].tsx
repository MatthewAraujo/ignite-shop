import { useRouter } from "next/router";

export default function product() {
  const { query } = useRouter();
  return (
    <div>
      <h1>Prodruct: {JSON.stringify(query)}</h1>
    </div>
  );
}
