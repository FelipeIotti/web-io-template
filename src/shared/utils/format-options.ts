export function formatOptions(data: any[] | null) {
  if (!data) return [];
  const optionsFormatted = data?.map((option) => {
    return { value: option.id, label: option.name };
  });
  return optionsFormatted;
}
