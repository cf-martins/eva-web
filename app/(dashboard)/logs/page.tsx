import { DataTable } from "@/components/ui/data-table";
import { Payment, columns } from "./columns";

async function getData(): Promise<Payment[]> {
  return Array.from({ length: 1000 }, (_, index) => ({
    id: index.toString(),
    amount: Math.floor(Math.random() * 1000),
    status: "pending" as const,
    email: `
        ${Math.random().toString(36).substring(2, 6)}@example.com
      `,
    createdAt: new Date(
      new Date().getTime() - Math.floor(Math.random() * 10000000000),
    ).toISOString(),
  }));
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}
