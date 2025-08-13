export function formatOptions(data: { id: string; name: string }[] | null) {
  if (!data) return [];
  const optionsFormatted = data?.map((option) => {
    return { value: option.id, label: option.name };
  });
  return optionsFormatted;
}
