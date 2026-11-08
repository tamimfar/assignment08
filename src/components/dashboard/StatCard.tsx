type StatCardProps = {
  title: string;
  value: string;
};

export function StatCard({ title, value }: StatCardProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{value}</p>
    </article>
  );
}
