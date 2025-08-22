import { Text } from "@/components/ui/text";

interface PageProps {
  params: Promise<{ id: number }>;
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id;
  return (
    <div>
      <Text>Detalhes {id}</Text>
    </div>
  );
}
